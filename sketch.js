const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
// Ground Floor
    box1 = new Box(700,320,70,70);
    pig1 = new Pig(810,350);
    box2 = new Box(920,320,70,70);
    log1= new Log(810,260,300,PI/2);

    box21 = new Box(400,320,70,70);
    pig21 = new Pig(510,350);
    box22 = new Box(620,320,70,70);
    log21= new Log(510,260,300,PI/2);
    // Second Floor
    box3=new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    pig2= new Pig(810,220);
    log2=new Log(810,180,300,PI/2)

    box31=new Box(400,240,70,70);
    box32= new Box(620,240,70,70);
    pig31= new Pig(510,220);
    log31=new Log(510,180,300,PI/2)
  //Tower
    box41=new Box(700,100,70,70);
    box42=new Box(620,100,70,70);
    box43=new Box(700,0,70,70);
    box44=new Box (620,0,70,70);

  // Great wall of piggy land left
     log51=new Log(270,300,350,PI)
     box51=new Box(320,200,70,70);
     box52= new Box(220,200,70,70);
     box53=new Box(320,150,70,70);
     box54= new Box(220,150,70,70);
     box55=new Box(320,100,70,70);
     box56= new Box(220,100,70,70);
     box57=new Box(320,50,70,70);
     box58= new Box(220,50,70,70);
     box59=new Box(320,0,70,70);
     box60= new Box(220,0,70,70);

      // Great wall of piggy land right
      log61=new Log(1050,300,350,PI);
      box61=new Box(1000,200,70,70);
     box62= new Box(1100,200,70,70);
     box63=new Box(1000,150,70,70);
     box64= new Box(1100,150,70,70);
     box65=new Box(1000,100,70,70);
     box66= new Box(1100,100,70,70);
     box67=new Box(1000,50,70,70);
     box68= new Box(1100,50,70,70);
     box69=new Box(1000,0,70,70);
     box70= new Box(1100,0,70,70);
         
     //level 2 
     log71=new Log(660,-50,960,PI/2)
     box71=new Box(660,-100,800,30)
     box72 =new Box(660,-150,640,30)
     box73 =new Box(660,-200,480,30)
     box74 =new Box(660,-250,320,30);
     box75= new Box(660,-300,160,30);






    bird=new Bird(100,200);
    
    ground = new Ground(600,height,1200,20)

   
   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    
    log2.display();
    box3.display();
    box4.display();
    pig2.display();

bird.display();

box21.display();
box22.display();
log21.display();
pig21.display();

box31.display();
box32.display();
pig31.display();
log31.display();
box41.display();
box42.display();
box43.display();
box44.display();
log51.display();
box51.display();
box52.display();
box53.display();
box54.display();
box55.display();
box56.display();
box57.display();
box58.display();
box59.display();
box60.display();
log61.display();
box61.display();
box62.display();
box63.display();
box64.display();
box65.display();
box66.display();
box67.display();
box68.display();
box69.display();
box70.display();
log71.display();
box71.display();
box72.display();
box73.display();
box74.display();
box75.display();
}