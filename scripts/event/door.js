function Door(x,y,room,to_x,to_y)
{
  Event.call(this,"door");

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
    oquonie.stage.enter_room(this.room,this.to_x,this.to_y);
  }
}