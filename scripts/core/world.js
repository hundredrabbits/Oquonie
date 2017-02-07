function World()
{
  this.rooms = [];
  
  this.install = function()
  {
    this.createLobby();
    // this.createNecomedre();
    // this.createNephtaline();
    // this.createNeomine();
    // this.createNestorine();
    // this.createNemedique();
    // this.createNastazie();
    // this.createSecrets();
  }
  
  this.createLobby = function()
  {
    var room = new Room();
    
    room.floors = [ 0,25,2, 2,8,4, 2,2,2 ];
    room.walls  = [ 0,5,2,2,12,15 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,10));
    // room.add_event(new Pillar(1,-1,pillar_nephtaline));
    // room.add_event(new Door(0,2,"nephtaline",40,-1,-1));
    // room.add_event(new Door(2,0,2,-1,0));
    this.rooms[1] = room;
    
    // room = new Room();
    // room.floors = [ 1,4,1, 1,5,1, 1,1,5 ]
    // room.walls  = [ 16,12,19, 25,25,25 ]
    // room.steps  = [ 0,7,0, 0,0,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Blocker(1,1,24))
    // room.add_event(new Ramen(1,0, isWizard:true))
    // room.add_event(new Map(-1,2, world: "lobby"))
    // room.add_event(new Door(-2,0,1,1,0))
    // room.add_event(new Door(0,2,3,0,-1))
    // all[2] = room
    
    // room = new Room();
    // room.floors = [ 1,23,1, 6,5,1, 1,1,4 ]
    // room.walls  = [ 1,7,1, 1,1,1 ]
    // room.steps  = [ 0,7,0, 0,7,0]
    // room.audio  = .lobby
    // room.theme  = .white
    // room.add_event(new Pillar(-1,1,pillar_neomine))
    // room.add_event(new Owl(1,1, orientation:.r))
    // room.add_event(new Blocker(-1,-1, id:1))
    // room.add_event(new Door(0,2, requirement:.neomine,60, to_x:0,-1))
    // room.add_event(new Door(-2,0,4,1,0))
    // room.add_event(new Door(0,-2,2,0,1))
    // room.add_event(new DoorBroken(2,0,111,-1,0))
    // all[3] = room
    
    // room = new Room();
    // room.floors = [ 1,1,1, 6,5,6, 1,1,1 ]
    // room.walls  = [ 26,14,26,1,12,1 ]
    // room.steps  = [ 0,0,0, 0,7,0 ]
    // room.audio  = .lobby
    // room.theme  = .white
    // room.add_event(new Blocker(1,1, id:9))
    // room.add_event(new Speaker(-1,1, orientation: .r))
    // room.add_event(new Door(0,2,14,0,-1))
    // room.add_event(new Door(2,0,3,-1,0))
    // room.add_event(new Door(0,-2,5,0,1))
    // all[4] = room
    
    // room = new Room();
    // room.floors = [ 9,10,9, 4,5,14, 9,9,6 ]
    // room.walls  = [ 3,14,3, 3,4,3 ]
    // room.steps  = [ 0,7,0, 0,7,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Pillar(1,1,pillar_necomedre))
    // room.add_event(new Blocker(-1,1, id:30))
    // room.add_event(new Door(0,2,4,0,-1))
    // room.add_event(new Door(2,0,necomedre,32, to_x:-1,0))
    // room.add_event(new Door(-2,0,9,1,0))
    // room.add_event(new Door(0,-2,6,0,1))
    // all[5] = room
    
    // room = new Room();
    // room.floors = [ 9,4,9, 10,5,6, 9,10,9 ]
    // room.walls  = [ 3,13,3, 26,13,26 ]
    // room.steps  = [ 0,0,0, 0,0,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Blocker(1,1, id:5))
    // room.add_event(new Shark(1,-1))
    // room.add_event(new Door(0,2,5,0,-1))
    // room.add_event(new Door(2,0,7,-1,0))
    // all[6] = room
    
    // room = new Room();
    // room.floors = [ 9,10,0, 0,5,12, 9,0,4 ]
    // room.walls  = [ 19,0,0, 0,8,0 ]
    // room.steps  = [ 0,7,0, 0,0,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Pillar(-1,-1,pillar_nestorine))
    // room.add_event(new Blocker(0,1, id:11))
    // room.add_event(new Door(2,0,nestorine,96, to_x:-1,0))
    // room.add_event(new Door(-2,0,6,1,0))
    // all[7] = room
    
    // room = new Room();
    // room.floors = [ 10,27,10, 6,4,5, 0,9,10 ]
    // room.walls  = [ 18,9,18, 3,13,3 ]
    // room.steps  = [ 0,0,0, 0,7,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Pillar(-1,1,pillar_nemedique))
    // room.add_event(new Door(0,2,nemedique,100, to_x:0,-1))
    // room.add_event(new Door(2,0,5,-1,0))
    // room.add_event(new Door(0,-2,11,0,1))
    // all[9] = room
  
    // room = new Room();
    // room.floors = [ 4,5,6, 5,33,4, 4,6,5 ]
    // room.walls  = [ 36,13,36, 3,37,3 ]
    // room.steps  = [ 0,0,0, 0,0,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new Door(0,2,9,0,-1))
    // room.add_event(new Tree(0,0))
    // all[11] = room
    
    // room = new Room();
    // room.floors = [ 0,900,0, 5,5,0, 0,0,0 ]
    // room.walls  = [ 0,0,0, 0,0,0 ]
    // room.steps  = [ 0,0,0, 0,7,0 ]
    // room.audio  = "lobby";
    // room.theme  = Theme.white
    // room.add_event(new NoFace(0,1, orientation: Orientation.r))
    // room.add_event(new Door(0,-2,4,0,1))
    // all[14] = room
  }
  
//   func createNecomedre()
//   {
//     var room = new Room();
  
