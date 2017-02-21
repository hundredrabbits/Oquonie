function Walkthrough()
{
  var U = "U", D = "D", L = "L", R = "R";

  // Chapter 1

  var necomedre_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,R,R,R];
  var necomedre_stage = [D,D,D,R,R,U,L,L,U,R,"",U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,R,R,R];
  var necomedre = necomedre_lobby.concat(necomedre_stage);

  var nephtaline_lobby = [U,U];
  var nephtaline_stage = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,L,L,L,U,U,U,U,U,R,R,D,D,U,R,L,D,L,D,D,D,U,D,D,L,L,L,L,U,U,U,R,R,R,R,U,U,U];
  var nephtaline = nephtaline_lobby.concat(nephtaline_stage);

  var neomine_lobby = [R,R,R,U,U,U,U,U];
  var neomine_stage = [U,R,D,R,R,U,U,D,L,L,U,U,R,D,D,L,L,L,U,U,"",D,R,R,U,R,D,L,L,U,U,D,R,R,U,U,L,D,D,R,U,L,L,U,R,R,D,L,U,R,R,R,R,R];
  var neomine = neomine_lobby.concat(neomine_stage);
  
  var nestorine_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,D,D,D,R,R,R,R,R,R];
  var nestorine_stage  = [D,D,D,D,D,D,L,L,U,"",L,L,L,L,L,L,U,L,D,D,R,D,D,D,D,D,D,D,D,D,D,L,L,L,L,L,L,D,D,R,D,R,R,R];
  var nestorine = nestorine_lobby.concat(nestorine_stage);

  var nemedique_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,L,L,L,U,U,U];
  var nemedique_stage = [R,R,R,U,R,"",U,U,U,D,D,D,R,R,R];
  var nemedique = nemedique_lobby.concat(nemedique_stage);

  // Chapter 2

  var nephtaline_pillar_stage  = [R,R,R,R,R,R,D,D,D,R,R,U,L,L,U,U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,L,L,L,U,R,R,R,R,R,R];
  var nephtaline_pillar_lobby  = [R,R,R,R,"",L,L,L,U,U];
  var nephtaline_pillar_pillar = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,U,U,D,L,L,L,U,U,U,U,U,R,R,R,L,L,D,D,D,U,U,U,U,U];

  var nephtaline_pillar = [].concat(nephtaline_pillar_stage);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_lobby);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_pillar);

  var nephtaline_pillar_stage  = [R,R,R,R,R,R,D,D,D,R,R,U,L,L,U,U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,L,L,L,U,R,R,R,R,R,R];
  var nephtaline_pillar_lobby  = [R,R,R,R,"",L,L,L,U,U];
  var nephtaline_pillar_pillar = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,U,U,D,L,L,L,U,U,U,U,U,R,R,R,L,L,D,D,D,U,U,U,U,U];

  var nephtaline_pillar = [].concat(nephtaline_pillar_stage);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_lobby);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_pillar);

  var nemedique_pillar_stage  = [R,R,R,U,U,U,L,L,L,D,D,D,L,L,L,U,U,U];
  var nemedique_pillar_lobby  = [R,R,R,U,U,U,U,D,D,D,L,L,L,L,U,R,R,R,R,R,R,R,R,R,R,U,U,U,R,R,R,D,D,D,R,"",U,U,U,L,L,L,D,D,D,R,R,R];
  var nemedique_pillar_pillar = [R,R,R,R,R,U,R,R,U,U,U];

  var nemedique_pillar = [].concat(nemedique_pillar_stage);
  nemedique_pillar = nemedique_pillar.concat(nemedique_pillar_lobby);
  nemedique_pillar = nemedique_pillar.concat(nemedique_pillar_pillar);

  // Everything

  var full = [];
  full = full.concat(necomedre);
  full = full.concat(nephtaline);
  full = full.concat(neomine);
  full = full.concat(nestorine);
  full = full.concat(nemedique);

  var chapter_1 = full;

  full = [];

  full = full.concat(nephtaline_pillar);
  full = full.concat(nemedique_pillar);

  var chapter_2 = full;

  this.start = function()
  {
    console.info("Walkthrough has started.");

    oquonie.speed = 50;

    this.walk_chapter2();
  }

  this.manual = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 1;
    oquonie.stage.enter_room(this.room);
  }

  this.walk_chapter1 = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 1;
    this.inputs = chapter_1;
    oquonie.stage.enter_room(this.room);
    this.run();
  }

  this.walk_chapter2 = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 9;
    this.inputs = chapter_2;
    oquonie.stage.enter_room(this.room);
    this.run();
  }

  this.run = function()
  {
    if(this.inputs.length < 1){ return; }

    if(this.inputs[0] == "U"){ keyboard.key_arrow_up(); }
    else if(this.inputs[0] == "D"){ keyboard.key_arrow_down(); }
    else if(this.inputs[0] == "L"){ keyboard.key_arrow_left(); }
    else if(this.inputs[0] == "R"){ keyboard.key_arrow_right(); }  
    else if(this.inputs[0] == ""){ keyboard.key_escape(); }    

    this.inputs.shift();

    setTimeout(function(){ oquonie.walkthrough.run(); }, oquonie.speed * 2);
  }
}