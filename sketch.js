var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 80, 30);
 fixedRect = createSprite(200,300,30,80);
 movingRect.shapeColor="blue";
 fixedRect.shapeColor="blue";
}

function draw() {
  background(0);  
movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.width/2+fixedRect.width/2>fixedRect.x-movingRect.x&&movingRect.width/2+fixedRect.width/2>movingRect.x-fixedRect.x&&movingRect.height/2+fixedRect.height/2>movingRect.y-fixedRect.y&&movingRect.height/2+fixedRect.height/2>fixedRect.y-movingRect.y){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
  drawSprites();
}