//Create variables here
var dog, dogImage;
var happyDog, happydogImage;
var database, foodS, foodStock;

function preload()
{
  dogImage=loadImage("Dog.png");
  happydogImage=loadImage("happydog.png");
  
  
}

function setup() {
	createCanvas(500, 500);
  background(46, 139, 87);

  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  

var dog=createSprite(250, 250);
dog.addImage(dogImage);
dog.scale=0.2;


if(keyDown(UP_ARROW)){
  foodStock=foodStock-1;
}

if(keyWentDown(UP_ARROW)){
  writeStock(foodStock);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
    fill("white");
    textSize(20);
    text("Food Supply: " + foodS, 50, 150);
    

}


function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
}



