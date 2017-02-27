function Ramen(x,y,character = null)
{
  Event.call(this,"ramen");

  this.x = x;
  this.y = y;
  this.character = character;
  this.id = "active";

  this.notification = document.createElement("notification");
  this.element.appendChild(this.notification);

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.lobby_spell = function()
  {
    if(oquonie.player.id == "necomedre"){ return "nestorine"; }
    else if(oquonie.player.id == "nestorine"){ return "nephtaline"; }
    else if(oquonie.player.id == "neomine"){ return "necomedre"; }
    else{ return "nemedique"; }
  }

  // On Collision

  this.on_collision = function()
  {
    if(this.character){ this.on_collision_world(); }
    if(this.location == 2){ this.on_collision_lobby(); }
    this.on_sight();
  }

  this.on_collision_lobby = function()
  {
    if(oquonie.spellbook.has_ramen(oquonie.player.id) != true){
      console.warn("Ramen for "+oquonie.player.id+" is unfound.");
      oquonie.dialog.show(this.name,["help","foe",oquonie.player.id]);
      return;
    }
    oquonie.spellbook.toggle_spell(this.spell_name());
    oquonie.dialog.show(this.name,["help","friend",oquonie.player.id]);
  }

  this.on_collision_world = function()
  {
    if(oquonie.spellbook.has_ramen(this.character) == true){
      console.warn("Ramen for "+oquonie.player.id+" was already found.");
      return;
    }
    oquonie.spellbook.add_ramen(this.character);
    oquonie.dialog.show(this.name,["help","friend",oquonie.player.id]);
  }
  
  // On Sight

  this.on_sight = function()
  {
    if(this.character){ this.on_sight_world(); }
    if(this.location == 2){ this.on_sight_lobby(); }
    this.animator.animate();
    this.update_notification();
  }

  this.on_sight_lobby = function()
  {
    if(oquonie.spellbook.has_ramen(oquonie.player.id)){
      this.id = "active";
    }
    else{
      this.id = "away";
    }
  }

  this.on_sight_world = function()
  {
    console.log(oquonie.spellbook.ramens);
    if(!oquonie.spellbook.has_ramen(this.character)){
      this.id = "active";
    }
    else{
      this.id = "away";
    }
  }

  this.hide_notification = function()
  {
    $(this.notification).css("display","none");
  }

  this.show_notification = function()
  {
    $(this.notification).css("display","block");
    $(this.notification).css("background-image","url(media/graphics/notification/"+this.lobby_spell()+".png)")
  }

  this.update_notification = function()
  {
    if(this.character){
      this.hide_notification();
    }
    else if(oquonie.spellbook.has_ramen(oquonie.player.id) != true){
      this.hide_notification();
    }
    else if(oquonie.spellbook.has_spell(this.spell_name()) != true){
      this.show_notification()
    }
    else{
      this.hide_notification();
    }
  }

  this.spell_name = function()
  {
    return this.lobby_spell()+"_"+this.location;
  }

  this.update(20);
}