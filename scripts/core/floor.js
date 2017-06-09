function Floor(pos,id,type)
{
  Tile.call(this,"floor");

  var t = [[-1,1],[0,1],[1,1],[-1,0],[0,0],[1,0],[-1,-1],[0,-1],[1,-1]];
  this.x = t[pos][0];
  this.y = t[pos][1];
  this.id = id;

  this.element.setAttribute("pos",this.x+","+this.y);

  this.update(5);

  if(this.id != 0){ oquonie.artbook.set_art(this.element,"media/graphics/floor/"+this.id+".png"); }
}
