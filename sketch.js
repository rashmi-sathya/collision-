
var fixedRect, movingRect; 
var gameObject1, gameObject2;
var fixedRect1
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect1 = createSprite(100, 100, 50, 50);
  fixedRect1.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching()){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
   if(isTouching()){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect1.shapeColor = "green"
  }
  
  

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
       return true;
  }
  else {
    return false;
  } 
    
     if (movingRect.x - fixedRect1.x < fixedRect1.width/2 + movingRect.width/2
    && fixedRect1.x - movingRect.x < fixedRect1.width/2 + movingRect.width/2
    && movingRect.y - fixedRect1.y < fixedRect1.height/2 + movingRect.height/2
    && fixedRect1.y - fixedRect1.y < fixedRect1.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


