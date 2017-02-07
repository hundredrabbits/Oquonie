function Blocker(x,y,id,name,dialog,orientation)
{
  this.sprite = new Sprite();
  this.x = 0;
  this.y = 0;
  this.orientation = null;

  Event.call(this)
}