// Hello! To begin with I'm just setting up different variables
// (I'm still unsure on the difference between 'var' and 'let')
let fishies = [];
var cWidth = 800;
var diver;
var numOfFish = 20;
var fishImages = [];
var points;
var lost = false;
var playing = false;
var start = true;
var gnsong;
// Different media a preloaded, including video cutscenes, which I'm super stoked on
function preload() {
  fishImage1 = loadImage('fish1.png');
  fishImage2 = loadImage('fish2.png');
  fishImage3 = loadImage('fish3.png');
  fishImage4 = loadImage('fish4.png');
  fishImage5 = loadImage('fish5.png');
  fishImage6 = loadImage('fish6.png');
  thebg = loadImage('bg.png');
  video1 = createVideo('intro.mov');
  video2 = createVideo('outro.mov');
}

function setup() {
// I defined cWidth as 800 earlier, but have since realised I didn't really need it as a variable,
// but it's still here
  createCanvas(cWidth,700);
// Different photos for each type of fish
  fishImages[0] = loadImage('fish1.png');
  fishImages[1] = loadImage('fish2.png');
  fishImages[2] = loadImage('fish3.png');
  fishImages[3] = loadImage('fish4.png');
  fishImages[4] = loadImage('fish5.png');
  fishImages[5] = loadImage('fish6.png');
  diverImg = loadImage('diver.png');
// frameRate set to 60, which I believe is actually the default.
  frameRate(60);
  video1.hide();
  video2.hide();
  //gnsong.pause();

// Here's the player character! This works through the play.library
  diver = createSprite(width/2, height/2);
  diver.maxSpeed = 3;
  diver.friction = .1;
// The divers hitbox is created
  diver.setCollider("rectangle", 0, 0, 0, 20, 20);
  diver.addAnimation("normal", "diver1.png", "diver8.png");


// Here is what actually creates the fish, which works through a for loop
  for (let i = 0; i < numOfFish; i++) {
    var randomFishImage = fishImages[Math.floor(Math.random() * fishImages.length)];
    var randomBoolean = Math.random() >= 0.5;
    fishies[i] = new Fish(randomFishImage, random(0,height), randomBoolean, random(.2,.6), random(.5,1));
  }
}

// Here everything gets drawn
function draw() {


// Start = true is used to know if the opening video has finished.
  if (start == true) {
//gnsong.play();
    video1.play();
    image(video1, -250, 0, 1300, 700);
  }
  if (video1.time() >30.5) {
   video1.hide();
    start = false;
  }
//  Lost is used so the game knows when the player has hit an enemy, which
// results in a game over.
// This just tells the game to begin if the intro is done, and if the player has not lost
  if (lost == false && start == false) {
      background(thebg);
// this calls for the function which controls the player-character
      diverperson();
    for (let i = 0; i <fishies.length; i++) {
      fishies[i].swim();
      fishies[i].display();
    }
// the point-counter is made
    fill(255);
    textSize(40);
    points = Math.ceil(frameCount/2);
    text("Points: " + points, 10, 50, );
  }
  else if (lost == true) {
    loser();
  }
}
// Here we construct what constitues a fish, and what functions it needs.
class Fish {
  constructor(fishImage, ypos, goingLeft, size, speed) {
    // We use p5.play.js, so we can use sprites
    this.fishSprite = createSprite();
    this.fishSprite.addImage(fishImage);
    this.fishSprite.scale = size;
    this.speed = speed;
    this.fishSprite.maxSpeed = 2;
    this.goingLeft = goingLeft
    this.float = 15;
    // If the fish is going left, it will turn the other direction
    if (goingLeft == true) {
      this.fishSprite.mirrorX(-1);
      this.pos = createVector(cWidth, ypos);
    }
    else {
      this.pos = createVector(0, ypos);
    }
  }
  // this portion controls the way the fish will move.
  swim() {
    // This short line of code just sets how the player can lose the game
    if(diver.collide(this.fishSprite)){
      lost = true;
    }
    // Here we see the movement. These parameters are further defined when the fish is spawned.

    //These lines of code dictates that the fish should move left
    if (this.goingLeft == true) {
      this.pos.x -= this.speed;
    // These lines determine it should go right.
    }
    else {
      this.pos.x += this.speed;
    }
    // Here it is determined where the fish spawn, depending on their direction.
    if (this.pos.x >cWidth+100 || this.pos.x <-100) {
        if (this.goingLeft == true) {
          this.pos.x = cWidth+100;
        }
        else {
          this.pos.x = -100;
        }
        // Regardless of their direciton, the Y-position will be random
        this.pos.y = random(0, height);
    }
  }
// Here the fish are drawn
  display() {
    this.fishSprite.position.x = this.pos.x;
    this.fishSprite.position.y = this.pos.y;

    drawSprite(this.fishSprite);
  }
}

function diverperson() {
  // The controls of the diver is created
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

}
// This function is called when the game is lost.
// It plays the final cutscene, and sets the draw to no longer loop.
function loser() {
  playing = true;
  if (playing == true) {
//    gnsong.stop();
    video2.play();
    image(video2, -250, 0, 1300, 700);

  }
  if (video2.time() >11) {
    video2.hide();
    fill(255);
    textSize(40);
    text("Wow! You got " + points + " points", width/5, height/2, );
    noloop();
    }


//video1.noloop();
}
