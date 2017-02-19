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

    $(this.host.element).css('background-image', "url(media/graphics/"+this.host.name+"/"+(this.host.id ? this.host.id+"." : "")+this.state+"."+anim.run()+".png)");
  }
}