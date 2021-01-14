var ball;
var block1,block2,block3,block4;



var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup() {
 createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(200,600,100,30);
block1.shapeColor = "red";

block2 = createSprite(400,600,100,30);
block2.shapeColor = "green";

block3 = createSprite(600,600,100,30);
block3.shapeColor = "blue";

block4 = createSprite(800,600,100,30);
block4.shapeColor = "purple";


    //create box sprite and give velocity
ball = createSprite(random(20,750),400,50,50);
ball.velocityX= 4;



}

function draw() {

    background("white");

edges=createEdgeSprite();

ball.bounceOff(edges);




    //add condition to check if box touching surface and make it box

    

    if(block1.isTouching(ball) && ball.bounceOff(block1)) {
        ball.shapeColor = "red";
    }

    if(block2.isTouching(ball) ) {
       ball.shapeColor = "green";
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor = "blue";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "purple";
    }

    drawSprites();
}