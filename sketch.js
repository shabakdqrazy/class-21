var fixedRect, movingRect,rectangle1,rectangle2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rectangle1 = createSprite(100,100,80,26);
  rectangle1.shapeColor = "blue";
  rectangle2 = createSprite(200,320,60,30);
  rectangle2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rectangle1)){
    movingRect.shapeColor = "red";
    rectangle1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    rectangle1.shapeColor = "green";
  }


  drawSprites();
}

