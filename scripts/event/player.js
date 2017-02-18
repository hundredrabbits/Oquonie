function Player()
{
  Event.call(this,"player");

  this.try_move = function(x,y)
  {
    if(oquonie.dialog.content){
      oquonie.dialog.hide();
      return;
    }

    var destination = [this.x + x, this.y + y];
    var target_tile = oquonie.stage.tile_at(this.x + x, this.y + y);
    var target_floor = oquonie.stage.floor_at(this.x + x, this.y + y);
    
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
      this.move_to(this.x,this.y);
      console.log("Moved to: Floor("+this.x+","+this.y+")");
    }

    this.update();
  }

  this.update = function()
  {
    $(this.element).css('background-image', 'url(media/graphics/char.neomine.stand.f.1.png)');
  }

  this.update();
}