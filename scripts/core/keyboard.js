function Keyboard()
{
  this.listen_onkeydown = function(event)
  {
  }

  this.listen_onkeyup = function(event)
  {
    switch (event.keyCode)
    {
      case 38: this.key_arrow_up(); break;
      case 40: this.key_arrow_down(); break;
      case 37: this.key_arrow_left(); break;
      case 39: this.key_arrow_right(); break;
      case 27: this.key_escape(); break;
      case 32: this.key_space(); break;
    }
  };

  this.key_enter = function()
  {
    console.log("enter");
  }

  this.key_space = function()
  {
    console.log("space");
  }

  this.key_arrow_up = function()
  {
    console.log("arrow.up");
    oquonie.player.try_move(0,1);
  }

  this.key_arrow_down = function()
  {
    console.log("arrow.down");
    oquonie.player.try_move(0,-1);
  }

  this.key_arrow_left = function()
  {
    console.log("arrow.left");
    oquonie.player.try_move(-1,0);
  }

  this.key_arrow_right = function()
  {
    console.log("arrow.right");
    oquonie.player.try_move(1,0);
  }
  this.key_escape = function()
  {
    console.log("escape");
    oquonie.dialog.hide();
  }
}
