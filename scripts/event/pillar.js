function Pillar(x,y,character,warp = 1,transform = null)
{
  Event.call(this,"pillar");

  this.x = x;
  this.y = y;
  this.id = "full";
  this.warp = warp;
  this.character = character;
  this.transform = transform;

  this.animator.add(new Animation("idle",[1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.spellbook.add_pillar(this.character);
    this.on_sight();
    oquonie.player.warp_at(this.warp,0,0);
    if(this.transform){
      oquonie.player.transform(this.transform);
    }
  }

  this.on_sight = function()
  {
    if(oquonie.spellbook.has_pillar(this)){
      this.id = "gone";
    }
    else{
      this.id = "full";
    }
  }

  this.update(20);
}