//     room = new Room();
//     room.floors = [ 21,21,21, 21,21,21, 21,21,21 ]
//     room.walls  = [ 20,20,20, 24,21,20 ]
//     room.steps  = [ 0,0,0, 10,0,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(0,0, id:14))
//     room.add_event(new Door(2,1,24,-1,1))
//     room.add_event(new Door(-1,-2,22,1,1))
//     all[21] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,21,21, 21,21,21 ]
//     room.walls  = [ 24,20,20, 20,21,20 ]
//     room.steps  = [ 0,0,0, 0,10,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(1,1, id:15))
//     room.add_event(new Blocker(-1,0, id:16))
//     room.add_event(new Door(-1,2,21,-1,-1))
//     room.add_event(new Door(0,-2,23,0,1))
//     all[22] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,17,21, 21,21,21 ]
//     room.walls  = [ 19,1,19, 19,1,19 ]
//     room.steps  = [ 0,10,0, 0,0,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Wizard(-1,1, spell: Personas.document))
//     room.add_event(new Blocker(1,1, id:15))
//     room.add_event(new Blocker(1,-1, id:15))
//     room.add_event(new Door(-2,0,28,1,0))
//     all[23] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,21,21, 21,21,21 ]
//     room.walls  = [ 20,24,20, 20,24,21 ]
//     room.steps  = [ 10,0,0, 0,10,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(1,1, id:14))
//     room.add_event(new Blocker(-1,-1, id:16))
//     room.add_event(new Door(0,2,23,0,-1))
//     room.add_event(new Door(2,0,27,-1,0))
//     room.add_event(new Door(-2,1,21,1,1))
//     room.add_event(new Door(0,-2,25,0,1))
//     all[24] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,18,21, 21,21,21 ]
//     room.walls  = [ 21,20,20, 20,24,20 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:15))
//     room.add_event(new Blocker(1,1, id:16, orientation: .r))
//     room.add_event(new Wizard(1,-1, spell: Personas.document))
//     room.add_event(new Door(2,0,28,-1,0))
//     all[25] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,21,21, 21,21,21 ]
//     room.walls  = [ 20,24,20, 20,20,21 ]
//     room.steps  = [ 0,10,0, 0,0,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:14))
//     room.add_event(new Blocker(-1,0, id:16))
//     room.add_event(new Door(0,2,25,0,-1))
//     room.add_event(new Door(-2,0,23,1,0))
//     all[26] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,19,21, 21,21,21 ]
//     room.walls  = [ 19,19,19, 19,21,20 ]
//     room.steps  = [ 0,0,0, 0,10,0 ]
//     room.audio  = .office
//     room.theme  = .black
//     room.add_event(new Blocker(-1,1, id:15))
//     room.add_event(new Speaker(0,1, orientation: .r, special: true))
//     room.add_event(new Blocker(1,1, id:15))
//     room.add_event(new Blocker(1,-1, id:16, orientation: .r))
//     room.add_event(new Door(0,-2,28,0,1))
//     all[27] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,21,21, 21,21,21 ]
//     room.walls  = [ 20,24,20, 20,24,21 ]
//     room.steps  = [ 0,10,0, 0,10,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:14))
//     room.add_event(new Wizard(1,1, spell: Personas.document))
//     room.add_event(new Blocker(-1,-1, id:16))
//     room.add_event(new Door(0,2,27,0,-1))
//     room.add_event(new Door(2,0,23,-1,0))
//     room.add_event(new Door(-2,0,25,1,0))
//     room.add_event(new Door(0,-2,29,0,1))
//     all[28] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,8,21, 21,21,21 ]
//     room.walls  = [ 20,24,20, 20,24,21 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = .office
//     room.theme  = .white
//     room.add_event(new Blocker(-1,1, id:15))
//     room.add_event(new Blocker(1,-1, id:16))
//     room.add_event(new Door(0,2,28,0,-1))
//     room.add_event(new Door(2,0, requirement: Personas.document,30, to_x:-1,0))
//     all[29] = room
    
//     room = new Room();
//     room.floors = [ 21,21,21, 21,1,1, 21,21,1 ]
//     room.walls  = [ 20,20,20, 20,21,20 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = .office
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:16))
//     room.add_event(new Blocker(1,-1, id:1))
//     room.add_event(new Boss(1,0, orientation: .r))
// //    room.add_event(new Door(0,2,31,0,-1))
// //    room.add_event(new Door(-2,0,29, to_x:1,0))
//     all[30] = room
    
//     room = new Room();
//     room.floors = [ 4,5,6, 4,5,4, 5,5,6 ]
//     room.walls  = [ 26,26,26, 26,40,15 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.black
//     room.add_event(new Red(0,1))
// //    room.add_event(new Door(2,0, requirement: Personas.necomedre))
//     all[31] = room
    
//     room = new Room();
//     room.floors = [ 33,33,33, 6,4,5, 33,33,14 ]
//     room.walls  = [ 36,16,36, 19,12,19 ]
//     room.steps  = [ 0,5,0, 0,6,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:23))
//     room.add_event(new Owl(1,1))
//     room.add_event(new Map(0,2, world: "necomedre"))
//     room.add_event(new Door(2,0,33,-1,0))
//     room.add_event(new Door(-2,0, requirement: Personas.necomedre,5, to_x:1,0))
//     room.add_event(new Door(0,-2,35,0,1))
//     all[32] = room
    
//     room = new Room();
//     room.floors = [ 33,33,33, 33,4,6, 33,4,5 ]
//     room.walls  = [ 36,36,26, 19,12,15 ]
//     room.steps  = [ 0,7,0, 0,0,6 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Wizard(0,1, spell: Personas.nephtaline, orientation:Orientation.r))
//     room.add_event(new Door(2,0,34,-1,0))
//     room.add_event(new Door(-2,0,32,1,0))
//     room.add_event(new Door(1,-2,36,1,1))
//     all[33] = room
    
//     room = new Room();
//     room.floors = [ 33,35,35, 35,6,5, 33,35,4 ]
//     room.walls  = [ 36,25,8, 36,12,26 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Wizard(0,1, spell: Personas.nestorine, requiresPillar: true, orientation:Orientation.r))
//     room.add_event(new Blocker(-1,1, id:11))
//     room.add_event(new Door(1,2, requirement: Personas.nestorine,120, to_x:0,-1))
//     room.add_event(new Door(2,0,35,-1,0))
//     room.add_event(new Door(-2,0,33,1,0))
//     all[34] = room
    
//     room = new Room();
//     room.floors = [ 33,33,33, 33,33,33, 33,33,33 ]
//     room.walls  = [ 26,12,26, 19,12,19 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new ramen_necomedre)
//     room.add_event(new Speaker(-1,1, orientation: Orientation.r))
//     room.add_event(new Door(0,2,32,0,-1))
//     room.add_event(new Door(2,0,36,-1,0))
//     room.add_event(new Door(-2,0,34,1,0))
//     all[35] = room
    
