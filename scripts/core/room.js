function Room()
{
  this.element = document.createElement("room");

  this.floors = [];
  this.walls = [];
  this.steps = [];
  this.audio = null;
  this.theme = null;
  this.events = [];

  this.add_event = function(event,is_mirrored = false)
  {
    if(is_mirrored == true){ event.mirror(); }
    
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

    // Steps
    for (var i = 0; i < this.steps.length; i++){
      var tile = new Step(i,this.steps[i],"step");
      this.element.appendChild(tile.element);
    }

    // Events
    for (var i = 0; i < this.events.length; i++){
      this.element.appendChild(this.events[i].element);
    }

    this.element.appendChild(oquonie.player.element);
  }
}