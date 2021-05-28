var dog,happyDog,database,foodS,foodStock;

function preload()
{
	dog = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,100,100);
  database = firebase.database();
  foodstock = database.ref('food');
  foodstock.on("value",readstock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

    title.html("food"+foodS);
    title.position(250,400);
  }

  drawSprites();
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



