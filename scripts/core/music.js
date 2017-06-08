function Music()
{
  this.track_ambient = new Audio();
  this.track_effect = new Audio();
  this.track_dialog = new Audio();

  this.is_muted = false;

  this.play_effect = function(name)
  {
    console.log("Effect: ",name);

    if(this.track_effect.name == name){ 
      oquonie.music.track_effect.currentTime = 0; 
      oquonie.music.track_effect.play(); 
      return; 
    }

    oquonie.music.track_effect.name = name;
    oquonie.music.track_effect.src = "media/audio/effect/"+name+".ogg";
    oquonie.music.track_effect.play()
  }

  this.play_dialog = function(name)
  {
    console.log("Dialog: ",name);

    if(this.track_dialog.name == name){ 
      oquonie.music.track_dialog.currentTime = 0; 
      oquonie.music.track_dialog.play(); 
      return; 
    }

    oquonie.music.track_dialog.name = name;
    oquonie.music.track_dialog.src = "media/audio/dialog/"+name+".ogg";
    oquonie.music.track_dialog.play();
  }

  this.play_ambient = function(name)
  {
    if(this.track_ambient.name == name){ return; }
    if(DEBUG){ return; }

    // Fadeout
    $(this.track_ambient).animate({volume: 0}, 1000, function(){
      console.log("Music: ",name);
      oquonie.music.track_ambient.src = "media/audio/ambient/"+name+".mp3";
      oquonie.music.track_ambient.name = name;
      oquonie.music.track_ambient.loop = true;
      if(oquonie.music.is_muted == false){ oquonie.music.track_ambient.play(); }
      $(oquonie.music.track_ambient).animate({volume: 1}, 1000);
    });
  }

  this.pause_ambience = function()
  {
    this.is_muted = true;

    $(this.track_ambient).animate({volume: 0}, 1000, function(){
      oquonie.music.track_ambient.pause();
    });
  }

  this.resume_ambience = function()
  {
    oquonie.music.track_ambient.play();
    oquonie.music.track_ambient.volume = 0;
    $(this.track_ambient).animate({volume: 1}, 1000);
    this.is_muted = false;
  }
}