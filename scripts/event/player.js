function Player()
{
  Event.call(this,"player");

  var p = this.position_at(0,0,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","left:"+left+"; top:"+top+";z-index:"+zIndex);
}