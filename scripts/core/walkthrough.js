function Walkthrough()
{
  var U = "U", D = "D", L = "L", R = "R";

  // Chapter 0

  var tutorial = [U,U,U,U,R,D,R,R,U,L,L,L,L,D,R,R,U,U,U,D,D,D,D,D,D,R,R,R,R];

  // Chapter 1

  var necomedre_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,R,R,R];
  var necomedre_stage = [D,D,D,R,R,U,L,L,U,R,"",U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,R,R,R];
  var necomedre = necomedre_lobby.concat(necomedre_stage);

  var nephtaline_lobby = [U,U];
  var nephtaline_stage = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,L,L,L,U,U,U,U,U,R,R,D,D,U,R,L,D,L,D,D,D,U,D,D,L,L,L,L,U,U,U,R,U,R,R,R,U,U,U];
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

  var nephtaline_pillar_stage  = [R,R,R,R,R,R,D,D,D,R,R,U,L,L,U,U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,L,L,L,U,R,R,R,R,R,R,R,R,R,R,"",L,L,L,U,U];
  var nephtaline_pillar_pillar = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,U,U,D,L,L,L,U,U,U,U,U,R,R,R,L,L,D,D,D,U,U,U,U,U];

  var nephtaline_pillar = [];
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_stage);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_pillar);

  var nephtaline_pillar_stage  = [R,R,R,R,R,R,D,D,D,R,R,U,L,L,U,U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,L,L,L,U,R,R,R,R,R,R,R,R,R,R,"",L,L,L,U,U];
  var nephtaline_pillar_pillar = [U,U,R,R,R,R,R,D,D,D,D,D,L,L,U,U,D,L,L,L,U,U,U,U,U,R,R,R,L,L,D,D,D,U,U,U,U,U];

  var nephtaline_pillar = [];
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_stage);
  nephtaline_pillar = nephtaline_pillar.concat(nephtaline_pillar_pillar);

  var necomedre_pillar_stage  = [R,R,R,U,U,U,L,L,L,D,D,D,L,L,L,U,U,U,R,R,R,U,U,U,U,D,D,D,L,L,L,L,U,R,R,R,R,R,R,R,R,R,R,U,U,U,R,R,R,D,D,D,R,"",U,U,U,L,L,L,D,D,D,R,R,R];
  var necomedre_pillar_pillar = [R,R,R,R,R,U,R,R,U,U,U];

  var necomedre_pillar = [];
  necomedre_pillar = necomedre_pillar.concat(necomedre_pillar_stage);
  necomedre_pillar = necomedre_pillar.concat(necomedre_pillar_pillar);

  var nestorine_pillar_stage  = [U,U,U,R,R,R,U,U,U,R,D,R,R,U,U,D,L,L,U,U,R,D,D,L,U,R,D,L,L,U,U,D,R,R,U,U,L,D,D,R,U,L,L,U,R,R,U,L,D,R,R,R,L,U,L,D,R,R,R,R,R,R,R,R,R,"",U,U,U,L,L,L,D,D,D,D,D,D,R,R,R,R,R,R];
  var nestorine_pillar_pillar = [D,D,D,L,L,L,D,D,D,L,L,U,L,L,L,L,U,U,U];

  var nestorine_pillar = [];
  nestorine_pillar = nestorine_pillar.concat(nestorine_pillar_stage);
  nestorine_pillar = nestorine_pillar.concat(nestorine_pillar_pillar);

  var neomine_pillar_stage  = [L,L,L,U,U,U,U,U,U,R,R,R,D,D,D,L,L,L,U,U,U,U,R,R,R,R,R,D,D,D,D,D,L,L,L,L,L,U,U,U,U,U,R,R,D,D,U,R,L,D,L,D,D,D,U,D,D,L,L,L,U,U,U,R,R,R,R,L,L,U,R,R,D,D,U,D,D,L,L,L,U,U,U,R,R,R,U,U,U,R,R,R,R,"",U,U,U,U,U,U,R,U,R,R,R,D,R,R,R];
  var neomine_pillar_pillar = [];

  var neomine_pillar = [];
  neomine_pillar = neomine_pillar.concat(neomine_pillar_stage);
  neomine_pillar = neomine_pillar.concat(neomine_pillar_pillar);

  // Chapter 3

  var nastazie_pillar_nemedique = [L,L,L,U,U,U,U,U,L,U,R,U,R,R,L,L,L,U,U,D,R,R,R,R,R,D,U,D,L,U,L,L,L,U,U,D,L,L,D,R,R,R,R,R,U,L,U,U,U,U];
  var nastazie_pillar_neomine = [U,R,D,D,D,D,D,L,L,L,U,U,U,U,L,L,U,R,R,R,U,U,U,U,U,U];
  var nastazie_pillar_nephtaline = [U,R,D,D,D,D,L,L,L,L,U,U,U,U,L,D,L,D,D,R,D,D,D,R,R,R,U,L,L,U,U,U,U,U,R,U,U]
  var nastazie_pillar_nastazie = [U,R,D,D,D,D,D,L,D,R,R,R,R,R,U,L,L,L,L,U,U,U,D,R,D,D,D,D,D,L,D,R,R,D,R,R,R];

  var nastazie_pillar = [];
  nastazie_pillar.concat(nastazie_pillar_nemedique);

  var extra_missing_rooms = ["W11"];

  // Everything

  var full = [];

  full = [];
  full = full.concat(tutorial);
  var chapter_0 = full;

  full = [];
  full = full.concat(necomedre);
  full = full.concat(nephtaline);
  full = full.concat(neomine);
  full = full.concat(nestorine);
  full = full.concat(nemedique);
  var chapter_1 = full;

  full = [];
  full = full.concat(nephtaline_pillar);
  full = full.concat(necomedre_pillar);
  full = full.concat(nestorine_pillar);
  full = full.concat(neomine_pillar);
  var chapter_2 = full;

  full = [];
  full = full.concat(nastazie_pillar_nemedique);
  full = full.concat(nastazie_pillar_neomine);
  full = full.concat(nastazie_pillar_nephtaline);
  full = full.concat(nastazie_pillar_nastazie);
  var chapter_3 = full;

  full = [];
  full = full.concat(extra_missing_rooms);
  var chapter_4 = full;

  var chapter_all = [];
  chapter_all = chapter_all.concat(chapter_0);
  chapter_all = chapter_all.concat(chapter_1);
  chapter_all = chapter_all.concat(chapter_2);
  chapter_all = chapter_all.concat(chapter_3);
  chapter_all = chapter_all.concat(chapter_4);

  this.start = function()
  {
    console.info("Walkthrough has started.");

    oquonie.speed = 150;

    this.manual();
  }

  this.manual = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 1; // Lobby
    // this.room = 25; // Intro
    // this.room = 39; // Intro
    // oquonie.spellbook.add_spell("nephtaline_1")
    // oquonie.spellbook.add_spell("nephtaline_2")
    oquonie.spellbook.add_ramen("necomedre");
    oquonie.stage.enter_room(this.room);
  }

  this.walk_all = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 29;
    this.inputs = chapter_all;
    oquonie.stage.enter_room(this.room);
    this.run();
  }

  this.walk_chapter0 = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 29;
    this.inputs = chapter_0;
    oquonie.stage.enter_room(this.room);
    this.run();
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

  this.walk_chapter3 = function()
  {
    oquonie.player.id = "necomedre";
    this.room = 3;
    this.inputs = chapter_3;
    oquonie.stage.enter_room(this.room);
    this.run();
  }

  this.walk_chapter4 = function()
  {
    oquonie.player.id = "nastazie";
    this.room = 4;
    this.inputs = chapter_4;
    oquonie.stage.enter_room(this.room);
    this.run();
  }

  this.run = function()
  {
    if(this.inputs.length < 1){ this.end(); return; }

    if(this.inputs[0] == "U"){ keyboard.key_arrow_up(); }
    else if(this.inputs[0] == "D"){ keyboard.key_arrow_down(); }
    else if(this.inputs[0] == "L"){ keyboard.key_arrow_left(); }
    else if(this.inputs[0] == "R"){ keyboard.key_arrow_right(); }  
    else if(this.inputs[0] == ""){ keyboard.key_escape(); }    
    else if(this.inputs[0][0] == "W"){ oquonie.player.warp_at(parseInt(this.inputs[0].substr(1))); }  

    this.inputs.shift();

    setTimeout(function(){ oquonie.walkthrough.run(); }, oquonie.speed * 2);
  }

  this.end = function()
  {
    this.analysis();
  }

  this.analysis = function()
  {
    var unused_rooms = [];
    for(room in oquonie.world.rooms){
      if(!oquonie.world.rooms[room].is_known){
        unused_rooms.push(oquonie.world.rooms[room])
      }
    }
    console.log(unused_rooms.length+" Unused Rooms: ");
    console.log(unused_rooms);
  }
}