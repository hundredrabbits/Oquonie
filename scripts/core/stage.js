function Stage()
{
  this.element = document.createElement("stage");

  this.room = null;

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
  }

  this.leave_room = function()
  {
    if(!this.room){ return; }
    this.room.hide();
  }

  this.enter_room = function(room_id)
  {
    console.log("Entering Room: "+room_id);

    if(!oquonie.world.rooms[room_id]){
      console.log("Missing room:("+room_id+")");
    }

    this.room = oquonie.world.rooms[room_id];

    this.element.appendChild(this.room.element);

    this.room.show();
  }

  this.tile_at = function(x,y)
  {
    for (var i = 0; i < this.room.events.length; i++){
      var tile = this.room.events[i];
      if(tile.x == x && tile.y == y){ return tile; }
      else{ console.log("target:"+x+","+y+" / "+tile.x+","+tile.y); }
    }
  }

  this.floor_at = function(x,y)
  {
    if(x == -1 && y ==  1){ return 0; }
    if(x ==  0 && y ==  1){ return 1; }
    if(x ==  1 && y ==  1){ return 2; }

    if(x == -1 && y ==  0){ return 3; }
    if(x ==  0 && y ==  0){ return 4; }
    if(x ==  1 && y ==  0){ return 5; }

    if(x == -1 && y == -1){ return 6; }
    if(x ==  0 && y == -1){ return 7; }
    if(x ==  1 && y == -1){ return 8; }
    return 99;
  }
}