var Frect
var Mrect

function setup() {
  createCanvas(800,400);

  Frect = createSprite(200,200,20,10)
  Frect.shapeColor = "red"

  Mrect = createSprite(600,200,20,10)
  Mrect.shapeColor = "red"

}

function draw() {
  background("green");  

  Mrect.x = World.mouseX
  Mrect.y = World.mouseY

  if(Mrect.x - Frect.x < Frect.width/2 + Mrect.width/2 && Frect.x - Mrect.x < Mrect.width / 2 + Frect.width / 2){
  Mrect.shapeColor = "blue"
  Frect.shapeColor = "blue"
  } else {
  Mrect.shapeColor = "red"
  Frect.shapeColor = "red"
  }

  if(Mrect.y - Frect.y < Frect.height/2 + Mrect.height/2 && Frect.y - Mrect.y < Mrect.height / 2 + Frect.height / 2){
    Mrect.shapeColor = "blue"
    Frect.shapeColor = "blue"
    } else {
    Mrect.shapeColor = "red"
    Frect.shapeColor = "red"
    }
  drawSprites();
}