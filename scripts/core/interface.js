function Interface()
{
  this.element = this.element = document.createElement("interface");

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
  }
}