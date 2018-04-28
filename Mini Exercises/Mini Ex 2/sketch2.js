function preload() {
  soundFormats('mp3', 'ogg');
  reaction = loadSound('reaction.mp3');
  greeting = loadSound('greeting.mp3');
  happy = loadSound('happy.mp3');
    mean = loadSound("mean.mp3");
  gloatva = loadSound('gloatva.mp3');
    flatva = loadSound('flatva.mp3');
    windowva1 = loadSound('window1.mp3');
      windowva2 = loadSound('window2.mp3');
        incredible = loadSound('incredible.mp3');
          glass = loadSound('glass.mp3');
            gasp = loadSound('gasp.mp3');
        secondwindow = loadSound('otherwind.mp3')
        breaker = loadSound('break.mp3')
        noo = loadSound('noo.mp3')
          runno = loadSound('run.mp3')
          slam = loadSound('slam.mp3')
        doorknock = loadSound('doorknock.mp3')
  lookout = loadImage("lookout.png");
  hello = loadImage('greeting.png');
  happyimg = loadImage('happyimg.png');
  gloat = loadImage('gloat.png');
  cheapo = loadImage('cheapo.png');
  window1 = loadImage('window1.png');
  window2 = loadImage('window2.png');
  listen = loadImage('listen.png');
  glassreact = loadImage('glassreact.png');
  pureglass = loadImage('pureglass.png');
  otherwind = loadImage('otherwind.png');
  otherwind2 = loadImage('otherwind2.png');
  otherwind3 = loadImage('otherwind3.png');
  run = loadImage('run.png');
  angry = loadImage('angry.png');

}
function setup() {
  createCanvas(1280, 720);
  setTimeout(firstone, 0);
}



//first scene
function firstone() {

  background(100,502,225);
  textSize(30);
text('Use your mouse button to knock on your new neighbours door.', 220, 50);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 100, 150);

noloop()

}
function opendoor() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(lookout, 0, 0);
reaction.playMode('sustain');
reaction.play();
  setTimeout(sayhi, 1000);
noloop()

}
function sayhi() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(hello, 0, 0);
greeting.playMode('sustain');
greeting.play();
  setTimeout(justbought, 5000);
noloop()
}


function justbought() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(happyimg, 0, 0);
happy.playMode('sustain');
happy.play();
    setTimeout(brag, 4000);
noloop()
}

function brag() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(gloat, 0, 0);
gloatva.playMode('sustain');
gloatva.play();
    setTimeout(amazing, 5000);
noloop()
}

function amazing() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(happyimg, 0, 0);
incredible.playMode('sustain');
incredible.play();
    setTimeout(tap1, 5400);
noloop()
}

function tap1() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(window1, 0, 0);
windowva1.playMode('sustain');
windowva1.play();
        setTimeout(tap2, 3000);
noloop()
}
function tap2() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
   image(window2, 0, 0);
windowva2.playMode('sustain');
windowva2.play();
    setTimeout(listenup, 3000);
noloop()
}
function listenup() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);

   image(listen, 0, 0);


noloop()
}
function draw() {

   if ((mouseIsPressed) && ((mouseX > 720) && (mouseX < 820) && (mouseY > 400) && (mouseY < 550))) {
    ;
     background(100,502,225);
     strokeWeight(0);
   //wall
     fill(300,150,50);
     rect(350, 300, 500, 400);
   //grass
   fill(0,300,50);
   rect(0, 680, 1280, 40);
   //roof
   fill(500,50,50);
   triangle(300, 300, 600, 60, 900, 300);
   //window
   fill(20, 200, 500);
   rect(380, 400, 100, 150);
   rect(720, 400, 100, 150);
   //backdoor
   fill(50, 50, 50);
   rect(550, 530, 100, 150);
   //door
   fill(150, 70, 50);
   rect(550, 530, 10, 150);
    image(glassreact, 0, 0)
     gasp.playMode('sustain');
     gasp.play();
     setTimeout(purest, 3500);
noloop()
   }
}

function purest() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
image(pureglass, 0, 0);
glass.playMode('sustain');
glass.play();
 setTimeout(otherone, 3500);
noloop()
}

function otherone() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
image(otherwind, 0, 0);
secondwindow.playMode('sustain');
secondwindow.play();

noloop()
}

