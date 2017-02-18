function Floor(pos,id,type)
{
  Tile.call(this,"floor");

  var t = [[-1,1],[0,1],[1,1],[-1,0],[0,0],[1,0],[-1,-1],[0,-1],[1,-1]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element.setAttribute("pos",x+","+y);

  var bg = "url(media/graphics/floor/"+id+".png); ";

  var p = this.position_at(x,y,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}