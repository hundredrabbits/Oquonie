function Wizard(x,y,id)
{
  Event.call(this,"wizard");

  this.x = x;
  this.y = y;
  this.id = id;

  this.notification = document.createElement("notification");
  this.element.appendChild(this.notification);

  $(this.notification).css("background-image","url(media/graphics/notification/"+this.id+".png)")

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.spell_name = function()
  {
    return this.id+"_"+this.location;
  }

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.spellbook.toggle_spell(this.spell_name());
  }

  this.on_sight = function()
  {
    console.log("Sighted Wizard: "+this.id);
  }

  this.hide_notification = function()
  {
    
  }

  this.show_notification = function()
  {
    
  }

  this.update();
}