function Boss(x,y)
{
  Event.call(this,"boss");

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.player.transform("necomedre");
    oquonie.player.warp_at(1,0,0);
  }

  this.update();
}