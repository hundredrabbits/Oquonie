function Door(x,y,room,to_x,to_y)
{
  Event.call(this,"door");

  this.x = x;
  this.y = y;

  this.destinations = [];

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    for (var i = 0; i < this.destinations.length; i++)
    {
      if (this.destinations[i].fn())
      {
          oquonie.stage.enter_room(this.destinations[i].room,this.destinations[i].to_x,this.destinations[i].to_y);
          break;
      }
    }
    oquonie.music.play_effect("bump.2");
  }

  this.add_destination = function(conditionFn, room, to_x, to_y)
  {
    this.destinations.unshift({fn:conditionFn, room:room, to_x:to_x, to_y:to_y});
  }

  this.add_destination(function(){return true}, room, to_x, to_y);
}
