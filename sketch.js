
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var bob1, roof1,rope;
function setup() {
	createCanvas(1000,500);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(380,400);
	bob2 = new Bob(460,400);
	bob3 = new Bob(520,400);
	bob4 = new Bob(580,400);
	bob5 = new Bob(620,400);
	roof1 = new Roof();
	rope1 = new Rope(bob1.body,roof1.body,-100);
	rope2 = new Rope(bob2.body,roof1.body,-50);
	rope3 = new Rope(bob3.body,roof1.body,0);
	rope4 = new Rope(bob4.body,roof1.body,50);
	rope5 = new Rope(bob5.body,roof1.body,100);
	Engine.run(engine);

}


function draw() {
  background(255,255,255);
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed (){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-120 , y:120});
	}
}