//     room = new Room();
//     room.floors = [ 33,0,4, 0,0,4, 33,4,33 ]
//     room.walls  = [ 26,0,12, 19,12,19 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Wizard(-1,1, spell: Personas.nephtaline, orientation:Orientation.r))
//     room.add_event(new Red(1,-1))
//     room.add_event(new Door(1,2,33,1,-1))
//     room.add_event(new Door(2,0,37,-1,0))
//     room.add_event(new Door(-2,0,35,1,0))
//     all[36] = room
    
//     room = new Room();
//     room.floors = [ 33,4,4, 4,33,4, 33,4,33 ]
//     room.walls  = [ 36,26,26, 26,12,26 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Wizard(0,1, spell: Personas.nemedique, requiresPillar: true, orientation:Orientation.r))
//     room.add_event(new Blocker(0,-1, id:23))
// //    room.add_event(new Door(-1,2, requirement: Personas.photobooth))
//     room.add_event(new Door(2,0,38,-1,0))
//     room.add_event(new Door(-2,0,36,1,0))
//     all[37] = room
    
//     room = new Room();
//     room.floors = [ 9,33,33, 33,33,13, 9,33,4 ]
//     room.walls  = [ 26,26,26, 18,5,18 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.necomedre
//     room.theme  = Theme.white
//     room.add_event(new Wizard(0,1, spell: Personas.nephtaline, orientation:Orientation.r))
//     room.add_event(new Blocker(-1,-1, id:5))
//     room.add_event(new Door(2,0, requirement: Personas.nephtaline,39, to_x:-1,0))
//     room.add_event(new Door(-2,0,37,1,0))
//     all[38] = room
    
//     room = new Room();
//     room.floors = [ 33,33,4, 33,7,33, 5,33,18 ]
//     room.walls  = [ 26,19,36, 36,19,19 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.white
//     room.add_event(new Teleport(0,0,0,0))
//     room.add_event(new Door(-2,0,38,1,0))
//     all[39] = room
    
//     room = new Room();
//     room.floors = [ 4,9,5, 9,8,9, 5,6,9 ]
//     room.walls  = [ 36,37,36, 36,37,36 ]
//     room.steps  = [ 0,0,0, 0,6,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_necomedre)
//     room.add_event(new Door(0,-2,34,1,1))
//     all[120] = room
  
//   }
  
//   func createNephtaline()
//   {
//     var room = new Room();
  
//     room = new Room();
//     room.floors = [ 18,6,4, 0,0,30, 25,32,5 ]
//     room.walls  = [ 0,0,0, 12,0,3 ]
//     room.steps  = [ 0,0,0, 6,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Red(1,-1))
//     room.add_event(new Door(2,1,41,-1,1))
//     room.add_event(new Door(-1,-2, requirement: .nephtaline,1, to_x:0,1))
//     all[40] = room
    
//     room = new Room();
//     room.floors = [ 4,5,19, 30,0,6, 32,5,0 ]
//     room.walls  = [ 0,0,0, 0,0,0 ]
//     room.steps  = [ 7,0,0, 0,0,7 ]
//     room.audio  = .nephtaline
//     room.theme  = .white
//     room.add_event(new Door(-2,1,40,1,1))
//     room.add_event(new Door(1,-2,42,1,1))
//     all[41] = room
    
//     room = new Room();
//     room.floors = [ 32,0,5, 6,0,4, 4,17,30 ]
//     room.walls  = [ 3,0,13, 0,0,0 ]
//     room.steps  = [ 0,0,7, 0,0,0 ]
//     room.audio  = .nephtaline
//     room.theme  = .white
//     room.add_event(new Wizard(-1,1, spell: .nemedique, requiresPillar: true, orientation: .r))
//     room.add_event(new Door(1,2,41,1,-1))
//     room.add_event(new Door(-2,-1,43,1,-1))
//     all[42] = room
    
//     room = new Room();
//     room.floors = [ 4,30,32, 4,0,0, 16,4,4 ]
//     room.walls  = [ 13,0,3, 3,0,13 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Blocker(1,1, id:10))
//     room.add_event(new Door(-1,2,44,-1,-1))
//     room.add_event(new Door(2,-1,42,-1,-1))
//     all[43] = room
    
//     room = new Room();
//     room.floors = [ 18,4,4, 0,0,30, 4,32,4 ]
//     room.walls  = [ 0,0,0, 12,0,0 ]
//     room.steps  = [ 0,0,0, 7,0,0 ]
//     room.audio  = .nephtaline
//     room.theme  = .white
//     room.add_event(new Wizard(1,-1, spell: .neomine))
//     room.add_event(new Door(2,1,45,-1,1))
//     room.add_event(new Door(-1,-2,43,-1,1))
//     all[44] = room
    
//     room = new Room();
//     room.floors = [ 4,4,17, 0,0,4, 32,4,30 ]
//     room.walls  = [ 0,0,0, 0,0,0 ]
//     room.steps  = [ 7,0,0, 0,0,7 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,-1, id:7))
//     room.add_event(new Door(-2,1,46,1,1))
//     room.add_event(new Door(1,-2,42,1,1))
// //    room.add_event(new Wizard(1,-2, spell: catDoorFork))
//     all[45] = room
    
//     room = new Room();
//     room.floors = [ 3,5,6, 3,4,3, 3,3,17 ]
//     room.walls  = [ 18,18,18, 13,18,18 ]
//     room.steps  = [ 0,7,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:13))
//     room.add_event(new Wizard(1,0, spell: Personas.neomine))
// //    room.add_event(new Door(0,2, requirement: Personas.photobooth))
//     room.add_event(new Door(2,1,41,-1,1))
//     room.add_event(new Door(-2,0,47,1,0))
//     room.add_event(new Door(0,-2,51,0,1))
//     all[46] = room
    
//     room = new Room();
//     room.floors = [ 0,0,4, 5,10,5, 0,0,0 ]
//     room.walls  = [ 0,0,0, 3,13,3 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,1, spell: Personas.necomedre, requiresPillar: true, orientation: .r))
//     room.add_event(new Door(2,0,46,-1,0))
//     room.add_event(new Door(0,-2,48,0,1))
//     all[47] = room
    
//     room = new Room();
//     room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
//     room.walls  = [ 0,13,0, 0,13,0 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Door(0,2,47,0,-1))
//     room.add_event(new Door(2,0,49,-1,0))
//     all[48] = room
    
