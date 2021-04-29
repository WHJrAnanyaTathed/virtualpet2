//Create variables here
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood,foodObj;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();

  foodObj=new Food();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1)
}
  drawSprites();
  //add styles here
fill (255,255,254);
stroke ("black");
text ("Food remaining: " + foodS,170,200);
textSize (13);
text("Press up arrow key to feed the dog",130,10,300,20)


fill(225,225,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + "PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AN",350,30);
}
}

    function feedDog(){
      dog.addImage(happyDog);

      foodObj.updateFoodStock(foodObj.getFoodStock()-1);
      database.ref('/').update({
        food.foodObj.getFoodStock(),
        FeedTime:hour()
      })
    }

function addFoods(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}
function readStock(data){
  foodS=data.val();
}

function feedDog(){
   dog.addImage(happyDog); 
   if(foodObj.getFoodStock()<= 0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0);
     }
     else{
        foodObj.updateFoodStock(
          foodObj.getFoodStock()-1
          ); 
      }
       database.ref('/').update({
          Food:foodObj.getFoodStock(),
         FeedTime:hour()
         }) 
        } 
        //function to add food in stock function addFoods(){ foodS++; database.ref('/').update({ Food:foodS }) }

