function Animator(host)
{
  this.host = host;
  this.animations = [];

  this.add = function(animation)
  {
    this.animations[animation.name] = animation;
    this.animations[animation.name].host = this.host;
  }

  this.animate = function()
  {
    if(!this.animations[this.host.state]){ return; }

    var anim = this.animations[this.host.state];

    $(this.host.element).css('background-image', "url(media/graphics/"+this.host.name+"/"+this.host.id+"."+this.host.state+"."+anim.run()+".png)");
  }
}