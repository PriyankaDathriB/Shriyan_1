var player,playerImg;
var score = 0;
var lives = 3;
function preload(){
  playerImg = loadImage("man.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player = createSprite(200,400,50,50);
  player.addImage(playerImg) ;
 
  
}

function draw() {
  background("black");

  textSize(20);
  text("SCORE: " + score,width-150,50);
  text("LIVES: " + lives,width-250,50);
  
  player.velocityY = -3;
 /* if(keyDown(UP_ARROW)){
    player.y -= 2;
  }
  if(keyDown(DOWN_ARROW)){
    player.y += 2;
  }*/
  if(keyDown(RIGHT_ARROW)){
    player.x += 5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x -= 5;
  }
   camera.position.x = width/2;
   camera.position.y = player.y;

   spawnObstacles();
  
  drawSprites()
}

function spawnObstacles(){
  if(frameCount)
}