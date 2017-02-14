function Player()
{
  Event.call(this,"player");

  this.try_move = function(x,y)
  {
    var destination = [this.x + x, this.y + y];
    var target_tile = oquonie.stage.tile_at(this.x + x, this.y + y);
    var target_floor = oquonie.stage.floor_at(this.x + x, this.y + y);

    console.log(target_tile);
    
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
    }

    this.update();
  }

  this.update = function()
  {
    var p = this.position_at(this.x,this.y,200);
    var top = p[0];
    var left = p[1];
    var zIndex = p[2];

    var bg = "url(media/graphics/char.neomine.stand.f.1.png); ";

    this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
  }

  this.update();
}