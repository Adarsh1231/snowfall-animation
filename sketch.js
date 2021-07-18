const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow2 = [];
var maxsnow = 20;

function preload(){
  bkimg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1280,608);
  engine = Engine.create();
  world = engine.world;

  if(frameCount %15000 === 0 ){
    for(var i=0; i<maxsnow; i++){
    snow2.push(new Snow(random (0,608),random(0,200),100,100))
    }
  }
}

function draw(){
  background(bkimg);
  Engine.update(engine);

  for(var i = 0; i < maxsnow; i++){
   snow2[i].display();
   snow2[i].updateY();
  }
}
