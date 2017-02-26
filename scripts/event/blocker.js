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

  this.update(20);

  if(this.id != 0){ $(this.element).css("background-image","url(media/graphics/blocker/"+this.id+".png)"); }
}