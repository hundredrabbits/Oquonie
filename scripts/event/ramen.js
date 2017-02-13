function Ramen(x,y,id)
{
  Tile.call(this,"event");

  var bg = "url(media/graphics/event.ramen.1.png)";

  var p = this.position_at(x,y,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}