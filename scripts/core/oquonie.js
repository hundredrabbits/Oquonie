function Oquonie()
{
  this.element = document.createElement("oquonie");

  this.world = new World();
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

    this.load();

    this.walkthrough.start();
    this.spellbook.hide();
    animate();
  }

  this.save = function()
  {
    console.info("Saving..");
  }

  this.load = function()
  {
    console.info("Loading..");
  }

  function animate()
  {
    this.animation_timer = setTimeout(function(){ animate(); }, 100);

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