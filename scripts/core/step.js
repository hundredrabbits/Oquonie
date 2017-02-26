function Step(pos,id,type)
{
  Tile.call(this,"step "+( pos < 3 ? "left" : "right"));

  var t = [[-2,1],[-2,0],[-2,-1],[-1,-2],[0,-2],[1,-2]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element.setAttribute("pos",x+","+y);

  this.x = t[pos][0];
  this.y = t[pos][1];
  this.id = id;

  this.element.setAttribute("pos",this.x+","+this.y);

  var bg = "";

  var p = this.position_at(this.x,this.y,50);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  $(this.element).css("left",left).css("top",top).css("z-index",this.depth(100));
  if(this.id != 0){ $(this.element).css("background-image","url(media/graphics/step/"+this.id+".png)"); }
}