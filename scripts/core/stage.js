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
}