"use strict";

function Stage()
{
  this.element = document.createElement("stage");
  this.parallax_over = document.createElement("parallax");
  this.parallax_under = document.createElement("parallax");

  this.room = null;

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
    this.element.appendChild(this.parallax_over);
    this.element.appendChild(this.parallax_under);
    this.parallax_over.setAttribute("class","over");
    this.parallax_under.setAttribute("class","under");
  }

  this.enter_room = function(room_id,x = 0,y = 0)
  {
    console.log("Entering Room: "+room_id);

    if(!oquonie.world.rooms[room_id]){
      console.warn("Missing room:("+room_id+")");
      return;
    }

    $(this.element).finish();
    $(this.parallax_over).finish();
    $(this.parallax_under).finish();
    oquonie.player.stand_by_door(x,y);

    if(this.room){ $(this.room.element).empty(); $(this.room.element).remove(); }

    this.room = oquonie.world.rooms[room_id];
    this.element.appendChild(this.room.element);
    this.room.show();
    this.room.is_known = true;
    oquonie.player.location = room_id;

    oquonie.player.move_at(x,y);
    
    let numPillars = oquonie.spellbook.pillars.length;
    let theme = (numPillars >= 5 && this.room.theme != "pillars") ? "black" : this.room.theme;

    oquonie.stage.set_theme(theme);

    this.look();
    this.center(oquonie.player.x,oquonie.player.y);
    $(this.element).css("opacity",0);
    $(this.element).animate({ opacity: "1" }, oquonie.speed/2);

    let audio = this.room.audio;
    if (audio == "lobby")
    {
      if (numPillars >= 5)
      {
        audio = "lobby.3";
      }
      else if (numPillars > 0) {
        audio = "lobby.2";
      }
    }

    oquonie.music.play_ambient(audio);
  }

  this.look = function()
  {
    for (let i = 0; i < this.room.events.length; i++){
      this.room.events[i].on_sight();
    }
  }

  this.tiles_at = function(x,y)
  {
    let tiles = [];
    for (let i = 0; i < this.room.events.length; i++){
      let tile = this.room.events[i];
      if(tile.x == x && tile.y == y){ tiles.push(tile); }
    }
    return tiles;
  }

  this.floor_at = function(x,y)
  {
    if(x == -1 && y ==  1){ return this.room.floors[0]; }
    if(x ==  0 && y ==  1){ return this.room.floors[1]; }
    if(x ==  1 && y ==  1){ return this.room.floors[2]; }

    if(x == -1 && y ==  0){ return this.room.floors[3]; }
    if(x ==  0 && y ==  0){ return this.room.floors[4]; }
    if(x ==  1 && y ==  0){ return this.room.floors[5]; }

    if(x == -1 && y == -1){ return this.room.floors[6]; }
    if(x ==  0 && y == -1){ return this.room.floors[7]; }
    if(x ==  1 && y == -1){ return this.room.floors[8]; }

    return null;
  }

  this.wall_at = function(x,y)
  {
    if(x == -1 && y ==  2){ return 0; }
    if(x ==  0 && y ==  2){ return 1; }
    if(x ==  1 && y ==  2){ return 2; }

    if(x ==  2 && y ==  1){ return 3; }
    if(x ==  2 && y ==  0){ return 4; }
    if(x ==  2 && y == -1){ return 5; }
  }

  this.animate = function(x,y)
  {
    this.center(x,y);
  }

  this.center = function(x,y)
  {
    let xSlant = x - y;
    let ySlant = -x - y;
    this.move_parallax(this.element,        0.5,   xSlant, ySlant);
    this.move_parallax(this.parallax_over,  1.0,   xSlant, ySlant);
    this.move_parallax(this.parallax_under, 0.125, xSlant, ySlant);
  }

  this.move_parallax = function(e, mult, x, y)
  {
    $(e).css({
      "transition" : "transform " + (oquonie.speed/1000)+"s",
      "-webkit-transition" : "-webkit-transform " + (oquonie.speed/1000)+"s",
      "transform" : "translate("+(mult*x)+"%,"+(mult*y)+"%)",
      "-webkit-transform" : "translate("+(mult*x)+"%,"+(mult*y)+"%)"
    });
  }

  this.set_theme = function(theme)
  {
    oquonie.element.setAttribute("class",theme);

    $(this.room.element).css("z-index", (theme == "pillars" ? 1000 : 3000))
  }

  //

  this.warp_to = function(room,x,y)
  {
    console.log("Teleporting to: "+room);
    this.pan_up();

    oquonie.music.play_effect("teleport");
    setTimeout(function(){ oquonie.stage.pan_down(); }, (oquonie.speed*10)+400);
    setTimeout(function(){ oquonie.stage.load_room(room,x,y); }, (oquonie.speed*10));
  }

  this.pan_up = function(speed = oquonie.speed*10)
  {
    oquonie.player.lift(speed);
    $(this.element).delay(300).animate({ top: "100vh" }, speed);
  }

  this.pan_down = function()
  {
    oquonie.player.land();
    $(this.element).css("top","-100vh").delay(300).animate({ top: 0 }, oquonie.speed*10, function(){
      keyboard.unlock("teleport");
    });
  }

  this.load_room = function(room_id,x,y)
  {
    console.log("Loading Room: "+room_id);

    if(!oquonie.world.rooms[room_id]){
      console.warn("Missing room:("+room_id+")");
      return;
    }

    if(this.room){ $(this.room.element).empty(); $(this.room.element).remove(); }

    this.room = oquonie.world.rooms[room_id];
    this.element.appendChild(this.room.element);
    this.room.show();
    this.room.is_known = true;

    oquonie.player.move_at(x,y);

    let numPillars = oquonie.spellbook.pillars.length;
    let theme = (numPillars >= 5 && this.room.theme != "pillars") ? "black" : this.room.theme;
    oquonie.stage.set_theme(theme);

    this.look();
    this.center(oquonie.player.x,oquonie.player.y);
    $(this.element).css("opacity",0);
    $(this.element).animate({ opacity: "1" }, oquonie.speed/2);
  }

  // Shake event

  this.shake = function(radius,time)
  {
    if(time < 1){ return; }

    let r1 = Math.random() * 6;
    let r2 = Math.random() * 6;

    $(this.element).css("margin-top",r2).css("margin-left",r1);
    setTimeout(function(){ oquonie.stage.shake(radius,time-1); }, 50);
  }

  this.destroy = function(step = 6)
  {
    if(step < 1){ return; }

    if(step == 6){ oquonie.artbook.set_art("#wall_1","media/graphics/wall/19.png"); }
    if(step == 5){ oquonie.artbook.set_art("#wall_5","media/graphics/wall/15.png"); }
    if(step == 4){ oquonie.artbook.set_art("#wall_3","media/graphics/wall/25.png"); }
    if(step == 3){ oquonie.artbook.set_art("#wall_0","media/graphics/wall/26.png"); }
    // if(step == 2){ oquonie.artbook.set_art("#wall_4","media/graphics/wall/gate.necomedre.open.png"); }
    if(step == 2){ oquonie.artbook.set_art("#wall_4","media/graphics/wall/40.png"); }
    if(step == 1){ oquonie.artbook.set_art("#wall_2","media/graphics/wall/15.png"); }

    setTimeout(function(){ oquonie.stage.destroy(step-1); }, 50);
  }
}
