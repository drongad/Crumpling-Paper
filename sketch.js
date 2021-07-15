var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670, width, 20)
    left = new Ground(600,600,20,120)
	right = new Ground(950,600,20,120)
	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	fill(255)
	ball = Bodies.circle(100,350,20,ball_options)
	
	World.add(world, ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  left.display()
  right.display()
  ellipse(ball.position.x, ball.position.y, 20)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode){
		
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75})

	}
}


