function PillarGate(x,y,room,to_x,to_y)
{
  Event.call(this,"gate");

  this.x = x;
  this.y = y;
  this.room = room;
  this.to_x = to_x;
  this.to_y = to_y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {    
    if(this.is_unlocked() != true){
      oquonie.dialog.show("owl",["pillar","foe",this.is_unlocked()]);
      return
    }
    oquonie.stage.enter_room(this.room,this.to_x,this.to_y);
  }

  this.on_sight = function()
  {
    if(this.is_unlocked() != true){
      return;
    }
    var wall_id = oquonie.stage.wall_at(this.x,this.y);
    oquonie.artbook.set_art("#wall_"+wall_id,"media/graphics/wall/27.png");
  }

  this.is_unlocked = function()
  {
    if(!oquonie.spellbook.has_pillar("necomedre")){ return "necomedre"; }
    if(!oquonie.spellbook.has_pillar("nephtaline")){ return "nephtaline"; }
    if(!oquonie.spellbook.has_pillar("neomine")){ return "neomine"; }
    if(!oquonie.spellbook.has_pillar("nestorine")){ return "nestorine"; }
    if(!oquonie.spellbook.has_pillar("nemedique")){ return "nemedique"; }
    if(!oquonie.spellbook.has_pillar("nastazie")){ return "nastazie"; }

    return true;
  }
}