//     room = new Room();
//     room.floors = [ 0,5,0, 0,10,0, 0,0,5 ]
//     room.walls  = [ 0,13,0, 0,0,0 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Door(0,2,50,0,-1))
//     room.add_event(new Door(-2,0,48,1,0))
//     all[49] = room
    
//     room = new Room();
//     room.floors = [ 3,32,3, 32,31,32, 3,3,32 ]
//     room.walls  = [ 3,9,3, 2,16,2 ]
//     room.steps  = [ 0,7,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Owl(1,1))
//     room.add_event(new Blocker(1,-1, id:21))
//     room.add_event(new Door(0,2, requirement: Personas.nemedique,121, to_x:0,-1))
//     room.add_event(new Map(2,0, world: "nephtaline"))
//     room.add_event(new Door(-2,0,47,1,0))
//     room.add_event(new Door(0,-2,55,0,1))
//     all[50] = room
    
//     room = new Room();
//     room.floors = [ 0,5,5, 0,10,5, 0,0,5 ]
//     room.walls  = [ 3,13,3, 0,0,0 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Speaker(1,1))
//     room.add_event(new Door(0,2,50,0,-1))
//     room.add_event(new Door(-2,0,48,1,0))
//     all[51] = room
    
//     room = new Room();
//     room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
//     room.walls  = [ 0,13,0, 0,13,0 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Door(0,2,47,0,-1))
//     room.add_event(new Door(2,0,49,-1,0))
//     all[52] = room
    
//     room = new Room();
//     room.floors = [ 0,0,0, 5,10,5, 0,0,0 ]
//     room.walls  = [ 0,0,0, 3,13,3 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Door(2,0,41,-1,0))
//     room.add_event(new Door(0,-2,48,0,1))
//     all[53] = room
    
//     room = new Room();
//     room.floors = [ 3,4,3, 5,10,3, 3,3,4 ]
//     room.walls  = [ 3,8,3, 3,3,3 ]
//     room.steps  = [ 0,7,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
// //    room.add_event(new Wizard(1,1, spell: null))
// //    > gateNestorine
// //    10 > 8|gateNestorine
//     room.add_event(new Door(-2,0,47,1,0))
//     room.add_event(new Door(0,-2,51,0,1))
//     all[54] = room
    
//     room = new Room();
//     room.floors = [ 0,5,0, 0,10,0, 0,0,5 ]
//     room.walls  = [ 0,13,0, 0,0,0 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = .nephtaline
//     room.theme  = .white
//     room.add_event(new Door(0,2,50,0,-1))
//     room.add_event(new Door(-2,0,56,1,0))
//     all[55] = room
    
//     room = new Room();
//     room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
//     room.walls  = [ 0,13,0, 0,13,0 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Door(0,2,57,0,-1))
//     room.add_event(new Door(2,0,55,-1,0))
//     all[56] = room
    
//     room = new Room();
//     room.floors = [ 0,5,5, 5,10,5, 0,0,0 ]
//     room.walls  = [ 0,0,0, 3,13,3 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new ramen_nephtaline)
//     room.add_event(new Door(2,0,58,-1,0))
//     room.add_event(new Door(0,-2,56,0,1))
//     all[57] = room
    
//     room = new Room();
//     room.floors = [ 31,4,31, 31,5,31, 31,31,4 ]
//     room.walls  = [ 18,7,18, 18,18,18 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.nephtaline
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,0, spell: Personas.neomine))
//     room.add_event(new Door(0,2, requirement: Personas.neomine,59, to_x:0,-1))
//     room.add_event(new Door(-2,0,47,1,0))
//     all[58] = room
    
//     room = new Room();
//     room.floors = [ 32,29,32, 5,7,29, 32,32,29 ]
//     room.walls  = [ 3,2,3, 3,2,3 ]
//     room.steps  = [ 0,0,0, 0,4,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.white
//     room.add_event(new Teleport(0,0,0,0))
//     room.add_event(new Door(0,-2, requirement: Personas.neomine,58, to_x:0,1))
//     all[59] = room
    
//     room = new Room();
//     room.floors = [ 97,31,97, 31,8,31, 98,98,31 ]
//     room.walls  = [ 25,18,25, 25,18,25 ]
//     room.steps  = [ 0,0,0, 0,3,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_nephtaline)
//     room.add_event(new Door(0,-2, requirement: Personas.nemedique,50, to_x:0,1))
//     all[121] = room
//   }
  
//   func createNeomine()
//   {
//     var room = new Room();
  
//     room = new Room();
//     room.floors = [ 1,4,18, 23,4,1, 1,1,1 ]
//     room.walls  = [ 33,31,33, 30,16,14 ]
//     room.steps  = [ 0,0,0, 0,4,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Blocker(0,1, id:13))
//     room.add_event(new Door(2,1,62,-1,1))
//     room.add_event(new Map(2,0, world: "neomine"))
//     room.add_event(new Door(0,-2, requirement: Personas.neomine,3, to_x:0,1))
//     room.add_event(new Door(2,-1,61, to_x:-1,-1))
//     all[60] = room
    
//     room = new Room();
//     room.floors = [ 1,1,1, 1,1,38, 1,1,38 ]
//     room.walls  = [ 31,30,31, 33,31,33 ]
//     room.steps  = [ 0,0,3, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Blocker(-1,1, id:19))
//     room.add_event(new Wizard(0,1, spell: Personas.nestorine, orientation:.r))
//     room.add_event(new Blocker(1,1, id:19))
//     room.add_event(new Door(-2,-1,60,1,-1))
//     all[61] = room
    
//     room = new Room();
//     room.floors = [ 4,5,6, 4,6,33, 6,5,5 ]
//     room.walls  = [ 32,31,32, 36,4,36 ]
//     room.steps  = [ 3,0,3, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: .necomedre, requiresPillar:true))
//     room.add_event(new Blocker(1,-1, id:23))
//     room.add_event(new Door(2,0, requirement: .necomedre,71, to_x:-1,0))
//     room.add_event(new Door(-2,1,60,1,1))
//     room.add_event(new Door(-2,-1,63,1,-1))
//     all[62] = room
    
//     room = new Room();
//     room.floors = [ 10,10,10, 10,0,10, 10,9,10 ]
//     room.walls  = [ 32,33,32, 14,30,14 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new ramen_neomine)
//     room.add_event(new Blocker(0,0, id:9))
//     room.add_event(new Door(2,1,66,-1,1))
//     room.add_event(new Door(2,0,64,-1,0))
//     room.add_event(new Door(2,-1,62,-1,-1))
//     all[63] = room
    
