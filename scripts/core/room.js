function Room()
{
  this.element = document.createElement("room");

  this.floors = [];
  this.walls = [];
  this.steps = [];
  this.audio = null;
  this.theme = null;
  this.events = [];

  this.add_event = function(event)
  {
    this.events.push(event);
  }

  this.show = function()
  {
    // Floor
    for (var i = 0; i < this.floors.length; i++){
      var tile = new Floor(i,this.floors[i],"floor");
      this.element.appendChild(tile.element);
    }

    // Wall
    for (var i = 0; i < this.walls.length; i++){
      var tile = new Wall(i,this.walls[i],"wall");
      this.element.appendChild(tile.element);
    }
  }
}