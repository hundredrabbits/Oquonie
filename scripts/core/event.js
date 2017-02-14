function Event(subtype)
{
  Tile.call(this,"event");
  this.element.className += " "+subtype;

  this.update = function()
  {
    
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