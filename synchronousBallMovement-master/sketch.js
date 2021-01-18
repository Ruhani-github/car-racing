var database;
var formobj,playerobj,gameobj;
var gameState=0;
var playerCount;
var car1,car2,car3,car4,cars;
var distance = 0;
var allplayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  gameobj = new Game();
  gameobj.getState();
  gameobj.start();
  

 
}

function draw(){
  background("white");
  if (playerCount===4){
    gameobj.update(1);
  }
  if (gameState===1){
    gameobj.play();
  }
  
}