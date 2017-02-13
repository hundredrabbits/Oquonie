function Wall(pos,id,type)
{
  Tile.call();

  var t = [[2,-1],[2,0],[2,1],[1,2],[0,2],[-1,2]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element = document.createElement("tile");
  this.element.className = type+" "+( pos < 3 ? "left" : "right");
  this.element.setAttribute("pos",x+","+y);

  var bg = "url(media/graphics/wall."+id+".png)";

  var top = "0px";
  var left = "0px";
  var zIndex = 50;

  if(x == 2 && y == 1) { top = "38%"; left = "40%"; zIndex += 10; }
  if(x == 2 && y == 0) { top = "43%"; left = "30%"; zIndex += 20; }
  if(x == 2 && y == -1){ top = "48%"; left = "20%"; zIndex += 30; }

  if(x == 1 && y == 2) { top = "38%"; left = "60%"; zIndex += 20; }
  if(x == 0 && y == 2) { top = "43%"; left = "70%"; zIndex += 30; }
  if(x == -1 && y == 2){ top = "48%"; left = "80%"; zIndex += 40; }

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}