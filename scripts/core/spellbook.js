function Spellbook()
{
  this.element = document.createElement("spellbook");
  this.spell1 = document.createElement("spell");
  this.spell2 = document.createElement("spell");
  this.spell3 = document.createElement("spell");

  this.content = {};

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
    this.update();
  }

  this.remove_spell = function(wizard)
  {
    this.content[wizard.spell_name()] = null;
    this.update();
  }

  this.update = function()
  {
    var i = 0;
    var spell = null;
    for(spell in this.content){
      spell = this.content[spell].id;
      if(i == 0){ $(this.spell1).css("background-image","url(media/graphics/spellbook/"+spell+".png)"); }
      if(i == 1){ $(this.spell2).css("background-image","url(media/graphics/spellbook/"+spell+".png)"); }
      if(i == 2){ $(this.spell3).css("background-image","url(media/graphics/spellbook/"+spell+".png)"); }
      
      i += 1;
    }
  }
}