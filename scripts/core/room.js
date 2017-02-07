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
    for (var i = 0; i < this.floors.length; i++){
      var tile = new Tile(1,1,this.floors[i]);
      this.element.appendChild(tile.element);
    }
  }
}