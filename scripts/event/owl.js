function Owl(x,y)
{
  Event.call(this,"owl");

  this.x = x;
  this.y = y;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show(this,["letter","letter","letter"]);
  }

  this.on_sight = function()
  {
    // save
  }

  this.update();
}