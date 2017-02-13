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
      var pos = this.position_from_id(i);
      var tile = new Tile(pos[0],pos[1],this.floors[i],"floor");
      this.element.appendChild(tile.element);
    }
  }

  this.position_from_id = function(id)
  {
    var t = [[1,-1],[1,0],[1,1],[0,-1],[0,0],[0,1],[-1,-1],[-1,0],[-1,1]]
    return t[id];
  }
}