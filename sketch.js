var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,30);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(0);  
  drawSprites();
  car.velocityX=speed;
  var deformation=0.5*car.weight*speed*speed/22500;
  if(car.isTouching(wall))
  {car.velocityX=0}
 // if(wall.x-car.x < (car.width+wall.Width)/2){
   // car.velocityX=0;
    
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
}
