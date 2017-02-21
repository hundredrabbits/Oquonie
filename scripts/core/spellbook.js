function Spellbook()
{
  this.element = document.createElement("spellbook");
  this.spell1 = document.createElement("spell");
  this.spell2 = document.createElement("spell");
  this.spell3 = document.createElement("spell");

  this.content = {};
  this.pillars = [];

  this.install = function()
  {
    oquonie.element.appendChild(this.element);
    this.element.appendChild(this.spell1);
    this.element.appendChild(this.spell2);
    this.element.appendChild(this.spell3);
  }  

  this.toggle_spell = function(wizard)
  {
    if(this.content[wizard.spell_name()]){
      this.remove_spell(wizard);
    }
    else{
      this.add_spell(wizard);
    }
  }

  this.add_spell = function(wizard)
  {
    this.content[wizard.spell_name()] = wizard;
    this.try_transform();
    this.update();
  }

  this.remove_spell = function(wizard)
  {
    this.content[wizard.spell_name()] = null;
    this.update();
  }

  this.has_spell = function(wizard)
  {
    for(spell in this.content){
      if(wizard.spell_name() == spell){ return true; }
    }
    return false;
  }

  // Pillars

  this.add_pillar = function(pillar)
  {
    this.pillars.push(pillar.character);
  }

  this.has_pillar = function(pillar)
  {
    console.log(this.pillars);
    if(this.pillars.indexOf(pillar.character) > -1){
      return true;
    }
  }

  // Etc..

  this.try_transform = function()
  {
    var a = {};
    for(spell in this.content){
      var name = this.content[spell].id;
      a[name] = a[name] ? a[name]+1 : 1;
    }
    for(spell in a){
      if(a[spell] == 3){ 
        oquonie.player.transform(spell); 
        this.content = {};
        this.update();
      }
    }
  }

  this.clear = function()
  {
    var blank = {};
    for(spell in this.content){
      if(this.content[spell] != null){
        blank[spell] = this.content[spell];
      }
    }
    this.content = blank;

    // Clear tiles
    $(this.spell1).css("background-image","");
    $(this.spell2).css("background-image","");
    $(this.spell3).css("background-image","");
  }

  this.update = function()
  {
    this.clear();

    var i = 0;
    var spell = null;
    for(spell in this.content){
      if(!this.content[spell]){ continue; }
      
      spell_name = this.content[spell].id;
      if(i == 0){ $(this.spell1).css("background-image","url(media/graphics/spellbook/"+spell_name+".png)"); }
      if(i == 1){ $(this.spell2).css("background-image","url(media/graphics/spellbook/"+spell_name+".png)"); }
      if(i == 2){ $(this.spell3).css("background-image","url(media/graphics/spellbook/"+spell_name+".png)"); }
      i += 1;
    }
  }
}