function World()
{
  this.rooms = [];
  
  this.install = function()
  {
    this.createLobby();
    this.createNecomedre();
    this.createNephtaline();
    this.createNeomine();
    this.createNestorine();
    this.createNemedique();
    this.createNastazie();
    this.createSecrets();
  }
  
  this.createLobby = function()
  {
    var room = new Room(1);
    
    room.floors = [ 0,25,2, 2,8,4, 2,2,2 ];
    room.walls  = [ 0,5,2,2,12,15 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,10));
    room.add_event(new PillarBase(1,-1,"nephtaline"));
    room.add_event(new Gate("nephtaline",0,2,40,-1,-1));
    room.add_event(new Door(2,0,2,-1,0));
    this.rooms[1] = room;
    
    room = new Room(2);
    room.floors = [ 1,4,1, 5,5,1, 1,1,1 ];
    room.walls  = [ 16,12,19, 25,25,25 ];
    room.steps  = [ 0,7,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,24));
    room.add_event(new Ramen(1,0));
    room.add_event(new Plan(-1,2,"lobby"));
    room.add_event(new Door(-2,0,1,1,0));
    room.add_event(new Door(0,2,3,0,-1));
    this.rooms[2] = room;
    
    room = new Room(3);
    room.floors = [ 1,23,1, 6,5,1, 1,4,1 ];
    room.walls  = [ 1,7,1, 1,1,1 ];
    room.steps  = [ 0,7,0, 0,7,0];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new PillarBase(-1,1,"neomine"));
    room.add_event(new Owl(1,1),true);   
    room.add_event(new Blocker(-1,-1,1));
    room.add_event(new Gate("neomine",0,2,60,0,-1));
    room.add_event(new Door(-2,0,4,1,0));
    room.add_event(new Door(0,-2,2,0,1));
    // room.add_event(new DoorBroken(2,0,111,-1,0))
    this.rooms[3] = room
    
    room = new Room(4);
    room.floors = [ 1,1,1, 1,5,6, 1,6,1 ];
    room.walls  = [ 26,14,26,1,12,1 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,9));
    room.add_event(new PillarBase(1,-1,"nastazie"));
    room.add_event(new Speaker(-1,1),true);
    room.add_event(new Door(0,2,14,0,-1));
    room.add_event(new Door(2,0,3,-1,0));
    room.add_event(new Door(0,-2,5,0,1));
    this.rooms[4] = room;
    
    room = new Room(5);
    room.floors = [ 9,10,9, 4,5,14, 9,6,9 ]
    room.walls  = [ 3,14,3, 3,4,3 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new PillarBase(1,1,"necomedre"));
    room.add_event(new Blocker(-1,1,30));
    room.add_event(new Door(0,2,4,0,-1));
    room.add_event(new Gate("necomedre",2,0,32,-1,0));
    room.add_event(new Door(-2,0,9,1,0));
    room.add_event(new Door(0,-2,6,0,1));
    this.rooms[5] = room;
    
    room = new Room(6);
    room.floors = [ 9,4,9, 10,5,6, 9,10,9 ]
    room.walls  = [ 3,13,3, 26,13,26 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,5));
    room.add_event(new Door(0,2,5,0,-1));
    room.add_event(new Door(2,0,7,-1,0));
    this.rooms[6] = room;
    
    room = new Room(7);
    room.floors = [ 9,10,0, 4,5,12, 9,0,0 ]
    room.walls  = [ 19,0,0, 0,8,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new PillarBase(-1,-1,"nestorine"));
    room.add_event(new Blocker(0,1,11));
    room.add_event(new Gate("nestorine",2,0,96,-1,0));
    room.add_event(new Door(-2,0,6,1,0));
    this.rooms[7] = room;
    
    room = new Room(9);
    room.floors = [ 10,27,10, 9,4,5, 0,6,10 ];
    room.walls  = [ 18,9,18, 3,13,3 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new PillarBase(-1,1,"nemedique"));
    room.add_event(new Gate("nemedique",0,2,100,0,-1));
    room.add_event(new Door(2,0,5,-1,0));
    room.add_event(new Door(0,-2,11,0,1));
    this.rooms[9] = room;
  
    room = new Room(11);
    room.floors = [ 4,5,6, 5,33,4, 4,6,5 ];
    room.walls  = [ 36,13,36, 3,37,3 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Door(0,2,9,0,-1));
    room.add_event(new Tree(0,0));
    this.rooms[11] = room;
    
    room = new Room(14);
    room.floors = [ 0,900,0, 0,5,0, 0,5,0 ];
    room.walls  = [ 0,0,0, 0,0,0 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Noface(0,1),true);
    room.add_event(new Door(0,-2,4,0,1));
    this.rooms[14] = room;
  }
  
  this.createNecomedre = function()
  {
    var room = new Room(21);
  
    room = new Room(21);
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,20,20, 24,21,20 ];
    room.steps  = [ 0,0,0, 10,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(0,0,14));
    room.add_event(new Door(2,1,24,-1,1));
    room.add_event(new Door(-1,-2,22,1,1));
    this.rooms[21] = room;
    
    room = new Room(22);
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 24,20,20, 20,21,20 ];
    room.steps  = [ 0,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(-1,0,16));
    room.add_event(new Door(-1,2,21,-1,-1));
    room.add_event(new Door(0,-2,23,0,1));
    this.rooms[22] = room;
    
    room = new Room(23);
    room.floors = [ 21,21,21, 21,17,21, 21,21,21 ];
    room.walls  = [ 19,1,19, 19,1,19 ];
    room.steps  = [ 0,10,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Wizard(-1,1,"document"),true);
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(1,-1,15));
    room.add_event(new Door(-2,0,28,1,0));
    this.rooms[23] = room;
    
    room = new Room(24);
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 10,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,14));
    room.add_event(new Blocker(-1,-1,16));
    room.add_event(new Door(0,2,23,0,-1));
    room.add_event(new Door(2,0,27,-1,0));
    room.add_event(new Door(-2,1,21,1,1));
    room.add_event(new Door(0,-2,25,0,1));
    this.rooms[24] = room;
    
    room = new Room(25);
    room.floors = [ 21,21,21, 21,18,21, 21,21,21 ];
    room.walls  = [ 21,20,20, 20,24,20 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Blocker(1,1,16));
    room.add_event(new Wizard(1,-1,"document"));
    room.add_event(new Door(2,0,28,-1,0));
    this.rooms[25] = room;
    
    room = new Room(26);
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,20,21 ];
    room.steps  = [ 0,10,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,14));
    room.add_event(new Blocker(-1,0,16));
    room.add_event(new Door(0,2,25,0,-1));
    room.add_event(new Door(-2,0,23,1,0));
    this.rooms[26] = room;
    
    room = new Room(27);
    room.floors = [ 21,21,21, 21,19,21, 21,21,21 ];
    room.walls  = [ 19,19,19, 19,21,20 ];
    room.steps  = [ 0,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "black";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Speaker(0,1),true);
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(1,-1,16));
    room.add_event(new Door(0,-2,28,0,1));
    this.rooms[27] = room;
    
    room = new Room(28);
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 0,10,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,14));
    room.add_event(new Wizard(1,1,"document"),true);
    room.add_event(new Blocker(-1,-1,16));
    room.add_event(new Door(0,2,27,0,-1));
    room.add_event(new Door(2,0,23,-1,0));
    room.add_event(new Door(-2,0,25,1,0));
    room.add_event(new Door(0,-2,29,0,1));
    this.rooms[28] = room;
    
    room = new Room(29);
    room.floors = [ 21,21,21, 21,8,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Blocker(1,-1,16));
    room.add_event(new Door(0,2,28,0,-1));
    room.add_event(new Gate("document",2,0,30,-1,0));
    this.rooms[29] = room;
    
    room = new Room(30);
    room.floors = [ 21,21,21, 21,1,1, 21,21,1 ];
    room.walls  = [ 20,20,20, 20,21,20 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,16));
    room.add_event(new Blocker(1,-1,1));
    room.add_event(new Boss(1,0),true);
    this.rooms[30] = room
    
    room = new Room(31);
    room.floors = [ 4,5,6, 4,5,4, 5,5,6 ];
    room.walls  = [ 26,26,26, 26,40,15 ];
    room.steps  = [ 0,3,0, 0,0,0 ];
    room.audio  = "pillar";
    room.theme  = "black";
    this.rooms[31] = room;
    
    room = new Room(32);
    room.floors = [ 33,33,33, 14,4,5, 33,6,33 ];
    room.walls  = [ 36,16,36, 19,12,19 ];
    room.steps  = [ 0,5,0, 0,6,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,23));
    room.add_event(new Owl(1,1));
    room.add_event(new Plan(0,2,"necomedre"));
    room.add_event(new Door(2,0,33,-1,0));
    room.add_event(new Gate("necomedre",-2,0,5,1,0));
    room.add_event(new Door(0,-2,35,0,1));
    this.rooms[32] = room;
    
    room = new Room(33);
    room.floors = [ 33,33,33, 5,4,6, 33,33,4 ];
    room.walls  = [ 36,36,26, 19,12,15 ];
    room.steps  = [ 0,7,0, 0,0,6 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Wizard(0,1,"nephtaline"),true);
    room.add_event(new Door(2,0,34,-1,0));
    room.add_event(new Door(-2,0,32,1,0));
    room.add_event(new Door(1,-2,36,1,1));
    this.rooms[33] = room;
    
    room = new Room(34);
    room.floors = [ 33,35,35, 4,6,5, 33,35,35 ];
    room.walls  = [ 36,25,8, 36,12,26 ];
    room.steps  = [ 0,6,0, 0,0,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Wizard(-1,1,"nestorine"),true);
    room.add_event(new Blocker(1,-1,11));
    room.add_event(new Gate("nestorine",1,2,120,0,-1));
    room.add_event(new Door(2,0,35,-1,0));
    room.add_event(new Door(-2,0,33,1,0));
    this.rooms[34] = room;
    
    room = new Room(35);
    room.floors = [ 33,33,33, 33,33,33, 33,33,33 ];
    room.walls  = [ 26,12,26, 19,12,19 ];
    room.steps  = [ 0,6,0, 0,0,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Ramen(1,1,"necomedre"));
    room.add_event(new Speaker(1,-1));
    room.add_event(new Door(0,2,32,0,-1));
    room.add_event(new Door(2,0,36,-1,0));
    room.add_event(new Door(-2,0,34,1,0));
    this.rooms[35] = room;
    
    room = new Room(36);
    room.floors = [ 33,0,4, 33,0,4, 33,0,4 ]
    room.walls  = [ 26,0,12, 19,12,19 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1,"nephtaline"),true)
    // room.add_event(new Red(1,-1))
    room.add_event(new Door(1,2,33,1,-1))
    room.add_event(new Door(2,0,37,-1,0))
    room.add_event(new Door(-2,0,35,1,0))
    this.rooms[36] = room;
    
    room = new Room(37);
    room.floors = [ 33,4,4, 33,33,4, 33,4,4 ]
    room.walls  = [ 26,26,26, 26,12,26 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(0,1,"nemedique"),true)
    room.add_event(new Blocker(1,-1,23))
    room.add_event(new Door(2,0,38,-1,0))
    room.add_event(new Door(-2,0,36,1,0))
    this.rooms[37] = room
    
    room = new Room(38);
    room.floors = [ 9,33,33, 4,33,13, 9,33,33 ]
    room.walls  = [ 26,26,26, 18,5,18 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(0,1,"nephtaline"),true)
    room.add_event(new Blocker(-1,-1,5))
    room.add_event(new Gate("nephtaline",2,0,39,-1,0));
    room.add_event(new Door(-2,0,37,1,0))
    this.rooms[38] = room
    
    room = new Room(39);
    room.floors = [ 33,33,4, 18,7,33, 5,33,33 ]
    room.walls  = [ 26,19,36, 36,19,19 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,1))
    room.add_event(new Door(-2,0,38,1,0))
    this.rooms[39] = room
    
    room = new Room(120);
    room.floors = [ 4,9,5, 9,8,9, 5,6,9 ]
    room.walls  = [ 36,37,36, 36,37,36 ]
    room.steps  = [ 0,0,0, 0,6,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"necomedre",5,"neomine"))
    room.add_event(new Door(0,-2,34,1,1))
    this.rooms[120] = room
  }
  
  this.createNephtaline = function()
  {
    var room = new Room(40);
  
    room = new Room(40);
    room.floors = [ 18,6,4, 5,0,30, 25,0,32 ]
    room.walls  = [ 0,0,0, 12,0,3 ]
    room.steps  = [ 0,0,0, 6,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    // room.add_event(new Red(1,-1))
    room.add_event(new Door(2,1,41,-1,1))
    room.add_event(new Gate("nephtaline",-1,-2,1,0,1))
    this.rooms[40] = room
    
    room = new Room(41);
    room.floors = [ 4,5,19, 0,0,6, 32,30,5 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 7,0,0, 0,0,7 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(-2,1,40,1,1))
    room.add_event(new Door(1,-2,42,1,1))
    this.rooms[41] = room
    
    room = new Room(42);
    room.floors = [ 32,0,5, 30,0,4, 4,6,17 ]
    room.walls  = [ 3,0,13, 0,0,0 ]
    room.steps  = [ 0,0,7, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1, "nemedique"),true)
    room.add_event(new Door(1,2,41,1,-1))
    room.add_event(new Door(-2,-1,43,1,-1))
    this.rooms[42] = room
    
    room = new Room(43);
    room.floors = [ 4,30,32, 4,0,0, 16,4,4 ]
    room.walls  = [ 13,0,3, 3,0,13 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(1,1,10))
    room.add_event(new Door(-1,2,44,-1,-1))
    room.add_event(new Door(2,-1,42,-1,-1))
    this.rooms[43] = room
    
    room = new Room(44);
    room.floors = [ 18,4,4, 4,0,30, 4,0,32 ]
    room.walls  = [ 0,0,0, 12,0,0 ]
    room.steps  = [ 0,0,0, 7,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,-1, "neomine"))
    room.add_event(new Door(2,1,45,-1,1))
    room.add_event(new Door(-1,-2,43,-1,1))
    this.rooms[44] = room
    
    room = new Room(45);
    room.floors = [ 4,4,17, 30,0,4, 32,0,4 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 7,0,0, 0,0,7 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,7))
    room.add_event(new Door(-2,1,46,1,1))
    room.add_event(new Door(1,-2,42,1,1))
