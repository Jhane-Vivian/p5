function setup() {
    canvas = createCanvas(400,300);
    canvas.center();

    torreRei = createSprite(100,50,20,50);
    torreInimigo = createSprite(300,50,20,50);

    carta1 = createSprite(50,250,35,50);
    carta2 = createSprite(90,250,35,50);
    carta3 = createSprite(130,250,35,50);

    

}
function draw(){
    background(0);

    drawSprites();
}

function perguntas()