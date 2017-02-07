function Oquonie()
{
  this.element = document.createElement("oquonie");

  var dialog = new Dialog();
  var interface = new Interface();
  var stage = new Stage();

  this.install = function()
  {
    document.body.appendChild(this.element)
    dialog.install();
    interface.install();
    stage.install();
  }

  this.start = function()
  {
    console.log("Starting Oquonie");
  }
}