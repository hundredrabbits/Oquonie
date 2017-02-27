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

    localStorage.character = oquonie.player.id;
    localStorage.room = oquonie.stage.room.id;
    localStorage.ramens = oquonie.spellbook.ramens;
    localStorage.pillars = oquonie.spellbook.pillars;
    localStorage.spells = oquonie.spellbook.spells;

    return h;
  }

  this.load = function()
  {
    console.info("Loading..");

    oquonie.player.id = localStorage.character;
    oquonie.player.location = localStorage.room;
    oquonie.spellbook.ramens = localStorage.ramens;
    oquonie.spellbook.pillars = localStorage.pillars;
    oquonie.spellbook.spells = localStorage.spells;
  }

  this.is_found = function()
  {
    if(localStorage.character){
      return true;
    }
    return false;
  }

  this.new = function()
  {
    console.info("New Game..");
    this.clear();

    oquonie.player.location = 29;
    oquonie.player.id = "necomedre";

    return "Created a new game.";
  }
}