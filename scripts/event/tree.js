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
    if(oquonie.spellbook.pillars.length < 1){
      this.id = 1;
    }
    else if(oquonie.spellbook.pillars.length > 4){
      this.id = 5;
    }
    else{
      this.id = oquonie.spellbook.pillars.length;
    }
  }

  this.update();
}