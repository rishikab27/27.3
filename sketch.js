
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5
var roof
var sling1, sling2, sling3, sling4, sling5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,50,400,50)

	ball1= new Ball(270,400,30)
	ball2= new Ball(300,400,30)
	ball3= new Ball(400,400,30)
	ball4= new Ball(500,400,30)
	ball5= new Ball(570,400,30)

	sling1= new SlingShot(ball1.body,roof.body,-120);
	sling2= new SlingShot(ball2.body,roof.body,-60);
	sling3= new SlingShot(ball3.body,roof.body,0);
	sling4= new SlingShot(ball4.body,roof.body,60);
	sling5= new SlingShot(ball5.body,roof.body,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-150 , y:0})
	}
}


