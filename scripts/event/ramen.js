function Ramen(x,y,character = null)
{
  Event.call(this,"ramen");

  this.x = x;
  this.y = y;
  this.character = character;
  this.id = "active";

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    // In Worlds
    if(this.character && !oquonie.spellbook.has_ramen(this.character)){
      oquonie.spellbook.add_ramen(this.character)
    }

    // In Lobby
    if(this.location == 2){
      oquonie.dialog.show(this,["letter","letter","letter"]);
      if(oquonie.player.character == "necomedre"){
        this.character = "nestorine";
      }
      else if(oquonie.player.id == "nestorine"){
        this.character = "nephtaline";
      }
      else if(oquonie.player.id == "neomine"){
        this.character = "necomedre";
      }
      else{
        this.character = "nemedique";
      }
      oquonie.spellbook.add_spell(this);
    }
    this.on_sight();
  }

  this.on_sight = function()
  {
    // In Worlds
    if(this.character){ 
      if(oquonie.spellbook.has_ramen(this.character)){
        this.id = "away";
      }
      else{
        this.id = "active";
      }
    }
    // In Town
    if(this.location == 2){
      if(oquonie.spellbook.has_ramen(oquonie.player.id)){
        this.id = "active";
      }
      else{
        this.id = "away";
      }
    }
  }

  this.spell_name = function()
  {
    return this.character+"_"+this.location;
  }

  this.update();
}