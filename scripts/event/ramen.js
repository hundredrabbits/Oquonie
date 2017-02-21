function Ramen(x,y,id)
{
  Event.call(this,"ramen");

  this.x = x;
  this.y = y;
  this.id = "nemedique";

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show(this,["letter","letter","letter"]);
    if(oquonie.player.id == "necomedre"){
      this.id = "nestorine";
    }
    else if(oquonie.player.id == "nestorine"){
      this.id = "nephtaline";
    }
    else{
      this.id = "nemedique";
    }
    oquonie.spellbook.add_spell(this);
  }

  this.spell_name = function()
  {
    return this.id+"_"+this.location;
  }

  this.update();
}