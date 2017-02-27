function Dialog()
{
  this.element = this.element = document.createElement("dialog");

  this.content = null;

  this.portrait = document.createElement("portrait");
  this.bubble = document.createElement("bubble");
  this.letter1 = document.createElement("letter");
  this.letter2 = document.createElement("letter");
  this.letter3 = document.createElement("letter");

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
    this.element.appendChild(this.portrait);
    this.element.appendChild(this.bubble);
    this.bubble.appendChild(this.letter1);
    this.bubble.appendChild(this.letter2);
    this.bubble.appendChild(this.letter3);
  }  

  this.show = function(host_name,message,path = "media/graphics/"+host_name+"/")
  {
    console.log("Dialog with: "+host_name);

    $(this.portrait).css("background-image","url("+path+"portrait.png)");
    $(this.element).animate({ opacity:1 }, oquonie.speed, function(){});

    $(this.letter1).css("background-image","url(media/graphics/camilare/"+message[0]+".png)");
    $(this.letter2).css("background-image","url(media/graphics/camilare/"+message[1]+".png)");
    $(this.letter3).css("background-image","url(media/graphics/camilare/"+message[2]+".png)");

    this.content = message;

    oquonie.music.play_dialog(host_name);
  }

  this.hide = function()
  {
    $(this.element).animate({ opacity:0 }, oquonie.speed, function(){});
    this.content = null;
  }
}