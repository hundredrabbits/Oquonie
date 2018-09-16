"use strict";

function Cameo(id,x,y,dialog)
{
  Event.call(this,"cameo");

  this.id = id;
  this.x = x;
  this.y = y;
  this.dialog = dialog;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {    
    oquonie.dialog.show("cameo/"+this.id,this.dialog,null,"daniel");
  }

  this.update(20);
}
