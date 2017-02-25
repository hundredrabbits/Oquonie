function Floor(pos,id,type)
{
  Tile.call(this,"floor");

  var t = [[-1,1],[0,1],[1,1],[-1,0],[0,0],[1,0],[-1,-1],[0,-1],[1,-1]];
  this.x = t[pos][0];
  this.y = t[pos][1];
  this.id = id;

  this.element.setAttribute("pos",this.x+","+this.y);

  var p = this.position_at(this.x,this.y,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  $(this.element).css("left",left).css("top",top).css("z-index",zIndex);
  if(this.id != 0){ $(this.element).css("background-image","url(media/graphics/floor/"+this.id+".png)"); }
}