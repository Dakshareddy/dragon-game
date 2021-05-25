var dragon,dragonImage1,dragonImage2;
var backgroundImage,bg;
var flame,flameImage;
var lifeBar,lifeBarImage;
var score= 0;
  //dragon2 has to be controlled by computer and it should try to shoot my dragon1 and if I shoot dragon2 5 times, then I should win the game
function preload(){

  //background
  backgroundImage = loadImage("background.jpg")
  //dragon
  dragonImage1 = loadAnimation("dragon1.png")
  dragonImage2 = loadAnimation("dragon2.png")
  
  //life bar
lifeBarImage = loadImage("life bar1.jpg")

//flame
flameImage = loadAnimation("flame.png");
}

function setup() {
  createCanvas(1500,700);
  //background
  bg = createSprite(750, 250);
  bg.addImage("backgroundImage",backgroundImage);
  bg.scale = 2.4
  //dragon
dragon1 = createSprite(230,480, 50, 50);
dragon1.addAnimation("drgonImage1",dragonImage1);
dragon1.scale = 0.7


dragon2 = createSprite(1175,480, 50, 50);
dragon2.addAnimation("drgonImage2",dragonImage2);
dragon2.scale = 0.8

lifeBar = createSprite(675,100, 50, 50);
lifeBar.addAnimation("lifeBarImage",lifeBarImage)
lifeBar.scale = 0.5

shootGroup = new Group()



}

function draw() {
  
  background("yellow");

  
 //moving dragon1
 dragon1.y = World.mouseY

 
 if(keyDown("space")){
  Flame()
 }
if(shootGroup.isTouching(dragon2)){
score = score+1;
}


if(score>100){
  text("Winner",675,500);
}
  drawSprites();
  text("Score ;"+score,675,150);
}

function Flame(){

flame = createSprite(375,480,50,50);
flame.addAnimation("flameImage",flameImage)
flame.scale = 0.09  
flame.y = dragon1.y
flame.velocityX = 50;
flame.lifetime = 23;
shootGroup.add(flame)

}