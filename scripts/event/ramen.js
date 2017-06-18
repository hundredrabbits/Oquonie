function Ramen(x,y,character = null)
{
  Event.call(this,"ramen");

  this.x = x;
  this.y = y;
  this.character = character;
  this.id = "active";
  this.first_sight = false;

  this.mat = new RamenMat(x, y);

  this.notification = document.createElement("notification");
  this.element.appendChild(this.notification);

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    if(this.character){ return !oquonie.spellbook.has_ramen(this.character); }
    if(this.location == 2){ return true; }
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
    oquonie.music.play_effect("bump.1");

    if(this.character){ this.on_collision_world(); }
    if(this.location == 2){ this.on_collision_lobby(); }
    this.update_state();
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
    this.first_sight = true;
    this.update_state();
    this.animator.animate();
  }

  this.update_state = function()
  {
    if(this.character){ this.on_sight_world(); }
    if(this.location == 2){ this.on_sight_lobby(); }
    this.update_notification();
  }

  this.on_sight_lobby = function()
  {
    if(oquonie.spellbook.has_ramen(oquonie.player.id)){
      this.id = "active";
      $(this.element).css("display","block");
    }
    else{
      this.id = "away";
      $(this.element).css("display","none");
      this.mat.show();
    }
  }

  this.on_sight_world = function()
  {
    if(oquonie.spellbook.has_ramen(this.character)){
      if (!this.first_sight) {
        $(this.element).animate({ opacity: 0 }, oquonie.speed*3);
      } else {
        $(this.element).css("display","none");
      }
      this.mat.show();
    }
    this.first_sight = false;
  }

  this.hide_notification = function()
  {
    $(this.notification).css("display","none");
  }

  this.show_notification = function()
  {
    $(this.notification).css("display","block");
    oquonie.artbook.set_art(this.notification,"media/graphics/notification/"+this.lobby_spell()+".png");
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

function RamenMat(x,y)
{
  Event.call(this,"ramen_mat");

  this.x = x;
  this.y = y;
  this.blocking = false;
  
  this.is_collider = function()
  {
    return this.blocking;
  }

  this.on_collision = function()
  {
    oquonie.music.play_effect("bump.1");
  }

  this.on_sight = function()
  {
    var width = $(this.element).width();
    $(this.element).css('background-size',(width)+"px "+(width*1.5)+"px");
    $(this.element).css('background-position',"0px center");
    $(this.element).css("display","none");
    oquonie.artbook.set_art(this.element,"media/graphics/ramen/mat.png");
  }

  this.show = function()
  {
    this.blocking = true;
    $(this.element).css("display","block");
  }

  this.update(20);
}
