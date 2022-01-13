var imagemcorredor,corredor
var imagemcaminho,caminho
function preload(){
  //imagens pré-carregadas
imagemcorredor=loadAnimation("Runner-1.png","Runner-2.png")
imagemcaminho=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  caminho=createSprite(200,200,20,20)
  caminho.addImage("caminho",imagemcaminho) 

   corredor=createSprite(200,200,50,50)
   corredor.addAnimation("corredor",imagemcorredor) 
   corredor.scale=0.09
   // crie Boundary (Limite) esquerdo 
   leftBoundary=createSprite(0,0,100,800); 
   leftBoundary.visible = false; 
   //crie Boundary direito 
   rightBoundary=createSprite(410,0,100,800);
    rightBoundary.visible = false;
}

function draw() {
  background(0);
  caminho.velocityY=4
  if(caminho.y<400){
    caminho.y = height/2;
  }
  corredor.x=World.mouseX;
  edges= createEdgeSprites();
  corredor.collide(edges[3]);
  corredor.collide(leftBoundary);
   corredor.collide(rightBoundary);
drawSprites()
}
