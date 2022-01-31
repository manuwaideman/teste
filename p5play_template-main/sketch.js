var sprite

function setup() {
  createCanvas(400,400);
  sprite = createSprite (200,200,30,20);
}

function draw() 
{
  background(30);

  if (keyIsDown (RIGHT_ARROW)) {
  sprite.position.x = sprite.position.x + 2;
  }
  drawSprites ();
}




