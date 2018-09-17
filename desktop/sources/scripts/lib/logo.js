// Drool.

function Logo(is_looping = false)
{
  this.el = document.createElement("splash");
  this.el.style.position = "fixed";
  this.el.style.top = "0px";
  this.el.style.left = "0px";
  this.el.style.width = "100vw";
  this.el.style.height = "100vh";
  this.el.style.backgroundColor = "#000";
  this.el.style.zIndex = "9999";
  this.el.style.display = "block";
  this.el.style.transition = "all 1000ms"
  this.el.style.opacity = "1"

  this.canvas = document.createElement("canvas");
  this.canvas.style.display = "block";

  this.el.appendChild(this.canvas)

  this.size = null;
  this.is_playing = true;
  this.is_active = false;
  this.fps = 60;

  this.install = function(host)
  {
    host.appendChild(this.el);
  }

  this.start = function(size)
  {
    this.is_active = true;

    this.size = size;

    this.canvas.width = 600;
    this.canvas.height = 600;
    this.canvas.style.width = "300px"
    this.canvas.style.height = "300px"
    this.canvas.style.display = "block"
    this.canvas.style.margin = "calc(50vh - 150px) auto"
    this.canvas.style.transition = "all 1000ms"
    this.canvas.style.opacity = "1"

    this.create_tiles();
    animate();

    this.refresh();
  }

  this.refresh = function()
  {
    setTimeout(() => { logo.draw(); requestAnimationFrame(logo.refresh); }, 1000/logo.fps);
  }

  this.remove = function()
  {
    if(this.canvas.style.opacity == 0){ return; }

    this.canvas.style.opacity = 0;
    setTimeout(() => { this.el.style.opacity = 0; },500)
    setTimeout(() => { document.body.removeChild(this.el); },1500)
  }

  this.context = function()
  {
    return this.canvas.getContext('2d');
  }

  this.clear = function()
  {
    this.context().clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  this.stop = function()
  {
    if(this.is_playing == false){ return; }

    setTimeout(() => { this.draw(true); }, 50);
    this.is_playing = false;
  }

  this.frame = 0;

  this.draw = function(override = false)
  {
    if(override == false && !this.tiles_still_moving()){ this.stop(); return; }

    this.clear();
    let offset = 200;
    for (i = 0; i < tiles.length; i++) { 
      let tile = tiles[i];
      let max_size = (tile.size/2)-2;
      let progress_toward_end = 1-clamp(tile.distance_from_end()/(max_size*4),0,1);
      let progress_fade = clamp(this.frame/10000,0,1)
      let size = clamp(progress_toward_end * progress_fade,0,1) * max_size;
      
      this.frame += 1;
      this.context().beginPath();
      this.context().arc(tile.el_pos.x + offset,tile.el_pos.y + offset, size, 0, 2 * Math.PI, false);
      this.context().fillStyle = "white";
      this.context().fill();
      this.context().closePath();
      this.frame += 1
    }
  }

  let tiles = [];

  this.create_tiles = function()
  {
    for (x = 0; x < 10; x++) { 
      for (y = 0; y < 10; y++) { 
        let pos = {x:x,y:y};
        tiles.push(new Tile(pos,this.size/5));  
      }
    }
  }

  function scare_tiles(steps)
  {
    for (s = 0; s < steps; s++) { 
      for (t = 0; t < tiles.length; t++) { 
        tiles[t].flee();
      }
    }
  }

  function return_tiles_to(step)
  {
    for (i = 0; i < tiles.length; i++) { 
      tiles[i].move_to(tiles[i].history[step]);
      tiles[i].update();
    }
  }

  function animate_return_to(step,id)
  {
    if(id == -1){ return; }
    tiles[id].animate_until(tiles[id].history[step]);
    setTimeout(() => { animate_return_to(step,id-1); }, 10);
  }

  function animate_to(step,id)
  {
    if(id == 100){ return; }
    tiles[id].animate_until(tiles[id].history[step]);
    setTimeout(() => { animate_to(step,id+1); }, 10);
  }

  this.tiles_still_moving = function()
  {
    for (i = 0; i < tiles.length; i++) { 
      let tile = tiles[i];
      if(tile.offset().x != 0 || tile.offset().y != 0){ this.is_playing = true; return true; }
    }
    return false;
  }

  function animate()
  {
    scare_tiles(6);
    return_tiles_to(5);

    let speed = 300;

    setTimeout(() => { animate_return_to(9,99); }, 0);
    setTimeout(() => { animate_return_to(8,99); }, 1 * speed);
    setTimeout(() => { animate_return_to(7,99); }, 2 * speed);
    setTimeout(() => { animate_return_to(6,99); }, 3 * speed);
    setTimeout(() => { animate_return_to(5,99); }, 4 * speed);
    setTimeout(() => { animate_return_to(4,99); }, 5 * speed);
    setTimeout(() => { animate_return_to(3,99); }, 6 * speed);
    setTimeout(() => { animate_return_to(2,99); }, 7 * speed);
    setTimeout(() => { animate_return_to(1,99); }, 8 * speed);

    if(is_looping == true){
      setTimeout(() => { scare_tiles(6); }, 6000);
      setTimeout(() => { return_tiles_to(1); }, 6000);
      
      setTimeout(() => { animate_to(2,0); }, 6500);
      setTimeout(() => { animate_to(3,0); }, 7500);
      setTimeout(() => { animate_to(4,0); }, 8000);
      setTimeout(() => { animate_to(5,0); }, 8500);

      setTimeout(() => { animate(); }, 11500);
    }
  }

  // Generate

  function Tile(pos,size)
  {
    this.pos = pos;
    this.size = size;
    this.el_pos = {x:this.pos.x * this.size,y:this.pos.y * this.size};
    this.origin = {x:this.pos.x * this.size,y:this.pos.y * this.size};
    this.history = [];
    this.history.push({x:this.pos.x,y:this.pos.y});

    function tile_at(target_pos,neighboors)
    {
      for (t2 = 0; t2 < neighboors.length; t2++) { 
        if(neighboors[t2].pos.x == target_pos.x && neighboors[t2].pos.y == target_pos.y){
          return neighboors[t2];
        }
      }
      return null;
    }

    this.move_to = function(target_pos)
    {
      this.pos.x = target_pos.x;
      this.pos.y = target_pos.y;
    }

    let target_pos = null;

    this.animate_until = function(target_pos)
    {
      if(!target_pos){ return; }
      
      this.target_pos = target_pos;

      let target_el_pos = {x:target_pos.x * this.size,y:target_pos.y * this.size};

      let to_move = {x:target_el_pos.x - this.el_pos.x,y:target_el_pos.y - this.el_pos.y};

      if(to_move.x > 0){ this.el_pos.x += 1; } else if(to_move.x < 0){ this.el_pos.x -= 1; }
      if(to_move.y > 0){ this.el_pos.y += 1; } else if(to_move.y < 0){ this.el_pos.y -= 1; }

      if(target_el_pos.x != this.el_pos.x || target_el_pos.y != this.el_pos.y){
        let target = this;
        setTimeout(() => { target.animate_until(target_pos); }, 5);
      }
    }

    this.update = function()
    {
      this.el_pos = {x:pos.x * this.size,y:pos.y * this.size};
    }

    this.offset = function()
    {
      if(!this.target_pos){ return {x:0,y:0}; }
      let target_el_pos = {x:this.target_pos.x * this.size,y:this.target_pos.y * this.size};
      return {x:target_el_pos.x - this.el_pos.x,y:target_el_pos.y - this.el_pos.y};
    }

    this.neighboor_left = function(){ return tile_at({x:pos.x-1,y:pos.y},tiles); }
    this.neighboor_right = function(){ return tile_at({x:pos.x+1,y:pos.y},tiles); }
    this.neighboor_top = function(){ return tile_at({x:pos.x,y:pos.y+1},tiles); }
    this.neighboor_down = function(){ return tile_at({x:pos.x,y:pos.y-1},tiles); }

    this.distance_from_end = function()
    {
      let a = this.origin.x - this.el_pos.x;
      let b = this.origin.y - this.el_pos.y;
      return Math.sqrt( a*a + b*b );
    }

    this.flee = function()
    {
      let random = Math.random();

      this.history.push({x:this.pos.x,y:this.pos.y});  

      if(random < 0.25 && !this.neighboor_top()){
        this.pos.y += 1; 
      }
      else if(random < 0.5 && !this.neighboor_down()){
        this.pos.y -= 1; 
      }
      else if(random < 0.75 && !this.neighboor_right()){
        this.pos.x += 1; 
      }
      else if(!this.neighboor_left()){
        this.pos.x -= 1; 
      }      
    }
  }
  function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }
}
