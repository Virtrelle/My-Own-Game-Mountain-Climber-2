var mClimber, mClimberImg;
var mountain, mountainImg;
var snowbg, snowbgImg;
var bird, birdImg;
var birdGroup;
var snowBall, snowballImg;
var apple, appleImg;
var appleGroup;
var touch = false;
var life = 200;
var score = 0;

function preload() {
  mClimberImg = loadImage("images/climber.gif");
  mountainImg = loadImage("images/mountain.png");
  snowbgImg = loadImage("images/snowbg.jpg");
  birdImg = loadImage("images/bird.gif");
  appleImg = loadImage("images/apple.png");
}


function setup() {
  createCanvas(600,700);

  mountain = createSprite(300,500,800,900);
  //mountain.scale = 1.5;
  mClimber = createSprite(300,600,10,10);

  mountain.addImage(mountainImg);
  mClimber.addImage(mClimberImg);
  
  birdGroup = new Group;
  appleGroup = new Group;

  mClimber.debug = true;
  
}


function draw() {
  background(snowbgImg);  

  //mClimber.x=camera.position.x-270;

 if (touch===false) {
    if (keyDown("RIGHT_ARROW")) {
      mClimber.x = mClimber.x + 5;
    }

    if (keyDown("LEFT_ARROW")) {
      mClimber.x = mClimber.x -5;
    }
    
    if (keyDown("UP_ARROW")) {
      mClimber.y = mClimber.y -5;
    }
    if (keyDown("DOWN_ARROW")) {
      mClimber.y = mClimber.y +5;
    }
 }

 showLife();
 handleLife();

  if (birdGroup.isTouching(mClimber)) {
    //mClimber.x = 330;
    //mClimber.y = 250;
    //mClimber.y = mClimber.y - 25;
   //touch = true;
  }
  appleFalling();

  if (appleGroup.isTouching(mClimber)) {
    life = life + 40;
    appleGroup[0].remove()
  }
 
  
  

  birdFlying();
  
  
  drawSprites();
  //fill("white");
  //textSize(20);
  //text(mouseX + "," + mouseY, mouseX, mouseY);
}


function birdFlying() {
  if (frameCount%100===0) {
    bird = createSprite(600,round(70,350),70,50);
    bird.addImage(birdImg);
    bird.scale = 0.3;
    bird.velocityX = random(-5,-7);
    //bird.velocityY = random(5,7);
    console.log(bird.velocityX);
    //console.log(bird.velocityY);
    birdGroup.add(bird);
    bird.debug = true;
    bird.setCollider("rectangle",0,0,bird.width - 70,bird.height - 70);
  }
}

function showLife() {
  rect(375, 20, 200, 20);
  fill("#f50057");
  rect(375, 20, life, 20);
  noStroke();
  //text("Lives left: ", life, 100 );
}

function handleLife() {
  if (mClimber.collide(birdGroup)) {
    life = life -40;
  }
  if (life <= 0) {
    //touch = true;
  }
}

function appleFalling() {
  if (frameCount%100 ===0) {
    apple = createSprite(random(0,600),5,70,50);
    apple.addImage(appleImg);
    apple.scale = 0.06;
    apple.velocityY = random(5,7);
    appleGroup.add(apple);
    apple.debug = true;
    //bird.setCollider("rectangle",0,0,bird.width - 70,bird.height - 70);
  }
}

