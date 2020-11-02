const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,dustside1,dustside2,dustside3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(600, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new paper(30,165,20);
	dustside1=new dustbin(375,155,50,180);
	dustside2=new dustbin(425,175,100,90);
	dustside3=new dustbin(475,155,50,180);
	ground1=new ground(300,190,600,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  paperball.display();
  dustside1.display();
  dustside2.display();
  dustside3.display();
  ground1.display();
  drawSprites();
}

function keyPressed(){
	
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-5})
}

}