//    room.add_event(new Wizard(1,-2, spell: catDoorFork))
    this.rooms[45] = room
    
    room = new Room(46);
    room.floors = [ 3,5,6, 17,4,3, 3,3,3 ]
    room.walls  = [ 18,18,18, 13,18,18 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(-1,1,13))
    room.add_event(new Wizard(1,0,"neomine"))
//    room.add_event(new Door(0,2,photobooth))
    room.add_event(new Door(2,1,41,-1,1))
    room.add_event(new Door(-2,0,47,1,0))
    room.add_event(new Door(0,-2,51,0,1))
    this.rooms[46] = room
    
    room = new Room(47);
    room.floors = [ 0,0,4, 0,10,5, 0,5,0 ]
    room.walls  = [ 0,0,0, 3,13,3 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"necomedre"),true)
    room.add_event(new Door(2,0,46,-1,0))
    room.add_event(new Door(0,-2,48,0,1))
    this.rooms[47] = room
    
    room = new Room(48);
    room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,13,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,47,0,-1))
    room.add_event(new Door(2,0,49,-1,0))
    this.rooms[48] = room
    
    room = new Room(49);
    room.floors = [ 0,5,0, 5,10,0, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,48,1,0))
    this.rooms[49] = room
    
    room = new Room(50);
    room.floors = [ 3,32,3, 32,31,32, 3,32,3 ]
    room.walls  = [ 3,9,3, 2,16,2 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Owl(1,1))
    room.add_event(new Blocker(1,-1,21))
    room.add_event(new Gate("nemedique",0,2,121,0,-1))
    room.add_event(new Plan(2,0,"nephtaline"))
    room.add_event(new Door(-2,0,47,1,0))
    room.add_event(new Door(0,-2,55,0,1))
    this.rooms[50] = room
    
    room = new Room(51);
    room.floors = [ 0,5,5, 5,10,5, 0,0,0 ]
    room.walls  = [ 3,13,3, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Speaker(1,1),true)
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,48,1,0))
    this.rooms[51] = room
    
    room = new Room(55);
    room.floors = [ 0,5,0, 5,10,0, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,56,1,0))
    this.rooms[55] = room
    
    room = new Room(56);
    room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,13,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,57,0,-1))
    room.add_event(new Door(2,0,55,-1,0))
    this.rooms[56] = room
    
    room = new Room(57);
    room.floors = [ 0,5,5, 0,10,5, 0,5,0 ]
    room.walls  = [ 0,0,0, 3,13,3 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Ramen(1,1,"nephtaline"));
    room.add_event(new Door(2,0,58,-1,0))
    room.add_event(new Door(0,-2,56,0,1))
    this.rooms[57] = room
    
    room = new Room(58);
    room.floors = [ 31,4,31, 4,5,31, 31,31,31 ]
    room.walls  = [ 18,7,18, 18,18,18 ]
    room.add_event(new Blocker(1,1,8))
    room.add_event(new Blocker(1,-1,8))
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,0,"neomine"))
    room.add_event(new Gate("neomine",0,2,59,0,-1))
    room.add_event(new Door(-2,0,47,1,0))
    this.rooms[58] = room
    
    room = new Room(59);
    room.floors = [ 32,29,32, 29,7,29, 32,5,32 ]
    room.walls  = [ 3,2,3, 3,2,3 ]
    room.steps  = [ 0,0,0, 0,4,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,1))
    room.add_event(new Gate("neomine",0,-2,58,0,1))
    this.rooms[59] = room
    
    room = new Room(121);
    room.floors = [ 97,31,97, 31,8,31, 98,98,31 ]
    room.walls  = [ 25,18,25, 25,18,25 ]
    room.steps  = [ 0,0,0, 0,3,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"nephtaline",1))
    room.add_event(new Gate("nemedique",0,-2,50,0,1))
    this.rooms[121] = room
  }
  
  this.createNeomine = function()
  {
    var room = new Room(60);
  
    room = new Room(60);
    room.floors = [ 1,4,18, 1,4,1, 1,23,1 ]
    room.walls  = [ 33,31,33, 30,16,14 ]
    room.steps  = [ 0,0,0, 0,4,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(0,1,13))
    room.add_event(new Door(2,1,62,-1,1))
    room.add_event(new Plan(2,0,"neomine"))
    room.add_event(new Gate("neomine",0,-2,3,0,1))
    room.add_event(new Door(2,-1,61,-1,-1))
    this.rooms[60] = room
    
    room = new Room(61);
    room.floors = [ 1,1,1, 38,1,38, 1,1,1 ]
    room.walls  = [ 31,30,31, 33,31,33 ]
    room.steps  = [ 0,0,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(-1,1,19))
    room.add_event(new Wizard(0,1,"nestorine"),true)
    room.add_event(new Blocker(1,1,19))
    room.add_event(new Door(-2,-1,60,1,-1))
    this.rooms[61] = room
    
    room = new Room(62);
    room.floors = [ 4,5,6, 5,6,33, 6,5,5 ]
    room.walls  = [ 32,31,32, 36,4,36 ]
    room.steps  = [ 3,0,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"necomedre",true)) // requiresPillar
    room.add_event(new Blocker(0,-1,23))
    room.add_event(new Gate("necomedre",2,0,71,-1,0))
    room.add_event(new Door(-2,1,60,1,1))
    room.add_event(new Door(-2,-1,63,1,-1))
    this.rooms[62] = room
    
    room = new Room(63);
    room.floors = [ 10,10,10, 10,0,10, 10,10,9 ]
    room.walls  = [ 32,33,32, 14,30,14 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(0,0,9))
    room.add_event(new Ramen(-1,1,"neomine"),true);
    room.add_event(new Door(2,1,66,-1,1))
    room.add_event(new Door(2,0,64,-1,0))
    room.add_event(new Door(2,-1,62,-1,-1))
    this.rooms[63] = room
    
    room = new Room(64);
    room.floors = [ 39,1,39, 36,32,36, 39,36,1 ]
    room.walls  = [ 33,33,33, 31,31,15 ]
    room.steps  = [ 3,3,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,21))
    room.add_event(new Wizard(1,0,"nephtaline",true))
    room.add_event(new Door(-2,1,68,1,1))
    room.add_event(new Door(-2,0,63,1,0))
    room.add_event(new Door(-2,-1,65,1,-1))
    this.rooms[64] = room
    
    room = new Room(65);
    room.floors = [ 0,33,1, 1,33,1, 1,33,33 ]
    room.walls  = [ 0,3,3, 3,15,14 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nestorine"),true)
    room.add_event(new Blocker(1,0,1))
    room.add_event(new Door(2,-1,64,-1,-1))
    this.rooms[65] = room
    
    room = new Room(66);
    room.floors = [ 39,36,39, 36,28,29, 39,36,39 ]
    room.walls  = [ 31,31,31, 33,32,33 ]
    room.steps  = [ 3,3,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,13))
    room.add_event(new Owl(1,0))
