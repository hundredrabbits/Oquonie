"use strict";

function Broken(x,y,id,room,to_x,to_y)
{
  Event.call(this,"broken");

  this.x = x;
  this.y = y;
  this.id = id;
  this.room = room;
  this.to_x = to_x;
  this.to_y = to_y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {    
    if(oquonie.spellbook.pillars < 5){ return; }
    oquonie.stage.enter_room(this.room,this.to_x,this.to_y);
  }

  this.on_sight = function()
  {
    if(oquonie.spellbook.pillars.length < 5){ return; }
    let wall_id = oquonie.stage.wall_at(this.x,this.y);
    oquonie.artbook.set_art("#wall_"+wall_id,"media/graphics/broken/"+this.id+".png");
  }
}
