"use strict";

function Gate(requirement,x,y,room,to_x,to_y)
{
  Event.call(this,"gate");

  this.requirement = requirement;
  this.x = x;
  this.y = y;
  this.room = room;
  this.to_x = to_x;
  this.to_y = to_y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {    
    if(this.requirement != oquonie.player.id && oquonie.player.id != "nastazie"){
      console.warn("Gate requires: "+this.requirement+", is "+oquonie.player.id);
      oquonie.dialog.show("owl",["door","locked",this.requirement])
      return;
    }
    oquonie.stage.enter_room(this.room,this.to_x,this.to_y);
    oquonie.music.play_effect("bump.2");
  }

  this.on_sight = function()
  {
    let wall_id = oquonie.stage.wall_at(this.x,this.y);
    if (wall_id != null)
    {
      oquonie.artbook.set_art("#wall_"+wall_id,"media/graphics/wall/gate."+this.requirement+"."+(this.requirement == oquonie.player.id || oquonie.player.id == "nastazie" ? "open" : "close")+".png");
    }
  }
}
