var wall, thickness;
var car,speed, weight;
var car1

function preload(){
  car1 = loadImage("sprites/Untitled.png")
}

function setup() {
  createCanvas(1600, 400);

  speed=random(90,100)
  weight=random(30,52)


  thickness=random(22,83)

    car=createSprite(50, 200, 50,5);  
    car.velocityX = speed;
    car.addImage(car1)
    car.shapeColor=color(255);

    car.setCollider("circle",100,100,30);

    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  
  if(hasCollided(car, wall))
  {
  	car.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lcar, lwall)
{
	carRightEdge=car.x +car.width;
	wallLeftEdge=lwall.x;
	if (carRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
