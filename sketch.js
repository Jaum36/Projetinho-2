var starImg,bgImg, fairyImg, cenaImg;
var fairySound;
var star, starBody, fairy;
var engine, world;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fairyImg = loadAnimation("images/fairyImage1.png");
    fairySound = loadSound("sound/JoyMusic.mp3");
    cenaImg = loadImage("images/starNight.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    fairySound.loop();

    //criar sprite de fada e adicionar animação para fada
    cena = createSprite(400,375);
    cena.addImage(cenaImg);
    

    fairy = createSprite(470,470);
    fairy.addAnimation("sas", fairyImg);
    fairy.scale = 0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

    var options = {
        restitution:0.5, 
        isStatic:false,
    }

	starBody = Bodies.circle(650 , 30 , 5, options);
	World.add(world, starBody);
	

}

function draw(){
    background(0);
    Engine.update(engine);

    star.y  = starBody.position.y

    if(keyDown("d")){
        fairy.x = fairy.x + 4
    }

    if(keyDown("a")){
        fairy.x = fairy.x - 4
    }

    if(star.y > 450 && starBody.position.y > 450){
        Matter.Body.setStatic(starBody, true);
    }

    drawSprites();
}