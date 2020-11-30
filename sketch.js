//Create variables here
var dog, dogImage;
var happydogImage;
var database, foodS, foodStock;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
  
  
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250, 250);
  dog.addImage(dogImage);
  dog.scale=0.2;

  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
 background(46, 139, 87);

//if(keyDown(UP_ARROW)){
//  foodStock=foodStock-1;
//}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  //console.log(foodS);
  dog.addImage(happydogImage);
}

  drawSprites();
  //add styles here
  fill("white");
    textSize(20);
    text("Food Supply: "+ foodS, 50, 150);

}


function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref(' / ').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
  //console.log(foodS);
}
