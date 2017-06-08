function Oquonie()
{
  this.element = document.createElement("oquonie");

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

  this.install = function()
  {
    document.body.appendChild(this.element);

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
  }

  function animate()
  {
    this.animation_timer = setTimeout(function(){ animate(); }, 200);

    oquonie.player.animator.animate();

    for (var i = 0; i < oquonie.stage.room.events.length; i++){
      oquonie.stage.room.events[i].animator.animate();
    }
  }

  function stop_animation()
  {
    clearTimeout(this.animation_timer);
  }
}
