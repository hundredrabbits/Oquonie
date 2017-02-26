function Shark(x,y)
{
  Event.call(this,"shark");

  this.x = x;
  this.y = y;
  this.id = "active";

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.player.transform("necomedre");
  }

  this.update(20);
}