//     room = new Room();
//     room.floors = [ 39,1,39, 36,32,36, 39,1,36 ]
//     room.walls  = [ 33,33,33, 31,31,15 ]
//     room.steps  = [ 3,3,3, 0,0,0 ]
//     room.audio  = .neomine
//     room.theme  = .black
//     room.add_event(new Blocker(1,1, id:21))
//     room.add_event(new Wizard(1,0, spell: .nephtaline, requiresPillar:true))
//     room.add_event(new Door(-2,1,68,1,1))
//     room.add_event(new Door(-2,0,63,1,0))
//     room.add_event(new Door(-2,-1,65,1,-1))
//     all[64] = room
    
//     room = new Room();
//     room.floors = [ 0,33,1, 33,33,1, 1,33,1 ]
//     room.walls  = [ 0,3,3, 3,15,14 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Wizard(0,1, spell: Personas.nestorine, orientation: .r))
//     room.add_event(new Blocker(1,0, id:1))
//     room.add_event(new Door(2,-1,64,-1,-1))
//     all[65] = room
    
//     room = new Room();
//     room.floors = [ 39,36,39, 36,28,29, 39,39,36 ]
//     room.walls  = [ 31,31,31, 33,32,33 ]
//     room.steps  = [ 3,3,3, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Blocker(1,1, id:13))
//     room.add_event(new Owl(1,0))
// //    room.add_event(new Door(0,2, requirement: Personas.photoBooth))
//     room.add_event(new Door(-2,1,63,1,1))
//     room.add_event(new Door(-2,0,67,1,0))
//     room.add_event(new Door(-2,-1,68,1,-1))
//     all[66] = room
    
//     room = new Room();
//     room.floors = [ 1,36,1, 1,39,36, 1,1,1 ]
//     room.walls  = [ 25,25,25, 31,30,31 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Wizard(0,1, spell: Personas.nestorine, orientation: .r))
//     room.add_event(new Door(2,0,66,-1,0))
//     all[67] = room
    
//     room = new Room();
//     room.floors = [ 38,10,38, 6,9,10, 5,10,4 ]
//     room.walls  = [ 35,38,20, 30,30,30 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = .neomine
//     room.theme  = .black
//     room.add_event(new Red(-1,1, orientation: .r))
//     room.add_event(new DoorBroken(0,2,113,0,-1))
//     room.add_event(new Door(2,1,64,-1,1))
//     room.add_event(new Door(2,0,69,-1,0))
//     room.add_event(new Door(2,-1,66,-1,-1))
//     all[68] = room
    
//     room = new Room();
//     room.floors = [ 35,35,34, 35,35,12, 35,34,35 ]
//     room.walls  = [ 35,34,35, 34,8,34 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Speaker(1,1))
//     room.add_event(new Door(2,0, requirement: Personas.nestorine,70, to_x:-1,0))
//     room.add_event(new Door(-2,0,68,1,0))
//     all[69] = room
    
//     room = new Room();
//     room.floors = [ 39,40,39, 40,7,40, 39,39,40 ]
//     room.walls  = [ 29,29,29, 29,29,29 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.black
//     room.add_event(new Teleport(0,0,0,0))
//     room.add_event(new Door(-1,2,70,-1,-1))
//     room.add_event(new Door(0,2,70,0,-1))
//     room.add_event(new Door(1,2,70,1,-1))
//     room.add_event(new Door(2,1,70,-1,1))
//     room.add_event(new Door(2,0,70,-1,0))
//     room.add_event(new Door(2,-1,70,-1,1))
//     room.add_event(new Door(-2,0, requirement: Personas.nestorine,69, to_x:1,0))
//     all[70] = room
    
//     room = new Room();
//     room.floors = [ 1,29,1, 29,8,29, 1,1,29 ]
//     room.walls  = [ 18,17,18, 18,17,18 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_neomine)
//     room.add_event(new Door(-2,0, requirement: Personas.necomedre,62, to_x:1,0))
//     all[71] = room
//   }
  
//   func createNestorine()
//   {
//     var room = new Room();
  
//     room = new Room();
//     room.floors = [ 35,35,7, 34,8,35, 35,35,34 ]
//     room.walls  = [ 35,15,35, 34,15,34 ]
//     room.steps  = [ 0,7,0, 0,7,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,1, id:23))
//     room.add_event(new Teleport(1,1,destination:7,0,0))
//     room.add_event(new Door(-2,0,81,1,0))
//     room.add_event(new Door(0,-2,82,0,1))
//     all[80] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 35,35,35, 34,34,35 ]
//     room.walls  = [ 34,35,34, 25,15,25 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Door(-2,0,83,1,0))
//     room.add_event(new Door(0,-2,84,0,1))
//     all[81] = room
    
//     room = new Room();
//     room.floors = [ 34,35,34, 35,35,34, 34,34,35 ]
//     room.walls  = [ 25,15,25, 35,34,35 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,-1, id:11))
//     room.add_event(new Door(-2,0,84,1,0))
//     room.add_event(new Door(0,-2,85,0,1))
//     all[82] = room
    
//     room = new Room();
//     room.floors = [ 34,34,34, 35,35,35, 35,0,35 ]
//     room.walls  = [ 35,34,35, 26,15,26 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Blocker(-1,-1, id:23))
//     room.add_event(new Door(-2,0,86,1,0))
//     room.add_event(new Door(0,-2,87,0,1))
//     all[83] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 35,35,35, 35,34,35 ]
//     room.walls  = [ 35,15,34, 34,15,35 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Owl(1,1))
//     room.add_event(new Blocker(-1,-1, id:11))
//     room.add_event(new Door(-2,0,87,1,0))
//     room.add_event(new Door(0,-2,88,0,1))
//     all[84] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 35,35,35, 0,34,35 ]
//     room.walls  = [ 26,15,26, 34,16,34 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Red(1,0))
//     room.add_event(new Map(2,0, world: "nestorine"))
//     room.add_event(new Door(-2,0,88,1,0))
//     room.add_event(new Door(0,-2,89,0,1))
//     all[85] = room
    
//     room = new Room();
//     room.floors = [ 34,10,34, 0,35,35, 34,34,35 ]
//     room.walls  = [ 34,34,34, 25,15,25 ]
//     room.steps  = [ 0,1,0, 0,0,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Door(-2,0,80,1,0))
//     all[86] = room
    
