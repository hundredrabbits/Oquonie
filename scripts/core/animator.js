function Animator(host)
{
  this.host = host;
  this.animations = {};
  this.state = "idle";
  this.orientation = null;
  this.last_art_id = null;

  this.add = function(animation)
  {
    this.animations[animation.name] = animation;
    this.animations[animation.name].host = this.host;
  }

  this.animate = function()
  {
    if(!this.animations[this.state]){ return; }

    var anim = this.animations[this.state];
    var width = $(this.host.element).width();
    var height = $(this.host.element).height();
    var frames = unique(this.animations[this.state].frames).length;

    var art_id = "media/graphics/"+this.host.name+"/"+(this.host.id ? this.host.id+"." : "")+this.state+".png";
    if (this.last_art_id != art_id)
    {
      this.last_art_id = art_id;
      oquonie.artbook.set_art(this.host.element, art_id);
    }
    
    $(this.host.element).css('background-size',(width*frames)+"px "+(width*1.5)+"px");
    $(this.host.element).css('background-position',(anim.run() * -width + width)+"px center");
  }

  this.set_state = function(new_state, update_immediately = true)
  {
    this.state = new_state;
    if (update_immediately)
    {
      this.animate();
    }
  }
}

function unique(list)
{
  var result = [];
  $.each(list, function(i, e) {
      if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}
