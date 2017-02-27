function Music()
{
  this.track1 = new Audio();
  this.track1.loop = true;
  this.is_muted = false;

  this.play_ambience = function(name)
  {
    if(this.track1.name == name){ return; }

    // Fadeout
    $(this.track1).animate({volume: 0}, 1000, function(){
      console.log("Music: ",name);
      oquonie.music.track1.name = name;
      oquonie.music.track1.src = "media/music/ambient."+name+".mp3";
      if(oquonie.music.is_muted == false){ oquonie.music.track1.play(); }
      $(oquonie.music.track1).animate({volume: 1}, 1000);
    });
  }

  this.pause_ambience = function()
  {
    this.is_muted = true;

    $(this.track1).animate({volume: 0}, 1000, function(){
      oquonie.music.track1.pause();
    });
  }

  this.resume_ambience = function()
  {
    oquonie.music.track1.play();
    oquonie.music.track1.volume = 0;
    $(this.track1).animate({volume: 1}, 1000);
    this.is_muted = false;
  }
}