mouseClicked = function() {

   if ((mouseClicked) && ((mouseX > 380) && (mouseX < 480) && (mouseY > 400) && (mouseY < 550))) {
    ;
     background(100,502,225);
     strokeWeight(0);
   //wall
     fill(300,150,50);
     rect(350, 300, 500, 400);
   //grass
   fill(0,300,50);
   rect(0, 680, 1280, 40);
   //roof
   fill(500,50,50);
   triangle(300, 300, 600, 60, 900, 300);
   //window
   fill(20, 200, 500);
   rect(380, 400, 100, 150);
   rect(720, 400, 100, 150);
   //hole
   fill(50);
   beginShape();
   vertex(400, 450);
   vertex(450, 480);
   vertex(480, 470);
   vertex(400, 530);
   vertex(395, 420);
   vertex(440, 530);
   endShape(CLOSE);
   //backdoor
   fill(50, 50, 50);
   rect(550, 530, 100, 150);
   //door
   fill(150, 70, 50);
   rect(550, 530, 10, 150);
    image(otherwind2, 0, 0)
     breaker.playMode('sustain');
     breaker.play();
     setTimeout(nooo, 3500);
      } else {
        if ((mouseClicked) && ((mouseX > 550) && (mouseX < 650) && (mouseY > 530) && (mouseY < 680))) {
         ;
          background(100,502,225);
          strokeWeight(0);
        //wall
          fill(300,150,50);
          rect(350, 300, 500, 400);
        //grass
        fill(0,300,50);
        rect(0, 680, 1280, 40);
        //roof
        fill(500,50,50);
        triangle(300, 300, 600, 60, 900, 300);
        //window
        fill(20, 200, 500);
        rect(380, 400, 100, 150);
        rect(720, 400, 100, 150);
        //backdoor
        fill(50, 50, 50);
        rect(550, 530, 100, 150);
        //door
        fill(150, 70, 50);
        rect(550, 530, 100, 150);
          doorknock.playMode('sustain');
          doorknock.play();
          setTimeout(opendoor, 1000);
noloop()
   }
}
function nooo() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//hole
fill(50);
beginShape();
vertex(400, 450);
vertex(450, 480);
vertex(480, 470);
vertex(400, 530);
vertex(395, 420);
vertex(440, 530);
endShape(CLOSE);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
image(otherwind3, 0, 0);
noo.playMode('sustain');
noo.play();
 setTimeout(runny, 3000);
}
function runny() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//hole
fill(50);
beginShape();
vertex(400, 450);
vertex(450, 480);
vertex(480, 470);
vertex(400, 530);
vertex(395, 420);
vertex(440, 530);
endShape(CLOSE);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
image(run, 0, 0);
runno.playMode('sustain');
runno.play();
 setTimeout(noone, 500);
}
function noone() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//hole
fill(50);
beginShape();
vertex(400, 450);
vertex(450, 480);
vertex(480, 470);
vertex(400, 530);
vertex(395, 420);
vertex(440, 530);
endShape(CLOSE);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
 rect(550, 530, 10, 150);

  setTimeout(slammo, 2000);
noloop()
}
function slammo() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//hole
fill(50);
beginShape();
vertex(400, 450);
vertex(450, 480);
vertex(480, 470);
vertex(400, 530);
vertex(395, 420);
vertex(440, 530);
endShape(CLOSE);
//backdoor
fill(50, 50, 50);
 rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 10, 150);
image(angry, 0, 0);
setTimeout(slammo2, 300);

}
function slammo2() {
  background(100,502,225);
  strokeWeight(0);
//wall
  fill(300,150,50);
  rect(350, 300, 500, 400);
//grass
fill(0,300,50);
rect(0, 680, 1280, 40);
//roof
fill(500,50,50);
triangle(300, 300, 600, 60, 900, 300);
//window
fill(20, 200, 500);
rect(380, 400, 100, 150);
rect(720, 400, 100, 150);
//hole
fill(50);
beginShape();
vertex(400, 450);
vertex(450, 480);
vertex(480, 470);
vertex(400, 530);
vertex(395, 420);
vertex(440, 530);
endShape(CLOSE);
//backdoor
fill(50, 50, 50);
rect(550, 530, 100, 150);
//door
fill(150, 70, 50);
rect(550, 530, 100, 150);
slam.playMode('sustain');
slam.play();

}
}
