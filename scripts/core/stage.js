function Stage()
{
  this.element = this.element = document.createElement("stage");

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
  }
}