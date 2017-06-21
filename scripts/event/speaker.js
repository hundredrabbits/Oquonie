function Speaker(x,y,id = "disc")
{
  Event.call(this,id);

  this.animator.add(new Animation("on",[1,2,3,2]));
  this.animator.add(new Animation("off",[1]));

  this.x = x;
  this.y = y;
  this.id = id;
  this.animator.state = "on";
  this.is_playing = true;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    this.toggle();
    oquonie.dialog.show(
      this.id, 
      ["outside",this.is_playing ? "correct" : "incorrect","sound"], 
      null,
      this.id + "_" + (this.is_playing ? "off" : "on"));
  }

  this.toggle = function()
  {
    if(this.is_playing == true){
      this.stop();
    }
    else{
      this.play();
    }
    console.log("Speaker",this.is_playing);
  }

  this.play = function()
  {
    this.is_playing = true;
    this.animator.state = "on";
    oquonie.music.resume_ambience();
  }

  this.stop = function()
  {
    this.is_playing = false;
    this.animator.state = "off";
    oquonie.music.pause_ambience();
  }

  this.on_sight = function()
  {
    if (oquonie.music.is_muted == this.is_playing)
    {
      this.toggle();
    }
  }

  this.update(20);
}
