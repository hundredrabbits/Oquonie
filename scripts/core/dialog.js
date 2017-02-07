function Dialog()
{
  this.element = this.element = document.createElement("dialog");

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
  }  
}