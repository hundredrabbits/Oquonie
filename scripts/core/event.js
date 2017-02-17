function Event(subtype)
{
  Tile.call(this,"event");
  this.element.className += " "+subtype;

  this.update = function()
  {
    
  }

  this.move_at = function(x,y)
  {
    this.x = x;
    this.y = y;

    this.update();
  }

  this.is_collider = function()
  {
    return false;
  }

  this.on_collision = function()
  {
    console.log("On collision, no effect");
  }
}