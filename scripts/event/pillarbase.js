function PillarBase(x,y,character)
{
  Event.call(this,"pillarbase");

  this.x = x;
  this.y = y;
  this.id = "base";
  this.character = character;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_sight = function()
  {
    if(oquonie.spellbook.has_pillar(this)){
      this.id = "complete";
    }
    else{
      this.id = "base";
    }
  }

  this.update(20);
}