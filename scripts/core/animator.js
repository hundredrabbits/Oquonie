function Animator(host)
{
  this.host = host;
  this.animations = {};
  this.state = "idle";
  this.orientation = null;

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

    $(this.host.element).css('background-image', "url(media/graphics/"+this.host.name+"/"+(this.host.id ? this.host.id+"." : "")+this.state+".png)");
    $(this.host.element).css('background-size',(width*frames)+"px "+(width*1.5)+"px");
    $(this.host.element).css('background-position',(anim.run() * -width + width)+"px center");
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