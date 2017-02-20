function Walkthrough()
{
  var U = "U", D = "D", L = "L", R = "R";

  var necomedre  = [R,R,R,U,U,U,L,L,L,D,D,D,R,R,R,D,D,D,R,R,U,L,L,U,R,"",U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,R,R,R];
  var nephtaline = [U,U,U,U,R,R,R,R,R,D,D,D,D,D,L,L,L,L,L,U,U,U,U,U,R,R,D,D,U,R,L,D,L,D,D,D,U,D,D,L,L,L,L,U,U,U,R,R,R,R,U,U,U];
  var neomine    = [R,R,R,U,U,U,U,U,U,R,D,R,R,U,U,D,L,L,U,U,R,D,D,L,L,L,U,U,"",D,R,R,U,R,D,L,L,U,U,D,R,R,U,U,L,D,D,R,U,L,L,U,R,R,D,L,U,R,R,R,R,R];
  
  // Nestorine
  var nestorine_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,D,D,D,R,R,R,R,R,R];
  var nestorine_stage  = [D,D,D,D,D,D,L,L,U,"",L,L,L,L,L,L,U,L,D,D,R,D,D,D,D,D,D,D,D,D,D,L,L,L,L,L,L,D,D,R,D,R,R,R];
  var nestorine = nestorine_lobby.concat(nestorine_stage);

  // Nemedique
  var nemedique_lobby = [R,R,R,U,U,U,L,L,L,D,D,D,L,L,L,U,U,U];
  var nemedique_stage = [R,R,R,U,R,"",U,U,U,D,D,D,R,R,R];
  var nemedique = nemedique_lobby.concat(nemedique_stage);

  this.inputs = nemedique;

  this.start = function()
  {
    console.info("Walkthrough has started.");
    this.room = 1;
    oquonie.speed = 100;
    oquonie.player.id = "nemedique";
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