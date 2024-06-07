let personagen;
let grama;

let tamanho = 64;

let andarX = 0;
let andarY = 0;

let botao;

function setup() {
  createCanvas(576, 576);
  personagen = loadImage('person1.png');
  grama = loadImage('grass03.png');
}

function draw() {
  background(220);
  
  for(let x = 0; x <=8; x++){
    for(let y = 0; y <=8; y++){
      image(grama, x*tamanho, y*tamanho, tamanho, tamanho);
    }
  }
  
   image(personagen, andarX, andarY, tamanho, tamanho);
  
  if(andarX === 512 && andarY === 512){
  rect(160, 160, 256, 256);
  textSize(32)
  text('GANHOOOOUUU', 200, 300);

    botao = createButton('Reiniciar');
    
    botao.mousePressed(reiniciar);
    
    noLoop();
  }
   textSize(14)
  text(`X = ${andarX} - Y = ${andarY} `, 400, 500);
}

function reiniciar(){
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}

function keyPressed(){
  if (keyIsDown(LEFT_ARROW)&& andarX > 0) {
    andarX -= 64;
  }

  if (keyIsDown(RIGHT_ARROW)&& andarX < 512) {
    andarX += 64;
  }

  if (keyIsDown(UP_ARROW)&& andarY > 0) {
    andarY -= 64;
  }

  if (keyIsDown(DOWN_ARROW)&& andarY < 512) {
    andarY += 64;
  }
}