function Wall(pos,id,type)
{
  Tile.call(this,"wall "+( pos < 3 ? "left" : "right"));

  var t = [[-1,2],[0,2],[1,2],[2,1],[2,0],[2,-1]];
  this.x = t[pos][0];
  this.y = t[pos][1];
  this.id = id;

  this.element.setAttribute("pos",this.x+","+this.y);

  var bg = "";

  var p = this.position_at(this.x,this.y,50);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  $(this.element).css("left",left).css("top",top).css("z-index",this.depth());
  if(this.id != 0){ $(this.element).css("background-image","url(media/graphics/wall/"+id+".png)"); }  
}