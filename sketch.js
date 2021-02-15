var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cycleBell,pinkCG,player1image1,player1image2,yellowCG,player2image1,player2image2,redCG,player3image1,player3image2,player1,player2,player3,gameover,gameoverImg;
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
cycleBell = loadSound("sound/bell.mp3");
player1image1 = loadAnimation("opponent1.png","opponent2.png");
player1image2 = loadAnimation("opponent3.png");
player2image1 = loadAnimation("opponent4.png","opponent5.png");
player2image2 = loadAnimation("opponent6.png");
player3image1 = loadAnimation("opponent7.png","opponent8.png");
player3image2 = loadAnimation("opponent9.png");
gameoverImg = loadImage("gameOver.png");

  
  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;

gameover = createSprite(150,150);
gameover.addImage(gameoverImg);
gameover.scale = 0.6;
gameover.visible = false;
  
  
pinkCG = new Group();
yellowCG = new Group();
redCG = new Group();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance:"+ distance,350,30);
  
  if(gameState===PLAY){
    if(keyDown("space")){
  cycleBell.play();
  }
  distance = distance + Math.round(getFrameRate()/50);
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  if(path.x < 0 ){
    path.x = width/2;
  }
var select_oppPlayer = Math.round(random(1,3));
  if (World.frameCount%150 == 0){
     if(select_oppPlayer == 1){
       pinkCyclists();
 } else{
       redCyclists();
 } 
 }

    if (pinkCG.isTouching(mainCyclist)){
  gameState = END;
  player1.velocityY = 0;
  player1.addAnimation("opponentPlayer1",player1image2);
  }
    if (redCG.isTouching(mainCyclist)){
  gameState = END;
  player3.velocityY = 0;
  player3.addAnimation("opponentPlayer3",player3image2);
  }
  }else if (gameState === END){
    gameover.visible = true;
    path.velocityX = 0;
    mainCyclist.velocityY = 0;
    mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
    pinkCG.setVelocityXEach(0);
    pinkCG.setLifetimeEach(-1);
    redCG.setVelocityXEach(0);
    redCG.setLifetimeEach(-1);
    
  }
    
  
  //code to reset the background
  
  
}
function pinkCyclists(){
player1 = createSprite(1100,Math.round(random(50,250)),10,10)
player1.scale = 0.06;
player1.addAnimation("opponent1.png",player1image1);
player1.velocityX = -(6+2*distance/150);
player1.lifetime = 170;
pinkCG.add(player1);
}
function yellowCyclists(){
player2 = createSprite(1100,Math.round(random(50,250)),10,10)
player2.scale = 0.06;
player2.addAnimation("opponent4.png",player2image1);
player2.velocityX = -(6+2*distance/150);
player2.lifetime = 170;
yellowCG.add(player2);
}

function redCyclists(){
player3 = createSprite(1100,Math.round(random(50,250)),10,10)
player3.scale = 0.06;
player3.addAnimation("opponentPlayer3",player3image1);
player3.velocityX = -(6+2*distance/150);
player3.lifetime = 170;
redCG.add(player3);
}










