var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(925, 925);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale = 0.25;
	//fairy.velocityX=2;

	fairy.debug = true;
	fairy.setCollider("circle",400,-30,40);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.velocityY=2;

	engine = Engine.create();
	world = engine.world;
	var backgrnd_options = {
		isStatic:true
	}
	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  background(bgImg);
  //Engine.update(engine)
  
  keyPressed();

  if(fairy.isTouching(star)){
	  star.velocity=0;
  }

  drawSprites();  
}


function keyPressed() {
	//write code here
	if (keyDown("up")) {
	    star.y=star.y-3;
	}
	if (keyDown("down")) {
		star.velocityY=3;
	  }
	  if (keyDown("left")) {
		fairy.x=fairy.x-3;
	  }
	  if (keyDown("right")) {
		fairy.x=fairy.x+3;
	  }
}