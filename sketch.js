
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//if(keyDown(Up_Arrow))
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new Paper(100,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  if(keyDown("UP_ARROW")){
	paperObj.velocityX = 2;
	paperObj.velocityY = -2;
}

 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

