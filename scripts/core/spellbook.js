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

  this.toggle_spell = function(spell_name)
  {
    console.log("Toggle Spell: "+spell_name);
  }
}