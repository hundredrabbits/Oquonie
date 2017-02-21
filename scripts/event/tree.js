function Tree(x,y)
{
  Event.call(this,"tree");

  this.x = x;
  this.y = y;
  
  this.animator.add(new Animation("idle",[1]));

  this.is_collider = function()
  {
    return true;
  }
}