function Tree(x,y)
{
  Event.call(this,"tree");

  this.x = x;
  this.y = y;
  this.id = 2;
  
  this.animator.add(new Animation("idle",[1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_sight = function()
  {
    this.id = oquonie.spellbook.pillars.length < 1 ? 1 : oquonie.spellbook.pillars.length;
  }

  this.update();
}