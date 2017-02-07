function Oquonie()
{
  this.element = document.createElement("oquonie");

  this.world = new World();
  this.dialog = new Dialog();
  this.interface = new Interface();
  this.stage = new Stage();

  this.install = function()
  {
    document.body.appendChild(this.element);

    this.world.install();
    this.dialog.install();
    this.interface.install();
    this.stage.install();
  }

  this.start = function()
  {
    console.log("Starting Oquonie");
    this.stage.enter_room(1);
  }
}