//     room = new Room();
//     room.floors = [ 35,35,35, 35,35,35, 35,0,35 ]
//     room.walls  = [ 25,15,25, 26,15,26 ]
//     room.steps  = [ 0,0,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Speaker(1,1))
//     room.add_event(new Door(0,-2,91,0,1))
//     all[87] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 34,35,35, 34,0,35 ]
//     room.walls  = [ 36,15,36, 36,15,0 ]
//     room.steps  = [ 0,1,0, 0,0,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new ramen_nestorine)
//     room.add_event(new Door(-2,0,91,1,0))
//     all[88] = room
    
//     room = new Room();
//     room.floors = [ 34,35,0, 35,35,34, 34,34,34 ]
//     room.walls  = [ 26,15,0, 0,34,34 ]
//     room.steps  = [ 0,0,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
// //    room.add_event(new Door(2,0, requirement: Personas.photobooth))
//     room.add_event(new Door(0,-2,80,0,1))
//     all[89] = room
    
//     room = new Room();
//     room.floors = [ 35,34,35, 34,8,34, 35,35,34 ]
//     room.walls  = [ 0,0,0, 0,0,0 ]
//     room.steps  = [ 0,0,0, 0,6,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_nestorine)
//     room.add_event(new Door(0,-2, requirement: Personas.nephtaline,93, to_x:0,1))
//     all[90] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 35,35,35, 34,35,35 ]
//     room.walls  = [ 25,15,25, 25,15,25 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,1, spell: Personas.nephtaline, requiresPillar:true))
//     room.add_event(new Blocker(-1,-1, id:23))
//     room.add_event(new Door(-2,0,93,1,0))
//     room.add_event(new Door(0,-2,94,0,1))
//     all[91] = room
    
//     room = new Room();
//     room.floors = [ 28,38,28, 38,7,36, 28,28,36 ]
//     room.walls  = [ 31,37,31, 31,37,31 ]
//     room.steps  = [ 0,1,0, 0,0,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.white
//     room.add_event(new Teleport(0,0,0,0))
//     room.add_event(new Door(-2,0,94,1,0))
//     all[92] = room
    
//     room = new Room();
//     room.floors = [ 35,34,35, 35,32,35, 35,35,35 ]
//     room.walls  = [ 1,5,1, 25,15,25 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,1, spell: Personas.nemedique, orientation: .r))
//     room.add_event(new Blocker(-1,1, id:11))
//     room.add_event(new Door(0,2, requirement: Personas.nephtaline,90, to_x:0,-1))
//     room.add_event(new Door(-2,0,80,1,0))
//     room.add_event(new Door(0,-2,95,0,1))
//     all[93] = room
    
//     room = new Room();
//     room.floors = [ 5,4,3, 10,9,11, 4,3,10 ]
//     room.walls  = [ 25,15,25, 3,9,3 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,1, spell: Personas.nemedique))
//     room.add_event(new Door(2,0, requirement: Personas.nemedique,92, to_x:-1,0))
//     room.add_event(new Door(-2,0,95,1,0))
//     all[94] = room
    
//     room = new Room();
//     room.floors = [ 34,35,35, 35,35,35, 35,0,35 ]
//     room.walls  = [ 25,15,25, 26,15,0 ]
//     room.steps  = [ 0,1,0, 0,1,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Wizard(1,1, spell: Personas.nemedique))
//     room.add_event(new Blocker(-1,-1, id:23))
//     room.add_event(new Door(-2,0,80,1,0))
//     room.add_event(new Door(0,-2,80,0,1))
//     all[95] = room
    
//     room = new Room();
//     room.floors = [ 35,35,35, 35,7,35, 35,35,34 ]
//     room.walls  = [ 34,35,34, 19,19,19 ]
//     room.steps  = [ 0,1,0, 0,0,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.white
//     room.add_event(new Teleport(0,0, destination: 80,0,0))
//     room.add_event(new Door(-2,0, requirement: .nestorine,7, to_x:1,0))
//     all[96] = room
    
//     room = new Room();
//     room.floors = [ 35,35,35, 35,7,35, 35,35,35 ]
//     room.walls  = [ 25,15,25, 0,0,0 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nestorine
//     room.theme  = Theme.white
//     room.add_event(new Door(0,2,94,0,-1))
//     all[97] = room
//   }
  
//   func createNemedique()
//   {
//     var room = new Room();
    
//     room = new Room();
//     room.floors = [ 10,10,10, 5,4,6, 10,10,10 ]
//     room.walls  = [ 18,29,18, 18,12,18 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.nemedique
//     room.theme  = Theme.white
//     room.add_event(new Wizard(-1,1, spell: Personas.nestorine, requiresPillar:true, orientation: .r))
//     room.add_event(new DoorRed(0,2,104,0,-1))
//     room.add_event(new Door(2,0,101,-1,0))
//     room.add_event(new Door(0,-2, requirement: Personas.nemedique,9, to_x:0,1))
//     all[100] = room
    
//     room = new Room();
//     room.floors = [ 10,5,10, 10,6,6, 10,10,6 ]
//     room.walls  = [ 18,13,18, 18,4,18 ]
//     room.steps  = [ 0,7,0, 0,0,0 ]
//     room.audio  = Soundtrack.nemedique
//     room.theme  = Theme.white
//     room.add_event(new Speaker(1,1))
//     room.add_event(new Door(0,2,102,0,-1))
//     room.add_event(new Door(2,0, requirement: Personas.necomedre,103, to_x:-1,0))
//     room.add_event(new Door(-2,0,100,1,0))
//     all[101] = room
    
//     room = new Room();
//     room.floors = [ 10,5,10, 5,5,10, 10,10,10 ]
//     room.walls  = [ 18,18,18, 18,18,18 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.nemedique
//     room.theme  = Theme.white
//     room.add_event(new Shark(0,1, orientation:.r))
//     //    room.add_event(new Door(2,0, requirement: Personas.photoBooth))
//     room.add_event(new Door(0,-2,101,0,1))
//     room.add_event(new DoorBroken(2,0,110,-1,0))
    
//     all[102] = room
    
//     room = new Room();
//     room.floors = [ 33,2,33, 2,8,2, 33,33,2 ]
//     room.walls  = [ 3,31,3, 3,31,3 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.pillar
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_nemedique)
//     room.add_event(new Door(-2,0, requirement: Personas.necomedre,101, to_x:1,0))
//     all[103] = room
    
