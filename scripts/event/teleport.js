function Teleport(x,y,room,to_x = 0,to_y = 0)
{
  Event.call(this,"teleport");

  this.x = x;
  this.y = y;
  this.room = room;
  this.to_x = to_x;
  this.to_y = to_y;

  this.is_collider = function()
  {
    return false;
  }

  this.on_step = function()
  {
    console.log("Teleport to: "+this.room);
    oquonie.player.warp_at(this.room,this.to_x,this.to_y);
  }
}