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

    $("#wall_1").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    $("#wall_2").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    $("#wall_3").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    $("#wall_4").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    $("#wall_5").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    $("#wall_6").css("background-image","url(media/graphics/wall/"+parseInt(Math.random() * 40)+".png)")
    
    $("#floor_1").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_2").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_3").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_4").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_5").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_6").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_7").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_8").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
    $("#floor_9").css("background-image","url(media/graphics/floor/"+parseInt(Math.random() * 40)+".png)")
  }

  this.update(20);
}