let fishies = [];
var cWidth = 800;
var diver;
var numOfFish = 20;
var fishImages = [];
var points;
var lost = false;
var playing = false;
var start = true;
function preload() {
  fishImage1 = loadImage('fish1.png');
  baba = loadSound('baba.mp3');
  video1 = createVideo('step1.mov');
  video2 = createVideo('step2.mov');
}

function setup() {
  createCanvas(cWidth,700);
  fishImages[0] = loadImage('fish1.png');
  fishImages[1] = loadImage('fish2.png');
  fishImages[2] = loadImage('fish1.png');
  fishImages[3] = loadImage('fish2.png');
  fishImages[4] = loadImage('fish1.png');
  fishImages[5] = loadImage('fish3.png');
  diverImg = loadImage('diver.png');
  frameRate(60);
  video1.hide();
  video2.hide();

  diver = createSprite(width/2, height/2);
  diver.maxSpeed = 3;
  diver.friction = .1;
  diver.setCollider("circle", 0,0, 20);
  diver.addImage("normal", diverImg);

  for (let i = 0; i < numOfFish; i++) {
    var randomFishImage = fishImages[Math.floor(Math.random() * fishImages.length)];
    var randomBoolean = Math.random() >= 0.5;
    fishies[i] = new Fish(randomFishImage, random(0,height), randomBoolean, random(.2,.6), random(.5,1));
  }
}

function draw() {
  if (start == true) {
//    video1.play();
    image(video1, 0, 0, width, height);
  }
  if (video1.time() <1) {
//   video1.hide();
    start = false;
  }

  if (lost == false && start == false) {
      background(0,50,100);
    if(keyDown(LEFT_ARROW))
       diver.rotation -= 4;
     if(keyDown(RIGHT_ARROW))
       diver.rotation += 4;
     if(keyIsDown(UP_ARROW))
       {
       diver.addSpeed(1, diver.rotation);
       diver.position.x = constrain(diver.position.x, 0, cWidth);
       diver.position.y = constrain(diver.position.y, 0, height);
       }
       diver.scale = .5;
       drawSprite(diver);
    for (let i = 0; i <fishies.length; i++) {
      fishies[i].swim();
      fishies[i].display();
    }
    fill(255);
    textSize(40);
    points = Math.ceil(frameCount/2);
    text("Points: " + points, 120, 100, );
  }
  else if (lost == true) {
    loser();
  }
}

class Fish {
  constructor(fishImage, ypos, goingLeft, size, speed) {
    //this.fishSprite = fishImage;
    this.fishSprite = createSprite();
    this.fishSprite.addImage(fishImage);
    this.fishSprite.scale = size;
    this.speed = speed;
    this.fishSprite.maxSpeed = 2;
    this.goingLeft = goingLeft
    this.float = 15;
    if (goingLeft == true) {
      this.fishSprite.mirrorX(-1);
      this.pos = createVector(cWidth, ypos);
    }
    else {
      this.pos = createVector(0, ypos);
    }
  }

  swim() {

    if(diver.collide(this.fishSprite)){
      lost = true;
    }
    //this.fishSprite.rotation = 50;
    if (this.goingLeft == true) {
      this.pos.x -= this.speed;
      //this.fishSprite.addSpeed(this.speed, this.fishSprite.rotation);
      //this.fishSprite.rotateToDirection = true
    //  this.pos.x -= this.speed;
      //this.pos.y -= 3;


      //this.float = this.float - (this.float)

    //  this.pos.y = this.pos.y - this.float
  //    this.float = -(this.float)

      //this.fishSprite.addSpeed(3, 50);
    }
    else {
      this.pos.x += this.speed;
    }
    if (this.pos.x >cWidth+100 || this.pos.x <-100) {
        if (this.goingLeft == true) {
          this.pos.x = cWidth+100;
        }
        else {
          this.pos.x = -100;
        }
        this.pos.y = random(0, height);
    }
  }

  display() {
    this.fishSprite.position.x = this.pos.x;
    this.fishSprite.position.y = this.pos.y;
    //remove(this.fishSprite);



    //if (diver.collide(this.fishSprite)) {
    //  touching();
    //}
    drawSprite(this.fishSprite);
  }
}
function loser() {
  playing = true;
  if (playing == true) {
    video2.play();
    image(video2, 0, 0, width, height);
    fill(255);
    textSize(40);
    text("Wow! You got " + points + " points", width/4, height/8, );
  }
  if (video2.time() >17) {
    video2.hide();
    noloop();
    }


  console.log(video2.time());
//video1.noloop();
}
