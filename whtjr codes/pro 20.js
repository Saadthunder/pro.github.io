
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var plane;
var block1;
var angle1=60;
var angle2=60;
var angle3=60;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 
  var plane_options={
   isStatic: true
}
  
	//Create the Bodies Here.
   plane=Bodies.rectangle(200,650,1200,20,plane_options);
   World.add(world,plane);
	 rectMode(CENTER);
   block1=Bodies.rectangle(200,400,200,20,plane_options);
   World.add(world,block1);
   rectMode(CENTER);
   block2=Bodies.rectangle(600,400,200,20,plane_options);
   World.add(world,block2);
   rectMode(CENTER);
   rotator1=Bodies.rectangle(400,200,15,120,plane_options);
   World.add(world,rotator1);
   rectMode(CENTER);
   rotator2=Bodies.rectangle(400,200,120,15,plane_options);
   World.add(world,rotator2);
   rectMode(CENTER);
   rotator3=Bodies.rectangle(400,200,120,15,plane_options);
   World.add(world,rotator2);
   rectMode(CENTER);
   
   particle_options={

   restitution:0.4,
   friction:0.02

   }



   particle1=Bodies.circle(400,20,20,particle_options);
   World.add(world,particle1)
   Engine.run(engine);

   particle2=Bodies.circle(400,50,20,particle_options);
   World.add(world,particle2)
   Engine.run(engine);

   particle3=Bodies.circle(400,70,20,particle_options);
   World.add(world,particle3)
   Engine.run(engine);

   particle4=Bodies.circle(400,0,20,particle_options);
   World.add(world,particle4);
   Engine.run(engine);

   particle5=Bodies.circle(400,90,20,particle_options);
   World.add(world,particle5);
   Engine.run(engine);
}

function draw() {
  
  background(51);
  
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,1200,20);

  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block2.position.y,200,20);

  rect(rotator1.position.x,rotator1.position.y,120,15);
  rect(rotator2.position.x,rotator2.position.y,120,15);
  rect(rotator3.position.x,rotator3.position.y,120,15);

  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  ellipse(particle4.position.x,particle4.position.y,20);
  ellipse(particle5.position.x,particle5.position.y,20);

  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
   rect(0,0,15,120);
  pop();
  angle1=angle1+10;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
   rect(0,0,120,15);
  pop();
  angle2=angle2+20;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
   rect(0,0,120,15);
  pop();
  angle3=angle3+30;

 

  drawSprites();1
 
}










