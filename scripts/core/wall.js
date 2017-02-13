function Wall(pos,id,type)
{
  Tile.call(this);

  var t = [[2,-1],[2,0],[2,1],[1,2],[0,2],[-1,2]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element = document.createElement("tile");
  this.element.className = type+" "+( pos < 3 ? "left" : "right");
  this.element.setAttribute("pos",x+","+y);

  var bg = "url(media/graphics/wall."+id+".png)";

  var p = this.position_at(x,y,50);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}