var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,dustbin1,dustbin2,dustbin3,dustbin4,DustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	DustbinImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper();
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(675,660,160,20);
	dustbin2 = new Dustbin(600,580,20,200);
	dustbin3 = new Dustbin(745,580,20,200);
	//dustbin4 = new DustbinGreen(675,585,200,200);
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(DustbinImg,580,475,185,220);
  //dustbin4.display();
  //paper1.debug();
  //drawSprites();
 
};
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:16,y:-16});
	}
}

