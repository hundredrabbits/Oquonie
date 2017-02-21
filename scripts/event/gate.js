function Gate(requirement,x,y,room,to_x,to_y)
{
  Event.call(this,"gate");

  this.requirement = requirement;
  this.x = x;
  this.y = y;
  this.room = room;
  this.to_x = to_x;
  this.to_y = to_y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    if(this.requirement != oquonie.player.id){
      console.warn("Gate requires: "+this.requirement+", is "+oquonie.player.id);
      return;
    }
    oquonie.stage.enter_room(this.room,this.to_x,this.to_y);
  }

  this.on_sight = function()
  {
    var wall_id = oquonie.stage.wall_at(this.x,this.y);
    $("#wall_"+wall_id).css("background-image","url(media/graphics/wall/gate."+this.requirement+"."+(this.requirement == oquonie.player.id ? "open" : "close")+".png)")
  }
}