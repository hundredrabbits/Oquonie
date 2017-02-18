function Wizard(x,y,id)
{
  Event.call(this,"wizard");

  this.x = x;
  this.y = y;
  this.id = id;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.update();
}