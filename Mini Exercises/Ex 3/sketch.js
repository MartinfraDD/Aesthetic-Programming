var position = 10;
var velocity = 1;
var acceleration = .001;
var xpos = 0;
var y;
var video1;
function preload() {
  s1 = loadSound('1.mp3');
  s2 = loadSound('2.mp3');
  s3 = loadSound('3.mp3');
  s4 = loadSound('4.mp3');
  s5 = loadSound('5.mp3');
  s6 = loadSound('6.mp3');
  s7 = loadSound('7.mp3');
  s8 = loadSound('8.mp3');
  video1 = createVideo('help.mov');
  i1 = loadImage('1.png');
i2 = loadImage('2.png');
i3 = loadImage('3.png');
generating = loadImage('generating.png');
}
function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 background(255, 112, 68);
 frameRate (60);  //try to change this parameter
   noStroke();
   fill(255, 112, 68);
ellipse(windowWidth/2, windowHeight/2,322, 322);
   fill(255, 112, 68);
ellipse(windowWidth/2, windowHeight/2,280, 280);
y = 0;
video1.hide();
}

function draw() {
drawBar(600);
littletune();

  setTimeout(littlerolf, 9000);
}


function drawBar(num) {
push()
  translate(width/2, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  var cir = position/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(cir));
  noStroke();
  fill(68, 255, 175);
  rect(xpos,-163,15,25);  //the moving dot(s), the x is the distance from the center
position = position - velocity;
velocity = velocity + acceleration;

if(frameCount == 425) {

xpos = 5000;

 }
  pop();
}

function littletune() {
 if(frameCount == 1) {
   image(generating, windowWidth/5, windowHeight/1.2);
   image(i1, windowWidth/2.15, windowHeight/2.3, 100, 100);
  s1.play();
  }
  if(frameCount == 60) {
    image(i2, windowWidth/2.15, windowHeight/2.3, 100, 100);
  s2.play();
}
if(frameCount == 120) {
  image(i1, windowWidth/2.15, windowHeight/2.3, 100, 100);
s1.play();
}
if(frameCount == 180) {
  image(i2, windowWidth/2.15, windowHeight/2.3, 100, 100);
s2.play();
}
if(frameCount == 240) {
  image(i1, windowWidth/2.15, windowHeight/2.3, 100, 100);
s1.play();
}if(frameCount == 270) {
  image(i2, windowWidth/2.15, windowHeight/2.3, 100, 100);
s2.play();
}
if(frameCount == 300) {
  image(i1, windowWidth/2.15, windowHeight/2.3, 100, 100);
s3.play();
}
if(frameCount == 330) {
  image(i2, windowWidth/2.15, windowHeight/2.3, 100, 100);
s5.play();
}
if(frameCount == 360) {
  image(i1, windowWidth/2.15, windowHeight/2.3, 100, 100);
s6.play();
}
if(frameCount == 420) {
  image(i2, windowWidth/2.15, windowHeight/2.3, 100, 100);
s7.play();
}
if(frameCount == 483) {
  image(i3, windowWidth/2.15, windowHeight/2.3, 100, 100);
s8.play();
}
}

function littlerolf() {

  fill(0, 30*frameCount/500);
  rect(0, 0, width, height);

  if(frameCount >600) {
        video1.play();
      image(video1, width/5, height/4);
}
}
