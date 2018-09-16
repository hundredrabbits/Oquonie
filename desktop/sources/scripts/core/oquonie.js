"use strict";

function Oquonie()
{
  this.element = document.createElement("oquonie");
  this.element.style.opacity = 0;

  this.artbook = new Artbook();
  this.game = new Game();
  this.world = new World();
  this.music = new Music();
  this.dialog = new Dialog();
  this.overlay = new Overlay();
  this.interface = new Interface();
  this.stage = new Stage();
  this.player = new Player();
  this.spellbook = new Spellbook();
  this.walkthrough = new Walkthrough();
  this.animation_timer = null;
  this.started = false;

  this.install = function()
  {
    document.body.appendChild(this.element);
    this.element.style.opacity = 1;

    this.world.install();
    this.dialog.install();
    this.overlay.install();
    this.interface.install();
    this.stage.install();
    this.spellbook.install();
  }

  this.start = function()
  {
    console.info("Starting Oquonie");

    this.walkthrough.start();
    this.spellbook.hide();
    animate();
    this.started = true;
  }

  this.mousedown = function(e)
  {
    if (!this.started)
    {
      return;
    }

    if(keyboard.locks.length > 0){ console.warn("Keyboard has locks: ",keyboard.locks); return; }

    let ratio_x = e.clientX/window.innerWidth;
    let ratio_y = e.clientY/window.innerHeight;

    if(ratio_y < 0.5 && ratio_x < 0.5){
      oquonie.player.try_move(0,1);
    }
    else if(ratio_y < 0.5 && ratio_x > 0.5){
      oquonie.player.try_move(1,0);
    }
    else if(ratio_y > 0.5 && ratio_x < 0.5){
      oquonie.player.try_move(-1,0);
    }
    else if(ratio_y > 0.5 && ratio_x > 0.5){
      oquonie.player.try_move(0,-1);
    }
  }

  function animate()
  {
    oquonie.animation_timer = setTimeout(function(){ animate(); }, 200);

    oquonie.player.animator.animate();

    for(let i = 0; i < oquonie.stage.room.events.length; i++){
      oquonie.stage.room.events[i].animator.animate();
    }
  }

  function stop_animation()
  {
    clearTimeout(this.animation_timer);
  }
}
