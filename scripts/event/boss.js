function Boss(x,y)
{
  Event.call(this,"boss");

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
  this.animator.add(new Animation("ghost",[1,1,1,1,1,2,3,2]));

  this.x = x;
  this.y = y;

  this.is_gone = false;

  this.is_collider = function()
  {
    console.log("???",this.is_gone);
    return this.is_gone === true ? false : true;
  }

  this.on_collision = function()
  {
    if(this.is_gone === true){ return; }

    keyboard.lock();
    
    setTimeout(function(){ oquonie.stage.shake(5,80); }, 1500);
    setTimeout(function(){ oquonie.stage.destroy(); }, 2000);
    setTimeout(function(){ oquonie.player.transform("necomedre"); }, 2300);
    setTimeout(function(){ oquonie.stage.set_theme("black"); }, 2300);

    this.animator.state = "ghost";

    $(this.element).delay(oquonie.speed * 8).animate({ marginTop: -35+"%", opacity:0 }, oquonie.speed * 2);
    this.is_gone = true;
  }

  this.update(20);
}