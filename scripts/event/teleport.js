function Teleport(x,y)
{
  Event.call(this,"teleport");

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }
}