//     room = new Room();
//     room.floors = [ 41,42,43, 48,45,46, 47,49,44 ]
//     room.walls  = [ 39,33,39, 39,33,39 ]
//     room.steps  = [ 0,0,0, 0,11,0 ]
//     room.audio  = Soundtrack.nepturne
//     room.theme  = Theme.black
//     room.add_event(new RedEnd(0,1, orientation: .r))
//     all[104] = room
    
//     room = new Room();
//     room.floors = [ 3,3,3, 3,7,3, 3,3,3 ]
//     room.walls  = [ 0,0,0, 0,0,0 ]
//     room.steps  = [ 0,6,0, 0,0,0 ]
//     room.audio  = Soundtrack.warp
//     room.theme  = Theme.white
//     room.add_event(new Teleport(0,0,0,0))
//     room.add_event(new Door(-2,0,101,1,0))
//     all[105] = room
    
//     room = new Room();
//     room.floors = [ 40,40,40, 40,8,40, 40,40,40 ]
//     room.walls  = [ 29,29,29, 29,29,29 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nepturne
//     room.theme  = Theme.black
//     room.add_event(new Door(-1,2,107,-1,-1))
//     room.add_event(new Door(0,2,107,0,-1))
//     room.add_event(new Door(1,2,107,1,-1))
//     room.add_event(new Door(2,1,107,-1,1))
//     room.add_event(new Door(2,0,107,-1,0))
//     room.add_event(new Door(2,-1,107,-1,-1))
//     all[106] = room
    
//     room = new Room();
//     room.floors = [ 40,40,40, 40,40,40, 40,40,40 ]
//     room.walls  = [ 29,29,29, 29,29,29 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nepturne
//     room.theme  = Theme.black
//     room.add_event(new Credit(0,0, who:"rekka"))
//     room.add_event(new Door(-1,2,108,-1,-1))
//     room.add_event(new Door(0,2,108,0,-1))
//     room.add_event(new Door(1,2,108,1,-1))
//     room.add_event(new Door(2,1,108,-1,1))
//     room.add_event(new Door(2,0,108,-1,0))
//     room.add_event(new Door(2,-1,108,-1,-1))
//     all[107] = room
    
//     room = new Room();
//     room.floors = [ 40,40,40, 40,40,40, 40,40,40 ]
//     room.walls  = [ 29,29,29, 29,29,29 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nepturne
//     room.theme  = Theme.black
//     room.add_event(new Credit(0,0, who:"devine"))
//     room.add_event(new Door(-1,2,11,-1,-1))
//     room.add_event(new Door(0,2,11,0,-1))
//     room.add_event(new Door(1,2,11,1,-1))
//     room.add_event(new Door(2,1,11,-1,1))
//     room.add_event(new Door(2,0,11,-1,0))
//     room.add_event(new Door(2,-1,11,-1,-1))
//     all[108] = room
    
//     room = new Room();
//     room.floors = [ 4,5,6, 5,2,6, 6,5,4 ]
//     room.walls  = [ 13,13,13, 13,13,13 ]
//     room.steps  = [ 0,0,0, 0,6,0 ]
//     room.audio  = Soundtrack.nepturne
//     room.theme  = Theme.black
//     room.add_event(new Wizard(0,0, spell: Personas.catfishbird, orientation: .r))
//     room.add_event(new Door(0,-2,100,0,1))
//     all[109] = room
//   }
  
//   func createNastazie()
//   {
//     var room = new Room();
  
//     room = new Room();
//     room.floors = [ 36,39,36, 39,8,39, 36,36,39 ]
//     room.walls  = [ 30,99,100, 99,30,99 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(0,1, spell: Personas.nastazie, orientation: .r))
//     room.add_event(new Door(-1,2,131,-1,-1))
//     room.add_event(new Door(2,0, requirement: Personas.nastazie, 147, to_x:-1, 0))
//     all[130] = room
    
//     room = new Room();
//     room.floors = [ 101,10,101, 10,9,10, 101,101,10 ]
//     room.walls  = [ 101,30,101, 101,30,101 ]
//     room.steps  = [ 0,0,0, 3,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Blocker(1,1, id:30))
//     room.add_event(new Door(0,2,142,0,-1))
//     room.add_event(new Door(2,0,133,-1,0))
//     room.add_event(new Door(-1,-2,130,-1,1))
//     all[131] = room
    
//     room = new Room();
//     room.floors = [ 36,39,9, 39,32,10, 36,10,39 ]
//     room.walls  = [ 99,99,30, 99,99,19 ]
//     room.steps  = [ 3,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.nemedique))
//     room.add_event(new Door(1,2,143,1,-1))
//     room.add_event(new Door(-2,1,140,1,1))
//     all[132] = room
    
//     room = new Room();
//     room.floors = [ 36,39,10, 39,32,9, 36,10,39 ]
//     room.walls  = [ 99,29,99, 99,19,101 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.neomine))
//     room.add_event(new Door(0,2,142,0,-1))
//     room.add_event(new Door(-2,0,139,1,0))
//     all[133] = room
    
//     room = new Room();
//     room.floors = [ 36,39,10, 39,32,10, 36,9,39 ]
//     room.walls  = [ 12,99,99, 99,99,99 ]
//     room.steps  = [ 0,0,3, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.nephtaline))
//     room.add_event(new Door(-1,2,141,-1,-1))
//     room.add_event(new Door(-2,-1,138,1,-1))
//     all[134] = room
    
//     room = new Room();
//     room.floors = [ 36,39,36, 10,31,39, 10,9,39 ]
//     room.walls  = [ 99,99,12, 99,99,12 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(0,1, spell: Personas.nemedique, orientation: .r))
//     room.add_event(new Door(1,2,143,1,-1))
//     room.add_event(new Door(2,-1,134,-1,-1))
//     all[135] = room
    
//     room = new Room();
//     room.floors = [ 36,39,36, 9,19,39, 10,10,39 ]
//     room.walls  = [ 99,29,99, 99,29,99 ]
//     room.steps  = [ 0,0,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.nastazie))
//     room.add_event(new Door(0,2,142,0,-1))
//     room.add_event(new Door(2,0,133,-1,0))
//     room.add_event(new Door(0,-2,131,0,1))
//     all[136] = room
    
//     room = new Room();
//     room.floors = [ 36,39,36, 10,31,39, 9,10,39 ]
//     room.walls  = [ 30,99,99, 30,99,99 ]
//     room.steps  = [ 0,0,0, 0,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Door(-1,2,141,-1,-1))
//     room.add_event(new Door(2,1,132,-1,1))
//     all[137] = room
    
