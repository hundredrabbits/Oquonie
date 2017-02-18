function Wall(pos,id,type)
{
  Tile.call(this,"wall "+( pos < 3 ? "left" : "right"));

  var t = [[-1,2],[0,2],[1,2],[2,1],[2,0],[2,-1]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element.setAttribute("pos",x+","+y);

  if(id != 0){
    var bg = "url(media/graphics/wall/"+id+".png)";

    var p = this.position_at(x,y,50);
    var top = p[0];
    var left = p[1];
    var zIndex = p[2];

    this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
  }
}