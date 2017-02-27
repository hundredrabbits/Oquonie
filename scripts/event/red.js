function Red(x,y)
{
  Event.call(this,"red");

  this.x = x;
  this.y = y;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show(this.name,["foe","pillar","friend"]);
    keyboard.lock("red_end");
    setTimeout(function(){ oquonie.stage.pan_up(oquonie.speed * 100); }, 1000);
    setTimeout(function(){ oquonie.dialog.hide(); }, oquonie.speed * 75);
  }

  this.on_sight = function()
  {
    keyboard.lock("red_delay");
    setTimeout(function(){ keyboard.unlock("red_delay"); }, 1000);
  }

  this.update(20);
}