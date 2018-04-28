
// different variables and values are defined
var position = 10;
var velocity = 1;
var acceleration = .001;
var xpos = 0;
var y;
var video1;

// We load all the media in advance, so that there won't be delays when the
// program is running
function preload() {
  s1 = loadSound('1.mp3');
  s2 = loadSound('2.mp3');
  s3 = loadSound('3.mp3');
  s4 = loadSound('4.mp3');
  s5 = loadSound('5.mp3');
  s6 = loadSound('6.mp3');
  s7 = loadSound('7.mp3');
  s8 = loadSound('8.mp3');
  //Video is created
  video1 = createVideo('help.mov');
  i1 = loadImage('1.png');
i2 = loadImage('2.png');
i3 = loadImage('3.png');
generating = loadImage('generating.png');
}

//Setting up the window dimensions, as well as some circles for the throbber
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255, 112, 68);
 frameRate (60);
   noStroke();
   fill(255, 112, 68);
ellipse(windowWidth/2, windowHeight/2,322, 322);
   fill(255, 112, 68);
ellipse(windowWidth/2, windowHeight/2,280, 280);
y = 0;
// the video is hidden until triggered later
video1.hide();

}
// we name some functions, and set a timer for the video to play
function draw() {
drawBar(600);
littletune();

  setTimeout(videotime, 9000);
}

//
function drawBar(num) {
push()
  translate(width/2, height/2);
  var cir = position/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(68, 255, 175);
  rect(xpos,-163,15,25); // a rectangle is used to show the loading

// here the nature of the acceleration is defined
position = position - velocity;
velocity = velocity + acceleration;

// the spinning rectangle is moved away after a certain time
if(frameCount == 425) {
xpos = 5000;
 }
  pop();
}

// this section of code plays the tune in sequence, as well as showing the images
function littletune() {
 if(frameCount == 1) {
   image(generating, windowWidth/3.5, windowHeight/1.2);
   image(i1, windowWidth/2.10, windowHeight/2.3, 100, 100);
  s1.play();
  }
  if(frameCount == 60) {
    image(i2, windowWidth/2.10, windowHeight/2.3, 100, 100);
  s2.play();
}
if(frameCount == 120) {
  image(i1, windowWidth/2.10, windowHeight/2.3, 100, 100);
s1.play();
}
if(frameCount == 180) {
  image(i2, windowWidth/2.10, windowHeight/2.3, 100, 100);
s2.play();
}
if(frameCount == 240) {
  image(i1, windowWidth/2.10, windowHeight/2.3, 100, 100);
s1.play();
}if(frameCount == 270) {
  image(i2, windowWidth/2.10, windowHeight/2.3, 100, 100);
s2.play();
}
if(frameCount == 300) {
  image(i1, windowWidth/2.10, windowHeight/2.3, 100, 100);
s3.play();
}
if(frameCount == 330) {
  image(i2, windowWidth/2.10, windowHeight/2.3, 100, 100);
s5.play();
}
if(frameCount == 360) {
  image(i1, windowWidth/2.10, windowHeight/2.3, 100, 100);
s6.play();
}
if(frameCount == 420) {
  image(i2, windowWidth/2.10, windowHeight/2.3, 100, 100);
s7.play();
}
if(frameCount == 483) {
  image(i3, windowWidth/2.10, windowHeight/2.3, 100, 100);
s8.play();
}
}

// This is the function that will play the video
// Initially it fills the scene with a black ractangle, in order to darken it
// for the video
function videotime() {

  fill(0, 30*frameCount/500);
  rect(0, 0, width, height);

// This code dictates when the video starts and when it is paused
  if((frameCount >700) && (frameCount <3000)) {
        video1.play();
      image(video1, width/5, height/4);
        } else {
video1.pause();
}
}

