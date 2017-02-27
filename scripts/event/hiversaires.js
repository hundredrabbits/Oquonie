function Hiversaires(x,y)
{
  Event.call(this,"hiversaires");

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show("hiversaires",["hiversaires1","hiversaires2","hiversaires3"])
  }

  this.update(20);
}