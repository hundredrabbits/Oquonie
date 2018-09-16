"use strict";

function Plan(x,y,id)
{
  Event.call(this,"door");

  this.x = x;
  this.y = y;
  this.id = id;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.overlay.show(this.id);
    oquonie.dialog.show("owl",["help","guide","friend"]);
    oquonie.music.play_effect("bump.2");
  }
}