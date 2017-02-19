function Oquonie()
{
  this.element = document.createElement("oquonie");

  this.world = new World();
  this.dialog = new Dialog();
  this.interface = new Interface();
  this.stage = new Stage();
  this.player = new Player();
  this.spellbook = new Spellbook();
  this.animation_timer = null;

  this.install = function()
  {
    document.body.appendChild(this.element);

    this.world.install();
    this.dialog.install();
    this.interface.install();
    this.stage.install();
    this.spellbook.install();
  }

  this.start = function()
  {
    console.log("Starting Oquonie");
    this.stage.enter_room(112);
    animate();
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