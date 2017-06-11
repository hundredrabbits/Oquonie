function Petunia(x,y)
{
  Event.call(this,"petunia");

  this.x = x;
  this.y = y;

  this.animator.add(new Animation("idle",[1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show("petunia",["confusion1","confusion3","confusion2"]);

    oquonie.artbook.set_art("#wall_1","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#wall_2","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#wall_3","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#wall_4","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#wall_5","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    // oquonie.artbook.set_art("#wall_6","media/graphics/wall/"+parseInt(Math.random() * 40)+".png");
    
    oquonie.artbook.set_art("#floor_1","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_2","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_3","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_4","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_5","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_6","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_7","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    oquonie.artbook.set_art("#floor_8","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
    // oquonie.artbook.set_art("#floor_9","media/graphics/floor/"+parseInt(Math.random() * 40)+".png");
  }

  this.update(20);
}
