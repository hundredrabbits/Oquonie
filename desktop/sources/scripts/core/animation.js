function Animation(name,frames)
{
  this.name = name;
  this.frames = frames;
  this.frame = 0;

  this.run = function()
  {
    this.frame += 1;
    return this.frames[this.frame % this.frames.length];
  }
}