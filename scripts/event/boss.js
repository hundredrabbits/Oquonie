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
    var boss = this.start_sequence();
    this.is_known = true;
    
    oquonie.stage.shake(5,50);
    // oquonie.stage.room.walls[2].id = 19;
    // oquonie.stage.room.walls[2].update();
    // setTimeout(function(){ boss.start_sequence(); }, 2-50);
  }

  this.start_sequence = function()
  {
    // oquonie.player.transform("necomedre");
    // oquonie.player.warp_at(1,0,0);
  }

  this.update(20);
}