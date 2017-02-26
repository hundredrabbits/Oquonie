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

    if(this.room){ $(this.room.element).empty(); $(this.room.element).remove(); }

    this.room = oquonie.world.rooms[room_id];
    this.element.appendChild(this.room.element);
    this.room.show();
    this.room.is_known = true;

    oquonie.player.move_at(x,y);

    oquonie.element.setAttribute("class",this.room.theme);

    this.look();
    this.center(oquonie.player.x,oquonie.player.y);
    $(this.element).css("opacity",0);
    $(this.element).animate({ opacity: "1" }, oquonie.speed/2);
  }

  this.look = function()
  {
    for (var i = 0; i < this.room.events.length; i++){
      this.room.events[i].on_sight();
    }
  }

  this.tile_at = function(x,y)
  {
    for (var i = 0; i < this.room.events.length; i++){
      var tile = this.room.events[i];
      if(tile.x == x && tile.y == y){ return tile; }
    }
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
    $(this.element).animate({ marginLeft: (x * -0.5)+"%",marginTop: (y * 0.5)+"%" }, oquonie.speed);
    $(this.parallax_over).animate({ marginLeft: (x * -0.75)+"%",marginTop: (y * 0.75)+"%" }, oquonie.speed);
    $(this.parallax_under).animate({ marginLeft: (x * -0.25)+"%",marginTop: (y * 0.25)+"%" }, oquonie.speed);
  }

  this.center = function(x,y)
  {
    $(this.element).css("margin-left",(x * -0.5)+"%").css("margin-top",(y * 0.5)+"%");
    $(this.parallax_over).animate({ marginLeft: (x * -0.75)+"%",marginTop: (y * 0.75)+"%" }, oquonie.speed);
    $(this.parallax_under).animate({ marginLeft: (x * -0.25)+"%",marginTop: (y * 0.25)+"%" }, oquonie.speed);
  }

  // Shake event

  this.shake = function(radius,time)
  {
    if(time < 1){ return; }
    console.log("shake");

    var r1 = Math.random() * 6;
    var r2 = Math.random() * 6;

    $(this.element).css("margin-top",r2).css("margin-left",r1);
    setTimeout(function(){ oquonie.stage.shake(radius,time-1); }, 50);
  }
}