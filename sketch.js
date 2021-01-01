
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bruce;
var maxDrops=50;
var thunder1,thunder2,thunder3,thunder4;

var drops=[]

function preload(){
thunder1=loadImage("thunderbolt/1.png")
thunder2=loadImage("thunderbolt/2.png")
thunder3=loadImage("thunderbolt/3.png")
thunder4=loadImage("thunderbolt/4.png")
}

function setup() {
	createCanvas(500,660);

	engine = Engine.create();
	world = engine.world;

	bruce=new Umbrella(200,500);

	for(var i=0; i<maxDrops;i++){
	drops.push(new Drops(random(0,500),random(0,400),5));
	}
	
	Engine.run(engine);
  
}


function draw() {
	background(0)

	for (var i = 0; i < drops.length; i++) {
	drops[i].display();	
	}

			if(frameCount%80===0){
			var thunder=createSprite(100,70,10,10);
			  
			var rand=Math.round(random(1,4));
			switch (rand){
		  
			case 1:thunder.addImage(thunder1);
			break;
			case 2:thunder.addImage(thunder2);
			break;
			case 3:thunder.addImage(thunder3);
			break;
			case 4:thunder.addImage(thunder4);
			break;
			default:break; 
			}
			
			thunder.x=Math.round(random(50,450));
			thunder.lifetime=20;
			thunder.scale=0.4;
			}
		  
   bruce.display()
  
  drawSprites();
 
}

