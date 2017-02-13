function Event(subtype)
{
  Tile.call(this,"event");
  this.element.className += " "+subtype;
}