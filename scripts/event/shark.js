function Shark(x,y,is_transformer = true)
{
  Event.call(this,"shark");

  this.x = x;
  this.y = y;
  this.is_transformer = is_transformer;

  this.animator.add(new Animation("active",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
  this.animator.add(new Animation("away",[1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    if(this.is_transformer == true && oquonie.player.id != "necomedre"){
      oquonie.player.transform("necomedre");  
      oquonie.dialog.show("shark",["guide","friend","necomedre"]);
    }
    else if(oquonie.spellbook.spells.length > 0){
      oquonie.spellbook.remove_spells();
      oquonie.dialog.show("shark",["guide","friend","teleport"]);
    }
    this.on_sight();
  }

  this.on_sight = function()
  {
    this.animator.state = "away";

    if(this.is_transformer == true && oquonie.player.id != "necomedre"){
      this.animator.state = "active";
    }
    else if(oquonie.spellbook.spells.length > 0){
      this.animator.state = "active";
    }
    this.animator.animate();
  }

  this.update(20);
}