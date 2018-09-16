function Step(pos,id,type)
{
  Tile.call(this,"step "+( pos < 3 ? "left" : "right"));

  var t = [[-2,1],[-2,0],[-2,-1],[-1,-2],[0,-2],[1,-2]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.x = t[pos][0];
  this.y = t[pos][1];
  this.id = id;

  this.element.setAttribute("pos",this.x+","+this.y);

  this.update(100);
  if(this.id != 0){ oquonie.artbook.set_art(this.element,"media/graphics/step/"+this.id+".png"); }
}