//     room = new Room();
//     room.floors = [ 10,39,36, 39,8,39, 9,36,10 ]
//     room.walls  = [ 25,14,25, 99,99,29 ]
//     room.steps  = [ 0,0,0, 8,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.nemedique))
//     room.add_event(new Door(0,2,142,0,-1))
//     room.add_event(new Door(2,-1,134,-1,-1))
//     room.add_event(new Door(-1,-2,137,-1,1))
//     all[138] = room
    
//     room = new Room();
//     room.floors = [ 10,39,36, 39,17,39, 10,36,9 ]
//     room.walls  = [ 30,99,100, 99,29,99 ]
//     room.steps  = [ 0,8,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.neomine))
//     room.add_event(new Door(-1,2,141,-1,-1))
//     room.add_event(new Door(2,0,133,-1,0))
//     room.add_event(new Door(-2,0,131,1,0))
//     room.add_event(new Door(0,-2,136,0,1))
//     all[139] = room
    
//     room = new Room();
//     room.floors = [ 9,39,36, 39,8,39, 10,36,10 ]
//     room.walls  = [ 12,99,99, 12,99,99 ]
//     room.steps  = [ 0,0,0, 0,0,8 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.nephtaline))
//     room.add_event(new Door(-1,2,141,-1,-1))
//     room.add_event(new Door(2,1,132,-1,1))
//     room.add_event(new Door(1,-2,135,1,1))
//     all[140] = room
    
//     room = new Room();
//     room.floors = [ 9,10,10, 39,33,39, 36,36,39 ]
//     room.walls  = [ 99,5,99, 99,99,99 ]
//     room.steps  = [ 8,0,0, 8,0,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Blocker(1,1, id:30))
//     room.add_event(new Door(0,2, requirement: Personas.nephtaline,144, to_x:0,-1))
//     room.add_event(new Door(-2,1,140,1,1))
//     room.add_event(new Door(-1,-2,137,-1,1))
//     all[141] = room
    
//     room = new Room();
//     room.floors = [ 10,9,10, 39,33,39, 36,36,39 ]
//     room.walls  = [ 19,5,99, 99,99,99 ]
//     room.steps  = [ 0,8,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Blocker(1,1, id:30))
//     room.add_event(new Door(0,2, requirement: Personas.neomine,145, to_x:0,-1))
//     room.add_event(new DoorBroken(2,0,112, to_x:-1,0))
//     room.add_event(new Door(-2,0,139,1,0))
//     room.add_event(new Door(0,-2,136,0,1))
//     all[142] = room
    
//     room = new Room();
//     room.floors = [ 10,10,9, 39,33,39, 36,36,39 ]
//     room.walls  = [ 99,5,99, 99,99,99 ]
//     room.steps  = [ 0,0,3, 0,0,8 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Blocker(1,1, id:30))
//     room.add_event(new Door(0,2, requirement: Personas.nemedique,146, to_x:0,-1))
//     room.add_event(new Door(-2,-1,138,1,-1))
//     room.add_event(new Door(1,-2,135,1,1))
//     all[143] = room
    
//     room = new Room();
//     room.floors = [ 36,39,3, 39,28,39, 36,36,39 ]
//     room.walls  = [ 99,99,99, 99,99,99 ]
//     room.steps  = [ 0,0,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.nastazie))
//     room.add_event(new Door(0,-2,141,0,1))
//     all[144] = room
    
//     room = new Room();
//     room.floors = [ 36,39,36, 39,28,39, 36,36,39 ]
//     room.walls  = [ 99,99,99, 99,99,99 ]
//     room.steps  = [ 0,0,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.nephtaline))
//     room.add_event(new Door(0,-2,142,0,1))
//     all[145] = room
    
//     room = new Room();
//     room.floors = [ 36,39,36, 39,28,39, 36,36,39 ]
//     room.walls  = [ 99,99,99, 99,99,99 ]
//     room.steps  = [ 0,0,0, 0,8,0 ]
//     room.audio  = Soundtrack.nastazie
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,1, spell: Personas.neomine))
//     room.add_event(new Door(0,-2,143,0,1))
//     all[146] = room
    
//     room = new Room();
//     room.floors = [ 101,39,101, 39,8,1, 101,101,1 ]
//     room.walls  = [ 99,99,99, 99,100,99 ]
//     room.steps  = [ 0,8,0, 0,0,0 ]
//     room.audio  = Soundtrack.glitch
//     room.theme  = Theme.pillar
//     room.add_event(new pillar_nastazie)
//     room.add_event(new Door(-2,0,130,1,0))
//     all[147] = room
//   }
  
//   func createSecrets()
//   {
//     var room = new Room();
    
//     // Second cat
    
//     room = new Room();
//     room.floors = [ 1,1,1, 1,1,38, 1,1,38 ]
//     room.walls  = [ 31,31,31, 31,31,31 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.catfishbird))
//     room.add_event(new Door(-2,0,102,1,0))
//     all[110] = room
    
//     // Third cat
    
//     room = new Room();
//     room.floors = [ 1,2,3, 4,5,6, 10,10,9 ]
//     room.walls  = [ 1,2,1, 2,1,2 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Wizard(1,0, spell: Personas.catfishbird))
//     room.add_event(new Door(-2,0,3,1,0))
//     all[111] = room
    
//     // Secret in Nastazie
    
//     room = new Room();
//     room.floors = [ 1,2,3, 4,5,6, 10,10,9 ]
//     room.walls  = [ 1,2,1, 2,1,2 ]
//     room.steps  = [ 0,3,0, 0,0,0 ]
//     room.audio  = Soundtrack.neomine
//     room.theme  = Theme.black
//     room.add_event(new Door(-2,0,142,1,0))
//     room.add_event(new Petunia(x:1,y:0))
//     all[112] = room
    
//     // Hiversaires Room
    
//     room = new Room();
//     room.floors = [ 109,107,105, 110,0,106, 112,108,111 ]
//     room.walls  = [ 102,103,102, 0,0,0 ]
//     room.steps  = [ 0,0,0, 0,7,0 ]
//     room.audio  = Soundtrack.glitch
//     room.theme  = Theme.pillar
//     room.add_event(new Door(0,-2,68,0,1))
//     room.add_event(new Blocker(0,0, eventName: "sauvegarde", newDialog:dialogs.sauveguarde()))
//     all[113] = room
//   }
}