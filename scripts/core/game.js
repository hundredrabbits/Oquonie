function Game()
{
  this.clear = function()
  {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

  this.save = function()
  {
    this.clear();

    console.info("Saving..");

    var h = {};

    make_cookie("character",oquonie.player.id);
    make_cookie("room",oquonie.stage.room.id);

    for(i in oquonie.spellbook.ramens){
      make_cookie("ramen_"+oquonie.spellbook.ramens[i],1);
    }
    for(i in oquonie.spellbook.pillars){
      make_cookie("pillar_"+oquonie.spellbook.pillars[i],1);
    }

    return h;
  }

  this.load = function()
  {
    console.info("Loading..");

    oquonie.player.id = read_cookie("character");
    oquonie.player.location = read_cookie("room");

    if(read_cookie("ramen_necomedre") == 1){ oquonie.spellbook.add_ramen("necomedre"); }
    if(read_cookie("ramen_nephline") == 1){ oquonie.spellbook.add_ramen("nephline"); }
    if(read_cookie("ramen_neomine") == 1){ oquonie.spellbook.add_ramen("neomine"); }
    if(read_cookie("ramen_nemedique") == 1){ oquonie.spellbook.add_ramen("nemedique"); }
    if(read_cookie("ramen_nastazie") == 1){ oquonie.spellbook.add_ramen("nastazie"); }

    if(read_cookie("pillar_necomedre") == 1){ oquonie.spellbook.add_pillar("necomedre"); }
    if(read_cookie("pillar_nephline") == 1){ oquonie.spellbook.add_pillar("nephline"); }
    if(read_cookie("pillar_neomine") == 1){ oquonie.spellbook.add_pillar("neomine"); }
    if(read_cookie("pillar_nemedique") == 1){ oquonie.spellbook.add_pillar("nemedique"); }
    if(read_cookie("pillar_nastazie") == 1){ oquonie.spellbook.add_pillar("nastazie"); }
  }

  this.is_found = function()
  {
    if(read_cookie("room") && read_cookie("character")){
      return true;
    }
    return false;
  }

  this.new = function()
  {
    console.info("New Game..");
    this.clear();

    oquonie.player.location = 25;
    oquonie.player.id = "necomedre";

    return "Created a new game.";
  }

  function make_cookie(name, value, days = 365)
  {
    console.log("Saving "+name,value);

    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  function read_cookie(name)
  {
    console.log("Loading "+name);
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0){
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
  }

  function eraseCookie(name)
  {
    createCookie(name, "", -1);
  }
}