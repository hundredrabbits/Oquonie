function Noface(x,y)
{
  Event.call(this,"noface");

  this.x = x;
  this.y = y;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    if(oquonie.spellbook.pillars.length == 0){
      oquonie.dialog.show("noface",["confusion1","confusion3","confusion2"]);
    }
    else if(oquonie.spellbook.pillars.length < 5){
      oquonie.dialog.show("noface",["confusion1","confusion3","pillar"]);
    }
    else{
      oquonie.dialog.show("noface",["help","friend","pillar"]);      
      oquonie.player.warp_at(130);
    }
  }

  this.update(20);
}