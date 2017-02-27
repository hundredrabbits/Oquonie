function Player()
{
  Event.call(this,"player");

  this.id = "necomedre";
  this.orientation = "front";

  this.animator.add(new Animation("idle.front",[1,1,1,1,1,2,3,2]));
  this.animator.add(new Animation("idle.back",[1]));
  this.animator.add(new Animation("walk.front",[1,2]));
  this.animator.add(new Animation("walk.back",[1,2]));
  this.animator.add(new Animation("warp",[1]));

  this.animator.state = "idle.front";
  this.shadow = new Shadow();

  this.element.appendChild(this.shadow.element);

  this.try_move = function(x,y)
  {
    if(oquonie.dialog.content){
      oquonie.dialog.hide();
      return;
    }
    if(oquonie.overlay.content){
      oquonie.overlay.hide();
      return;
    }

    if(x == 0 && y == -1){ $(this.element).attr("orientation","front").attr("direction","right"); }
    if(x == -1 && y == 0){ $(this.element).attr("orientation","front").attr("direction","left"); }
    if(x == 0 && y == 1){ $(this.element).attr("orientation","back").attr("direction","left"); }
    if(x == 1 && y == 0){ $(this.element).attr("orientation","back").attr("direction","right"); }

    var destination = [this.x + x, this.y + y];
    var target_tile = oquonie.stage.tile_at(this.x + x, this.y + y);
    var target_floor = oquonie.stage.floor_at(this.x + x, this.y + y);

    if(target_tile && target_tile.is_collider() == true){
      console.log("Blocked by: "+target_tile.constructor.name);
      target_tile.on_collision();
      this.bump(x,y,target_tile);
    }
    else if(destination[0] > 1 || destination[0] < -1 || destination[1] > 1 || destination[1] < -1){
      console.log("Blocked by: Edge");
      oquonie.music.play_effect("bump.2");
    }
    else if(target_floor == 0){
      console.log("Blocked by: Floor("+target_floor+")");
      oquonie.music.play_effect("bump.3");
    }
    else{
      this.move_by(x,y);
      console.log("Moved to: Floor("+this.x+","+this.y+")");
      oquonie.music.play_effect("walk");
    }

    if(target_tile){
      target_tile.on_step();
    }

    this.update(20);
  }

  this.update = function()
  {
    this.character = "neomine";
    this.orientation = $(this.element).attr("orientation");
    this.direction = $(this.element).attr("direction");
    this.animation_frame = 1;

    if(this.direction == "right"){
      $(this.element).addClass("mirror");
    }
    else{
      $(this.element).removeClass("mirror"); 
    }
    $(this.element).css("z-index",this.depth(20));
  }

  this.lift = function(speed)
  {
    this.animator.state = "warp";

    $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.position_at(this.x,this.y)[0])*0.9)+"%" }, speed);
    $(oquonie.player.shadow.element).delay(300).animate({ top: 10+"%", opacity:0 },speed/2);
  }

  this.land = function()
  {
    $(oquonie.player.element).css("top",(parseInt(this.position_at(this.x,this.y)[0])*0.6)+"%").delay(300).animate({ top: (parseInt(this.position_at(this.x,this.y)[0]))+"%" }, oquonie.speed*20, function(){ oquonie.player.animator.state = "idle.front"; });
    $(oquonie.player.shadow.element).css("top",(parseInt(this.position_at(this.x,this.y)[0])*1.4)+"%").delay(300).animate({ top: 0+"%", opacity:1 }, oquonie.speed*20);
  }

  // Transform

  this.transform = function(spell)
  {    
    console.log("Transform(init): "+spell);
    keyboard.lock("transform");

    this.animator.state = "warp";

    oquonie.music.play_effect("transform");

    $(oquonie.player.element).delay(300).animate({ top: (parseInt(this.position_at(this.x,this.y)[0])*0.9)+"%" }, oquonie.speed*2, function(){
      oquonie.player.transform_lift(spell);
    });
    $(oquonie.player.shadow.element).delay(300).animate({ top: 10+"%", opacity:0 }, oquonie.speed*2);
  }

  this.transform_lift = function(spell)
  {
    console.log("Transform(lift): "+spell);

    $(oquonie.player.element).animate({ opacity:0, top: (parseInt(this.position_at(this.x,this.y)[0])*0.85)+"%" }, oquonie.speed*4, function(){
      oquonie.player.transform_character(spell);
    });
  }

  this.transform_character = function(spell)
  {
    console.log("Transform(char): "+spell);

    oquonie.player.id = spell;
    oquonie.stage.look();

    $(oquonie.player.element).animate({ opacity:1 }, oquonie.speed*2).delay(1000).animate({ top: oquonie.player.position_at(oquonie.player.x,oquonie.player.y)[0] }, oquonie.speed*8, function(){
      oquonie.player.transform_done();
    });
    $(oquonie.player.shadow.element).delay(1300).animate({ top: 0+"%", opacity:1 }, oquonie.speed*8);
  }

  this.transform_done = function()
  {
    console.log("Transform(done)");
    keyboard.unlock("transform");
    oquonie.player.animator.state = "idle.front";
  }

  this.update(20);
}