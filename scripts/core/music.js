function Music()
{
  this.track_ambient = new Audio();
  this.track_effect = new Audio();
  this.track_dialog = new Audio();

  this.audio_catalog = {};

  this.is_muted = false;

  this.play_effect = function(name)
  {
    console.log("Effect: ",name);
    this.track_effect = this.fetch_audio(name, "media/audio/effect/"+name+".ogg");
    this.track_effect.play()
  }

  this.play_dialog = function(name)
  {
    console.log("Dialog: ",name);
    this.track_dialog = this.fetch_audio(name, "media/audio/dialog/"+name+".ogg");
    this.track_dialog.play();
  }

  this.play_ambient = function(name)
  {
    if(this.track_ambient.name == name){ return; }
    if(DEBUG){ return; }

    // Fadeout
    $(this.track_ambient).animate({volume: 0}, 1000, function(){
      console.log("Music: ",name);

      oquonie.music.track_ambient.pause();
      oquonie.music.track_ambient = oquonie.music.fetch_audio(name, "media/audio/ambient/"+name+".mp3", true);
      if(oquonie.music.is_muted == false){ oquonie.music.track_ambient.play(); }
      $(oquonie.music.track_ambient).animate({volume: 1}, 1000);
    });
  }

  this.fetch_audio = function(name, src, loop = false)
  {
      if (!(name in this.audio_catalog))
      {
        var audio = new Audio();
        audio.name = name;
        audio.src = src;
        audio.loop = loop;
        this.audio_catalog[name] = audio;
      }
      this.audio_catalog[name].currentTime = 0;
      return this.audio_catalog[name];
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
    this.track_ambient.play();
    this.track_ambient.volume = 0;
    $(this.track_ambient).animate({volume: 1}, 1000);
    this.is_muted = false;
  }
}
