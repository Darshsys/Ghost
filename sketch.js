var tower,towerimg,doorimg,climberimg,ghost,ghostimg




function preload (){
  towerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
}

function setup (){
createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerimg);
  tower.velocityY=1;
  ghost=createSprite(300,300);
  ghost.addImage(ghostimg);
  ghost.scale=0.3;
  doorGroup=new Group();
  climberGroup=new Group();
}

function draw (){
background(200);
  
  if(tower.y>400){
  tower.y=300;
  }
  
  spawnDoors();
drawSprites();
}

function spawnDoors(){
  if(frameCount%240===0){
    var door=createSprite(40,50);   
    door.x=Math.round(random(120,400));
    var climber=createSprite(40,120);
    climber.x=door.x;
    door.addImage(doorimg);
    climber.addImage(climberimg);
    door.velocityY=1;
    door.lifetime=800;
    climber.velocityY=1;
    climber.lifetime=800;
    doorGroup.add(door);
    climberGroup.add(climber);
  }
      
}




