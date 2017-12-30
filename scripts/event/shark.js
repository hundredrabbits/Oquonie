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
    // Failsafe
    if(oquonie.player.id == "document"){
      oquonie.player.transform("necomedre");  
    }
    else if(oquonie.player.id == "catfishbird"){
      keyboard.lock("teleport");
      var w = this.warp;
      setTimeout(function(){ oquonie.stage.warp_to(9,0,0); }, 500);      
    }
    else if(this.is_transformer == true && oquonie.player.id != "necomedre"){
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
    var animation_state = "away";

    if(this.is_transformer == true && oquonie.player.id != "necomedre"){
      animation_state = "active";
    }
    else if(oquonie.spellbook.spells.length > 0){
      animation_state = "active";
    }
    this.animator.set_state(animation_state);
  }

  this.update(20);
}
