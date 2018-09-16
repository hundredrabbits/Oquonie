"use strict";

function Credit(x,y,id)
{
  Event.call(this,"credit");

  this.x = x;
  this.y = y;
  this.id = id;

  this.animator.add(new Animation("idle",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,2]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show(this.id,["confusion1","confusion3","confusion2"],"media/graphics/credit/"+this.id+".");
  }

  this.update(20);
}
