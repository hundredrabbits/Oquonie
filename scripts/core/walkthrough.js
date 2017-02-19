function Walkthrough()
{
  var U = "U", D = "D", L = "L", R = "R";

  this.speed = 200;
  this.room = 32;

  // Necomedre Stage
  this.inputs = [D,D,D,R,R,U,L,L,U,R,"",U,U,R,R,R,U,R,D,D,D,R,R,R,R,R,U,R,R,R];

  this.start = function()
  {
    console.info("Walkthrough has started.");
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

    setTimeout(function(){ oquonie.walkthrough.run(); }, this.speed);
  }
}