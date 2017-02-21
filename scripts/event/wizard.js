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
    this.update_notification();
  }

  this.on_sight = function()
  {
    console.log("Sighted Wizard: "+this.id);
  }

  this.hide_notification = function()
  {
    $(this.notification).css("display","none");
  }

  this.show_notification = function()
  {
    $(this.notification).css("display","block");
  }

  this.update_notification = function()
  {
    if(oquonie.spellbook.has_spell(this.spell_name()) == true || oquonie.player.id == this.id){
      this.hide_notification();
    }
    else{
      this.show_notification();
    }
  }

  this.update();
}