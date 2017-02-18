function Event(subtype)
{
  Tile.call(this,"event");
  this.element.className += " "+subtype;

  this.update = function()
  {
    
  }

  this.move_to = function(x,y)
  {
    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];
    var _z = p[2];
    var el = this.element;
    var bg = "media/graphics/char.neomine.stand.f.1.png";
    
    $(el).animate({ left: _x, top: _y }, 200, function(){});
  }

  this.move_at = function(x,y)
  {
    this.x = x;
    this.y = y;

    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];

    $(this.element).css('top', _y).css('left', _x);
  }

  this.is_collider = function()
  {
    return false;
  }

  this.on_collision = function()
  {
    console.log("On collision, no effect");
  }
}