var easing = 0.05 ;
var person = [];
var n = 0;
var pingSound, music;
var font;

var gameState = "start";

function preload() {

  pingSound = loadSound("Other Assets/Ping.wav");

}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  bug = createSprite(windowWidth/2, windowHeight - 128, 32, 32);
  bugimg = loadAnimation("Images/Virus/Virus00.png","Images/Virus/Virus11.png");
  bug.addAnimation("idle", bugimg);
  bug.scale = 2;

  wall1 = createSprite(windowWidth*1/6, windowHeight/2, windowWidth/3, windowHeight);  
  wall2 = createSprite(windowWidth*5/6, windowHeight/2, windowWidth/3, windowHeight);
  wall1.shapeColor = "#222831";
  wall2.shapeColor = "#222831";

  bug.setCollider("circle",0,0,10);

  for(let i = 0; i < 16; i++){
    person[i] = new Man();
  }

}

function draw() {

  background("#EEEEEE");  
  drawSprites();
  textFont(font);

  //text(mouseX + " " + mouseY, mouseX, mouseY);

  if(gameState === "start"){
    startdialogue();
  }
  
  if(gameState === "play"){
    gameplay();
  }

  if(gameState === "over"){
    endgame();
  }

}

function keyPressed() {

  if(gameState === "start"){
    gameState = "play";
    music.loop();
    console.log(gameState);
  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  bug.y = windowHeight - windowHeight / 20;

}