//    room.add_event(new Door(0,2,photoBooth))
    room.add_event(new Door(-2,1,63,1,1))
    room.add_event(new Door(-2,0,67,1,0))
    room.add_event(new Door(-2,-1,68,1,-1))
    this.rooms[66] = room
    
    room = new Room(67);
    room.floors = [ 1,36,1, 1,39,36, 1,1,1 ]
    room.walls  = [ 25,25,25, 31,30,31 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nestorine"),true)
    room.add_event(new Door(2,0,66,-1,0))
    this.rooms[67] = room
    
    room = new Room(68);
    room.floors = [ 38,100,38, 6,9,10, 5,4,10 ]
    room.walls  = [ 20,38,20, 30,30,30 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    // room.add_event(new Red(-1,1))
    // room.add_event(new DoorBroken(0,2,113,0,-1))
    room.add_event(new Door(2,1,64,-1,1))
    room.add_event(new Door(2,0,69,-1,0))
    room.add_event(new Door(2,-1,66,-1,-1))
    this.rooms[68] = room
    
    room = new Room(69);
    room.floors = [ 35,35,34, 35,35,12, 35,35,34 ]
    room.walls  = [ 35,34,35, 34,8,34 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Speaker(1,1))
    room.add_event(new Blocker(-1,1,11))
    room.add_event(new Gate("nestorine",2,0,70,-1,0))
    room.add_event(new Door(-2,0,68,1,0))
    this.rooms[69] = room
    
    room = new Room(70);
    room.floors = [ 39,40,39, 40,7,40, 39,40,39 ]
    room.walls  = [ 29,29,29, 29,29,29 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "black"
    room.add_event(new Teleport(0,0,1))
    room.add_event(new Door(-1,2,70,-1,-1))
    room.add_event(new Door(0,2,70,0,-1))
    room.add_event(new Door(1,2,70,1,-1))
    room.add_event(new Door(2,1,70,-1,1))
    room.add_event(new Door(2,0,70,-1,0))
    room.add_event(new Door(2,-1,70,-1,1))
    room.add_event(new Door(-2,0, "nestorine",69,1,0))
    this.rooms[70] = room
    
    room = new Room(71);
    room.floors = [ 1,29,1, 29,8,29, 1,29,1 ]
    room.walls  = [ 18,17,18, 18,17,18 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"neomine",3))
    room.add_event(new Gate("necomedre",-2,0,62,1,0))
    this.rooms[71] = room
  }
  
  this.createNestorine = function()
  {
    var room = new Room(80);
  
    room = new Room(80);
    room.floors = [ 35,35,7, 34,8,35, 35,34,35 ]
    room.walls  = [ 35,15,35, 34,15,34 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,1,23))
    room.add_event(new Teleport(1,1,7,0,0))
    room.add_event(new Door(-2,0,81,1,0))
    room.add_event(new Door(0,-2,82,0,1))
    this.rooms[80] = room
    
    room = new Room(81);
    room.floors = [ 34,35,35, 35,35,35, 34,35,34 ]
    room.walls  = [ 34,35,34, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Door(-2,0,83,1,0))
    room.add_event(new Door(0,-2,84,0,1))
    this.rooms[81] = room
    
    room = new Room(82);
    room.floors = [ 34,35,34, 35,35,34, 34,35,34 ]
    room.walls  = [ 25,15,25, 35,34,35 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,11))
    room.add_event(new Door(-2,0,84,1,0))
    room.add_event(new Door(0,-2,85,0,1))
    this.rooms[82] = room
    
    room = new Room(83);
    room.floors = [ 34,34,34, 35,35,35, 35,35,0 ]
    room.walls  = [ 35,34,35, 26,15,26 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,23))
    room.add_event(new Door(-2,0,86,1,0))
    room.add_event(new Door(0,-2,87,0,1))
    this.rooms[83] = room
    
    room = new Room(84);
    room.floors = [ 34,35,35, 35,35,35, 35,35,34 ]
    room.walls  = [ 35,15,34, 34,15,35 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Owl(1,1))
    room.add_event(new Blocker(-1,-1,11))
    room.add_event(new Door(-2,0,87,1,0))
    room.add_event(new Door(0,-2,88,0,1))
    this.rooms[84] = room
    
    room = new Room(85);
    room.floors = [ 34,35,35, 35,35,35, 0,35,34 ]
    room.walls  = [ 26,15,26, 34,16,34 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    // room.add_event(new Red(1,0))
    room.add_event(new Plan(2,0,"nestorine"))
    room.add_event(new Door(-2,0,88,1,0))
    room.add_event(new Door(0,-2,89,0,1))
    this.rooms[85] = room
    
    room = new Room(86);
    room.floors = [ 34,10,34, 35,35,35, 34,0,34 ]
    room.walls  = [ 34,34,34, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Door(-2,0,80,1,0))
    this.rooms[86] = room
    
    room = new Room(87);
    room.floors = [ 35,35,35, 35,35,35, 35,35,0 ]
    room.walls  = [ 25,15,25, 26,15,0 ]
    room.steps  = [ 0,0,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Speaker(1,1))
    room.add_event(new Door(0,-2,91,0,1))
    this.rooms[87] = room
    
    room = new Room(88);
    room.floors = [ 34,35,35, 35,35,35, 34,35,0 ]
    room.walls  = [ 36,15,36, 36,15,0 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Ramen(1,1,"nestorine"));
    room.add_event(new Door(-2,0,91,1,0))
    this.rooms[88] = room
    
    room = new Room(89);
    room.floors = [ 34,35,0, 34,35,34, 34,35,34 ]
    room.walls  = [ 26,15,0, 0,34,34 ]
    room.steps  = [ 0,0,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
//    room.add_event(new Door(2,0,photobooth))
    room.add_event(new Door(0,-2,80,0,1))
    this.rooms[89] = room
    
    room = new Room(90);
    room.floors = [ 35,34,35, 34,8,34, 35,34,35 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 0,0,0, 0,6,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"nestorine",7))
    room.add_event(new Gate("nephtaline",0,-2,93,0,1))
    this.rooms[90] = room
    
    room = new Room(91);
    room.floors = [ 34,35,35, 35,35,35, 34,35,35 ]
    room.walls  = [ 25,15,25, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nephtaline",true))// requiresPillar:
    room.add_event(new Blocker(1,-1,23))
    room.add_event(new Door(-2,0,93,1,0))
    room.add_event(new Door(0,-2,94,0,1))
    this.rooms[91] = room
    
    room = new Room(92);
    room.floors = [ 28,38,28, 36,7,36, 28,38,28 ]
    room.walls  = [ 31,37,31, 31,37,31 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,1))
    room.add_event(new Door(-2,0,94,1,0))
    this.rooms[92] = room
    
    room = new Room(93);
    room.floors = [ 35,34,35, 35,32,35, 35,35,35 ]
    room.walls  = [ 1,5,1, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Blocker(1,-1,11))
    room.add_event(new Gate("nephtaline",0,2,90,0,-1))
    room.add_event(new Door(-2,0,80,1,0))
    room.add_event(new Door(0,-2,95,0,1))
    this.rooms[93] = room
    
    room = new Room(94);
    room.floors = [ 5,4,3, 10,9,11, 4,10,3 ]
    room.walls  = [ 25,15,25, 3,9,3 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Gate("nemedique",2,0,92,-1,0))
    room.add_event(new Door(-2,0,95,1,0))
    this.rooms[94] = room
    
    room = new Room(95);
    room.floors = [ 34,35,35, 35,35,35, 35,35,0 ]
    room.walls  = [ 25,15,25, 26,15,0 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"),true)
    room.add_event(new Blocker(-1,-1,23))
    room.add_event(new Door(-2,0,80,1,0))
    room.add_event(new Door(0,-2,80,0,1))
    this.rooms[95] = room
    
    room = new Room(96);
    room.floors = [ 35,35,35, 34,7,35, 35,35,35 ] 
    room.walls  = [ 34,35,34, 19,19,19 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,80,0,0))
    room.add_event(new Gate("nestorine",-2,0,7,1,0))
    this.rooms[96] = room
  }
  
  this.createNemedique = function()
  {
    var room = new Room(100);
    
    room = new Room(100);
    room.floors = [ 10,31,10, 10,4,6, 10,5,10 ]
    room.walls  = [ 18,29,18, 18,12,18 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1,"nestorine"),true)
    room.add_event(new Gate("nastazie",0,2,104,0,-1))
    room.add_event(new Door(2,0,101,-1,0))
    room.add_event(new Gate("nemedique",0,-2,9,0,1))
    this.rooms[100] = room
    
    room = new Room(101);
    room.floors = [ 10,5,10, 6,6,6, 10,10,10 ]
    room.walls  = [ 18,13,18, 18,4,18 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Ramen(1,1,"nemedique"),true);
    room.add_event(new Door(0,2,102,0,-1))
    room.add_event(new Gate("necomedre",2,0,103,-1,0))
    room.add_event(new Door(-2,0,100,1,0))
    this.rooms[101] = room
    
    room = new Room(102);
    room.floors = [ 10,5,10, 10,6,10, 10,5,10 ]
    room.walls  = [ 18,18,18, 18,18,18 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Shark(0,1),true)
    //    room.add_event(new Door(2,0,photoBooth))
    room.add_event(new Door(0,-2,101,0,1))
    // room.add_event(new DoorBroken(2,0,110,-1,0))
    
    this.rooms[102] = room
    
    room = new Room(103);
    room.floors = [ 33,2,33, 2,8,2, 33,2,33 ]
    room.walls  = [ 3,31,3, 3,31,3 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"nemedique",9));
    room.add_event(new Gate("necomedre",-2,0,101,1,0))
    this.rooms[103] = room
    
    room = new Room(104); // End Room
    room.floors = [ 41,42,43, 44,45,46, 47,48,49 ]
    room.walls  = [ 39,33,39, 39,33,39 ]
    room.steps  = [ 0,0,0, 0,11,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    // room.add_event(new RedEnd(0,1))
    this.rooms[104] = room
  }
  
  this.createNastazie = function()
  {
    var room = new Room(130);
  
    room = new Room(130);
    room.floors = [ 36,39,36, 39,8,39, 36,39,36 ]
    room.walls  = [ 30,99,100, 99,30,99 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nastazie"))
    room.add_event(new Door(-1,2,131,-1,-1))
    room.add_event(new Gate("nastazie",2,0, 147,-1, 0))
    this.rooms[130] = room
    
    room = new Room(131);
    room.floors = [ 101,10,101, 10,9,10, 101,10,101 ]
    room.walls  = [ 101,30,101, 101,30,101 ]
    room.steps  = [ 0,0,0, 3,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(-1,-2,130,-1,1))
    this.rooms[131] = room
    
    room = new Room(132);
    room.floors = [ 36,39,9, 39,32,10, 36,39,10 ]
    room.walls  = [ 99,99,30, 99,99,19 ]
    room.steps  = [ 3,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nemedique"))
    room.add_event(new Door(1,2,143,1,-1))
    room.add_event(new Door(-2,1,140,1,1))
    this.rooms[132] = room
    
    room = new Room(133);
    room.floors = [ 36,39,10, 39,32,9, 36,39,10 ]
    room.walls  = [ 99,29,99, 99,19,101 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"neomine"))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(-2,0,139,1,0))
    this.rooms[133] = room
    
    room = new Room(134);
    room.floors = [ 36,39,10, 39,32,10, 36,39,9 ]
    room.walls  = [ 12,99,99, 99,99,99 ]
    room.steps  = [ 0,0,3, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nephtaline"))
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(-2,-1,138,1,-1))
    this.rooms[134] = room
    
    room = new Room(135);
    room.floors = [ 36,39,36, 39,31,39, 10,10,9 ]
    room.walls  = [ 99,99,12, 99,99,12 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nemedique"),true)
    room.add_event(new Door(1,2,143,1,-1))
    room.add_event(new Door(2,-1,134,-1,-1))
    this.rooms[135] = room
    
    room = new Room(136);
    room.floors = [ 36,39,36, 39,19,39, 10,9,10 ]
    room.walls  = [ 99,29,99, 99,29,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nastazie"),true)
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(0,-2,131,0,1))
    this.rooms[136] = room
    
    room = new Room(137);
    room.floors = [ 36,39,36, 39,31,39, 9,10,10 ]
    room.walls  = [ 30,99,99, 30,99,99 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,1,132,-1,1))
    this.rooms[137] = room
    
    room = new Room(138);
    room.floors = [ 10,39,36, 10,8,39, 9,39,36 ]
    room.walls  = [ 25,14,25, 99,99,29 ]
    room.steps  = [ 0,0,0, 8,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nemedique"),true)
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,-1,134,-1,-1))
    room.add_event(new Door(-1,-2,137,-1,1))
    this.rooms[138] = room
    
    room = new Room(139);
    room.floors = [ 10,39,36, 9,17,39, 10,39,36 ]
    room.walls  = [ 30,99,100, 99,29,99 ]
    room.steps  = [ 0,8,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"neomine"),true)
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(-2,0,131,1,0))
    room.add_event(new Door(0,-2,136,0,1))
    this.rooms[139] = room
    
    room = new Room(140);
    room.floors = [ 9,39,36, 10,8,39, 10,39,36 ]
    room.walls  = [ 12,99,99, 12,99,99 ]
    room.steps  = [ 0,0,0, 0,0,8 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nephtaline"))
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,1,132,-1,1))
    room.add_event(new Door(1,-2,135,1,1))
    this.rooms[140] = room
    
    room = new Room(141);
    room.floors = [ 9,10,10, 39,33,39, 36,39,36 ]
    room.walls  = [ 99,5,99, 99,99,99 ]
    room.steps  = [ 8,0,0, 8,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Gate("nephtaline",0,2,144,0,-1))
    room.add_event(new Door(-2,1,140,1,1))
    room.add_event(new Door(-1,-2,137,-1,1))
    this.rooms[141] = room
    
    room = new Room(142);
    room.floors = [ 10,9,10, 39,33,39, 36,39,36 ]
    room.walls  = [ 19,5,99, 99,99,99 ]
    room.steps  = [ 0,8,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Gate("neomine",0,2,145,0,-1))
    // room.add_event(new DoorBroken(2,0,112,-1,0))
    room.add_event(new Door(-2,0,139,1,0))
    room.add_event(new Door(0,-2,136,0,1))
    this.rooms[142] = room
    
    room = new Room(143);
    room.floors = [ 10,10,9, 39,33,39, 36,39,36 ]
    room.walls  = [ 99,5,99, 99,99,99 ]
    room.steps  = [ 0,0,3, 0,0,8 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Gate("nemedique",0,2,146,0,-1))
    room.add_event(new Door(-2,-1,138,1,-1))
    room.add_event(new Door(1,-2,135,1,1))
    this.rooms[143] = room
    
    room = new Room(144);
    room.floors = [ 36,39,3, 39,28,39, 36,39,36 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nastazie"),true)
    room.add_event(new Door(0,-2,141,0,1))
    this.rooms[144] = room
    
    room = new Room(145);
    room.floors = [ 36,39,36, 39,28,39, 36,39,36 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nephtaline"),true)
    room.add_event(new Door(0,-2,142,0,1))
    this.rooms[145] = room
    
    room = new Room(146);
    room.floors = [ 36,39,36, 39,28,39, 36,39,36 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"neomine"),true)
    room.add_event(new Door(0,-2,143,0,1))
    this.rooms[146] = room
    
    room = new Room(147);
    room.floors = [ 101,39,101, 1,1,1, 101,39,101 ]
    room.walls  = [ 99,99,99, 99,100,99 ]
    room.steps  = [ 0,8,0, 0,0,0 ]
    room.audio  = "glitch"
    room.theme  = "pillar"
    room.add_event(new Pillar(0,0,"nastazie",4))
    room.add_event(new Door(-2,0,130,1,0))
    this.rooms[147] = room
  }
  
  this.createSecrets = function()
  {
    
    // Hiversaires Room
  }
}