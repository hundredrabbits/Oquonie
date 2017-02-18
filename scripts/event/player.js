function Player()
{
  Event.call(this,"player");

  this.try_move = function(x,y)
  {
    var destination = [this.x + x, this.y + y];
    var target_tile = oquonie.stage.tile_at(this.x + x, this.y + y);
    var target_floor = oquonie.stage.floor_at(this.x + x, this.y + y);

    // Set origin position
    var p = this.position_at(this.x,this.y,200);
    this.element.setAttribute("style","top:"+p[0]+"%; left:"+p[1]+"%;z-index:"+p[2]);
    
    if(target_tile && target_tile.is_collider() == true){
      console.log("Blocked by: "+target_tile.constructor.name);
      target_tile.on_collision();
    }
    else if(destination[0] > 1 || destination[0] < -1 || destination[1] > 1 || destination[1] < -1){
      console.log("Blocked by: Edge");
    }
    else if(target_floor == 0){
      console.log("Blocked by: Floor("+target_floor+")");
    }
    else{
      this.x += x;
      this.y += y;
      console.log("Moved to: Floor("+this.x+","+this.y+")");
    }

    this.update();
  }

  this.update = function()
  {
    var p = this.position_at(this.x,this.y,200);
    var _y = p[0];
    var _x = p[1];
    var _z = p[2];
    var el = this.element;
    var bg = "url(media/graphics/char.neomine.stand.f.1.png); ";

    $(el).animate({ left: _x, top: _y }, 300, function() {
      el.setAttribute("style","left:"+_x+"%; top:"+_y+"%;z-index:"+_z);
    });
  }

  this.update();
}