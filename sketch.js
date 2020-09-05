
//Global Function 
//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables
var leftSprite, rightSprite, bottomSprite;
var dustbin;
function preload(){
  dustbin = loadImage("dustbingreen.png");
}

function setup() {
	 //Create the canvas
	 var canvas = createCanvas(1000, 700);
   
   //Make engine = engine.create(); and world = engine.world;
	 engine = Engine.create();
   world = engine.world;
  
   //Make ground
   ground = new Ground(400,680,2000,10);
  
   //Make a ball
   paperObject = new Ball(70,20,20);

   //Create a bottomSprite
   bottomSprite = createSprite(795,610,80,10);
   bottomSprite.addImage(dustbin);
   bottomSprite.scale = 0.4;
	 bottomSprite.shapeColor = "aqua";

	 //Create a rightSprite
	 rightSprite = createSprite(840,640,5,60);
	 rightSprite.shapeColor = "green";

   //Create a leftSprite
	 leftSprite = createSprite(750,620,5,60);
	 leftSprite.shapeColor = "green";
	
   //Create a matter.js ground
	 bottom = Bodies.rectangle(795,610,80,10,{isStatic: true});
	 World.add(world, bottom);
	
   //Create a right
	 right = Bodies.rectangle(840,640,5,70,{isStatic: true});
	 World.add(world,right);

   //Create a left
   left = Bodies.rectangle(750,640,5,70,{isStatic: true});
	 World.add(world,left);

  //  //Make container
  //  container1 = new Container1(380,20,70,10);
  //  World.add(world,container1);

  //  container2 = new Container1(350,20,10,70);
  //  World.add(world,container2);

  //  container3 = new Container1(420,20,10,70);
  //  World.add(world,container2);
  //  Engine.run(engine);
}

function draw() {
  //Black Background
  background("white");

  //Update Engine
  Engine.update(engine);

  //Display Ground
  ground.display();

  //Display ball
  paperObject.display();

  // //Display COntainer
  // container1.display();
  // container2.display();
  // container3.display();

  //bottomSPrite.x = bottom.position.x and viseverca
	bottomSprite.x = bottom.position.x;
	bottomSprite.y = bottom.position.y;
	
	//rightSprite.x = right.position.x and viceversa
	rightSprite.x = right.position.x;
	rightSprite.y = right.position.y;
	
	//leftSprite.x = left.position.x and viceversa
	leftSprite.x = left.position.x;
  leftSprite.y = left.position.y;
  
  //drawSprites();
  drawSprites();
 
}

function keyDown(){
  if(keyCode = UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,20);
  }
}

