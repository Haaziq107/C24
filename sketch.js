//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var paperball;
function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,680,800,20);
	//Create the Bodies Here.
	box1 = new Box(700,650,200,20);
	box2 = new Box(600,610,20,100);
	box3 = new Box(800,610,20,100);
	
	paperball= new Paperball(100,580,40);
	fill("green");
	//ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	// World.add(world, ground);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  fill("green")
  //rect(ground.position.x,ground.position.y,700,10)
  paperball.display();
  drawSprites();
 
}

function  keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-100});
}
}
