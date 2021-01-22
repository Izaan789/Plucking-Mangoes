
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    boy = new Boy(240,500,380,420) 
	tree = new Tree(1040,310,600,600) 
	ground = new Ground(670,600,1400,10)
	stone = new Stone(125,402,60,60)
	mango1 = new Mango(883,259,60,60)
	mango2 = new Mango(821,178,60,60)
	mango3 = new Mango(939,73,60,60)
	mango4 = new Mango(968,235,60,60)
	mango5 = new Mango(971,139,60,60)
	mango6 = new Mango(1028,178,60,60)
	mango7 = new Mango(1015,84,60,60)
	mango8 = new Mango(885,184,60,60)
	mango9 = new Mango(1101,63,60,60)
	mango10 = new Mango(1084,131,60,60)
	mango11 = new Mango(1086,218,60,60)
	mango12 = new Mango(1159,145,60,60)
	mango13 = new Mango(1162,207,60,60)
	mango14 = new Mango(1219,190,60,60)
	mango15 = new Mango(1226,250,60,60)
	mango16 = new Mango(1275,231,60,60)
	thrower = new Thrower(stone.body,{x:125, y:402});


}


function draw() {

  background("lightblue");
  Engine.update(engine)

  text (mouseX+","+mouseY,100,100)
  
 boy.display();
 tree.display();
 ground.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();
 mango13.display();
 mango14.display();
 mango15.display();
 mango16.display();
 thrower.display();
 stone.display();

 detectCollusion(stone,mango1)
 detectCollusion(stone,mango2)
 detectCollusion(stone,mango3)
 detectCollusion(stone,mango4)
 detectCollusion(stone,mango5)
 detectCollusion(stone,mango6)
 detectCollusion(stone,mango7)
 detectCollusion(stone,mango8)
 detectCollusion(stone,mango9)
 detectCollusion(stone,mango10)
 detectCollusion(stone,mango11)
 detectCollusion(stone,mango12)
 detectCollusion(stone,mango13)
 detectCollusion(stone,mango14)
 detectCollusion(stone,mango15)
 detectCollusion(stone,mango16)

}

function detectCollusion(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

    if(distance <= Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    thrower.fly();
}

