var rectaenMovimiento;
var rectaFija;

//function preload(){
  //rectaenMovimiento = loadImage("image/Cat1.png");
  //rectaFija = loadImage("image/Cat2.png");
//}

function setup() {
  createCanvas(1200,800);

  rectaenMovimiento = createSprite(200,200,50,80);
  //rectaenMovimiento = addImage("image/Cat1.png");
  rectaenMovimiento.debug = true;
  rectaFija = createSprite(400,200,80,30);
  //rectaFija = addImage("image/BolaDeEstambre.png");
  rectaFija.debug = true;
}

function draw() {
  background("white");  

  rectaenMovimiento.x = World.mouseX;
  rectaenMovimiento.y = World.mouseY;

  if (rectaenMovimiento.x - rectaFija.x < rectaFija.width/2 + rectaenMovimiento.width/2 && rectaFija.x - rectaenMovimiento.x < rectaFija.width/2 + rectaenMovimiento.width/2){
    rectaenMovimiento.shapeColor = "red";
    rectaFija.shapeColor = "red";
  } else {
    rectaenMovimiento.shapeColor = "green";
    rectaFija.shapeColor = "green";
  }

  drawSprites();
}