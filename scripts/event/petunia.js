function Petunia(x,y)
{
  Event.call(this,"petunia");

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }

  this.update(20);
}