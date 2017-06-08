function Event(subtype)
{
  Tile.call(this,"event");
  
  this.location = 0;
  this.name = subtype;
  this.state = "idle";
  this.animator = new Animator(this);
  this.is_mirrored = false;

  $(this.element).addClass(subtype);

  this.move_to = function(x,y)
  {
    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];
    var _z = p[2];
    var el = this.element;

    var target = this.animator;
    target.state = "walk.front";
    
    keyboard.lock("moving");
    $(el).animate({ left: _x, top: _y }, oquonie.speed, function(){
      target.state = "idle.front";
      keyboard.unlock("moving");
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

  this.stand_by_door = function(x,y)
  {
    $(this.element).finish();
    var target = this.animator;
    x = -x;
    y = -y;
    if(x == 0 && y == -1 || x == -1 && y == 0){ target.state = "idle.front"; }
    if(x == 0 && y == 1 || x == 1 && y == 0){ target.state = "idle.back"; }
    target.animate();
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

  this.bump_up = function(x,y)
  {
    var animator = this.animator;
    if(x == 0 && y == -1 || x == -1 && y == 0){ animator.state = "idle.front"; }
    if(x == 0 && y == 1 || x == 1 && y == 0){ animator.state = "idle.back"; }
    animator.animate();

    $(this.element).finish();
    var origin_pos_y = parseInt(this.element.style.top);
    $(this.element).css("top", (origin_pos_y-0.5)+"%").animate({ top: origin_pos_y+"%" }, oquonie.speed/2);
  }

  this.bump_against = function(x,y,target)
  {
    var animator = this.animator;
    if(x == 0 && y == -1 || x == -1 && y == 0){ animator.state = "idle.front"; }
    if(x == 0 && y == 1 || x == 1 && y == 0){ animator.state = "idle.back"; }
    animator.animate();

    var xSlant = x - y;
    var ySlant = (-x - y) * 0.5;

    $(this.element).finish();
    var origin_pos_x = parseInt(this.element.style.left);
    var origin_pos_y = parseInt(this.element.style.top);

    $(this.element).css("top", origin_pos_y + 0.5 * ySlant + "%").css("left", origin_pos_x + 0.5 * xSlant + "%");
    $(this.element).animate({ top: origin_pos_y+"%", left: origin_pos_x+"%" }, oquonie.speed/2);

    $(target.element).finish();
    var origin_target_pos_y = parseInt(target.element.style.top);
    $(target.element).css("top", (origin_target_pos_y-0.5)+"%").animate({ top: origin_target_pos_y+"%" }, oquonie.speed/2);
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
