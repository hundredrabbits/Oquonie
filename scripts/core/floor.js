function Floor(pos,id,type)
{
  Tile.call();

  var t = [[1,-1],[1,0],[1,1],[0,-1],[0,0],[0,1],[-1,-1],[-1,0],[-1,1]];
  var x = t[pos][0];
  var y = t[pos][1];

  this.element = document.createElement("tile");
  this.element.className = type;
  this.element.setAttribute("pos",x+","+y);

  var bg = "url(media/graphics/tile."+id+".png); ";

  var top = "0px";
  var left = "0px";
  var zIndex = 100;

  if(x == 1 && y == 1){ top = "40%"; left = "50%"; zIndex += 10; }
  if(x == 1 && y == 0){ top = "45%"; left = "40%"; zIndex += 20; }
  if(x == 1 && y == -1){ top = "50%"; left = "30%"; zIndex += 30; }

  if(x == 0 && y == 1){ top = "45%"; left = "60%"; zIndex += 20; }
  if(x == 0 && y == 0){ top = "50%"; left = "50%"; zIndex += 30; }
  if(x == 0 && y == -1){ top = "55%"; left = "40%"; zIndex += 40; }

  if(x == -1 && y == 1){ top = "50%"; left = "70%"; zIndex += 30; }
  if(x == -1 && y == 0){ top = "55%"; left = "60%"; zIndex += 40; }
  if(x == -1 && y == -1){ top = "60%"; left = "50%"; zIndex += 50; }

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}