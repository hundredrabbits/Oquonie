function Blocker(x,y,id)
{
  Event.call(this,"blocker");

  this.x = x;
  this.y = y;
  this.id = id;

  this.is_collider = function()
  {
    return true;
  }

  this.elicits_collision_bump = function()
  {
    return this.id != 0;
  }

  this.on_collision = function()
  {
    if(this.id != 0) { oquonie.music.play_effect("bump.1"); }
  }

  this.update(20);

  if(this.id != 0){ oquonie.artbook.set_art(this.element,"media/graphics/blocker/"+this.id+".png"); }
}
