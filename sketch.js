
var trex ,trex_running;
var ground,groundImage;

function preload(){
 groundImage=loadImage("ground2.png");
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png"); 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,80);
 trex.addAnimation("running",trex_running);
 trex.scale=0.45;
 ground=createSprite(100,180,600,20);
 ground.addImage(groundImage);
}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-7;

}
trex.velocityY=trex.velocityY+0.5;
trex.collide(ground); 
drawSprites();
}
