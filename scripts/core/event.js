function Event(subtype)
{
  Tile.call(this,"event");
  
  this.location = 0;
  this.name = subtype;
  this.state = "idle";
  this.animator = new Animator(this);
  this.is_mirrored = false;

  $(this.element).addClass(subtype);

  this.update = function()
  {
    var p = this.position_at(this.x,this.y,100);
    var top = p[0];
    var left = p[1];

    $(this.element).css("top",p[0]).css("left",p[1]).css("z-index",this.depth());
  }

  this.move_to = function(x,y)
  {
    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];
    var _z = p[2];
    var el = this.element;

    var target = this.animator;
    target.state = "walk.front";
    
    $(el).animate({ left: _x, top: _y }, oquonie.speed, function(){
      target.state = "idle.front";
    });

    oquonie.stage.animate(this.x,this.y);
  }

  this.move_by = function(x,y)
  {
    this.x += x;
    this.y += y;

    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];
    var _z = p[2];

    var target = this.animator;
    target.state = "walk.front";

    if(x == 0 && y == -1 || x == -1 && y == 0){ target.state = "walk.front"; }
    if(x == 0 && y == 1 || x == 1 && y == 0){ target.state = "walk.back"; }
    
    $(this.element).animate({ left: _x, top: _y }, oquonie.speed, function(){
      if(x == 0 && y == -1 || x == -1 && y == 0){ target.state = "idle.front"; }
      if(x == 0 && y == 1 || x == 1 && y == 0){ target.state = "idle.back"; }
    });
    
    oquonie.stage.animate(this.x,this.y);
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

  this.warp_at = function(room,x,y)
  {
    oquonie.stage.enter_room(room,x,y);
  }

  this.is_collider = function()
  {
    return false;
  }

  this.mirror = function()
  {
    this.is_mirrored = true;
    $(this.element).addClass("mirror");
  }

  this.bump = function(x,y,target)
  {
    var origin_pos_y = parseInt(target.element.style.top);
    $(target.element).css("top", (origin_pos_y-0.5)+"%").animate({ top: origin_pos_y+"%" }, oquonie.speed/2);
  }

  this.on_collision = function()
  {
    // console.log("On collision, no effect");
  }

  this.on_step = function()
  {
    // console.log("On step, no effect");
  }

  this.on_sight = function()
  {
    // console.log("On sight, no effect");
  }
}