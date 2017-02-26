function Tile(type = "unknown")
{
  this.element = document.createElement("tile");
  this.element.className = type;
  this.x = 0;
  this.y = 0;

  this.position_at = function(x,y,z)
  {
    var top = "0px";
    var left = "0px";
    var zIndex = z;

    if(x == 1 && y == 1){ top = "40%"; left = "50%"; zIndex += 10; }
    if(x == 1 && y == 0){ top = "45%"; left = "60%"; zIndex += 20; }
    if(x == 1 && y == -1){ top = "50%"; left = "70%"; zIndex += 30; }

    if(x == 0 && y == 1){ top = "45%"; left = "40%"; zIndex += 20; }
    if(x == 0 && y == 0){ top = "50%"; left = "50%"; zIndex += 30; }
    if(x == 0 && y == -1){ top = "55%"; left = "60%"; zIndex += 40; }

    if(x == -1 && y == 1){ top = "50%"; left = "30%"; zIndex += 30; }
    if(x == -1 && y == 0){ top = "55%"; left = "40%"; zIndex += 40; }
    if(x == -1 && y == -1){ top = "60%"; left = "50%"; zIndex += 50; }

    // Wall
    if(x == -1 && y == 2){ top = "48%"; left = "20%"; zIndex += 40; }
    if(x == 0 && y == 2) { top = "43%"; left = "30%"; zIndex += 30; }
    if(x == 1 && y == 2) { top = "38%"; left = "40%"; zIndex += 20; }
    if(x == 2 && y == 1) { top = "38%"; left = "60%"; zIndex += 10; }
    if(x == 2 && y == 0) { top = "43%"; left = "70%"; zIndex += 20; }
    if(x == 2 && y == -1){ top = "48%"; left = "80%"; zIndex += 30; }

    // Step
    if(x == -2 && y == 1){ top = "55%"; left = "20%"; zIndex += 10; }
    if(x == -2 && y == 0) { top = "60%"; left = "30%"; zIndex += 20; }
    if(x == -2 && y == -1) { top = "65%"; left = "40%"; zIndex += 30; }
    if(x == -1 && y == -2) { top = "65%"; left = "60%"; zIndex += 30; }
    if(x ==  0 && y == -2) { top = "60%"; left = "70%"; zIndex += 20; }
    if(x ==  1 && y == -2){ top = "55%"; left = "80%"; zIndex += 10; }

    return [top,left,zIndex];
  }

  this.depth = function()
  {
    return 1;
  }

  this.animate = function()
  {
    var origin = parseInt(this.position_at(this.x,this.y)[0]);
    var offset = (origin*(1+(Math.random()/20)));
    $(this.element).css("opacity", 0).css("top", offset+"%").animate({ opacity: 1, top: origin+"%" }, oquonie.speed*2);
  }
}