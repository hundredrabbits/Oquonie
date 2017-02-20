function Player()
{
  Event.call(this,"player");
  this.id = "necomedre";
  this.orientation = "front";

  this.animator.add(new Animation("idle.front",[1,1,1,1,1,2,3,2]));
  this.animator.add(new Animation("idle.back",[1]));
  this.animator.add(new Animation("walk.front",[1,2]));
  this.animator.add(new Animation("walk.back",[1,2]));

  this.animator.state = "idle.front";

  this.transform = function(spell)
  {
    this.id = spell;
  }

  this.try_move = function(x,y)
  {
    if(oquonie.dialog.content){
      oquonie.dialog.hide();
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
    }
    else if(destination[0] > 1 || destination[0] < -1 || destination[1] > 1 || destination[1] < -1){
      console.log("Blocked by: Edge");
    }
    else if(target_floor == 0){
      console.log("Blocked by: Floor("+target_floor+")");
    }
    else{
      this.move_by(x,y);
      console.log("Moved to: Floor("+this.x+","+this.y+")");
    }

    if(target_tile){
      target_tile.on_step();
    }

    this.update();
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
  }

  this.update();
}