const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
   




}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
   




    
}

function draw(){
    Engine.update(engine);
    background(0); 

   




    
    drawSprites();
}   

