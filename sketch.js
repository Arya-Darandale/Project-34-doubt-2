//Create variables here
var dog,happyDog,dogImg,happyDogImg;
var database,food,foodStock;

function preload()
{
  //load images here
  dog=loadImage("dogImg.png");
	happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dogImg.addImage(dog);
  happyDogImg.addImage(happyDog);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }

 writeStock();
  drawSprites();
  //add styles here
text("foodStock");
text("Note: Press UP_ARROW key to feed the dog milk");
textSize(15);
fill("yellow");
Stroke("white");

}


function readStock(data){
  foodS =data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').uptadate({
    Food:x
  })
}



