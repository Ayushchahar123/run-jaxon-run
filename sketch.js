var runner,runner_run;

var path,pathimg;

var invisible1;
var invisible2;
function preload(){
  runner_run = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup(){
  createCanvas(300,600);
  path = createSprite(100,200);
  path.addImage(pathimg)
  path.velocityY=4;
runner = createSprite(200,540,10,10);
runner.addAnimation("run",runner_run);
runner.scale=0.1;
invisible1= createSprite(10,300,50,600)
invisible2= createSprite(290,300,10,10)
invisible1.visible=true;


}
createEdgeSprite()
function draw() {
  background("white");

if (path.y > 400) {
  path.y = height/2;
}
runner.x = World.mouseX;

runner.collide(invissible1)
  drawSprites()

}




