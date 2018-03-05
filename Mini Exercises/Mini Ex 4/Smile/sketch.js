// naming variables, tracking seems to be enabled here
var ctracker;
var song;
var ec = new emotionClassifier();
ec.init(emotionModel);
var emotionData = ec.getBlank();

//loading all media in advance
function preload() {
    song = loadSound('mars.mp3');
    img = loadImage('rose.png');
    img2 = loadImage('seeyou.png');
    img3 = loadImage('likes.png');
}


// Setting up the program
function setup() {

song = createAudio('mars.mp3');
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(1000, 900);
    videoInput.position(0, -80);
    videoInput.id("v");
    var mv = document.getElementById("v");
    mv.muted = true;


    // The canvas is created
    var cnv = createCanvas(1000, 900);
    cnv.position(0, -160);

    // setting up the camera tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);

}
  function draw() {
push();
    clear();
// different parameters for the camera tracking are defined
    var positions = ctracker.getCurrentPosition();
    for (var i=0; i<positions.length -3; i++) {
                image(img2, 50, 200);
    }

    var cp = ctracker.getCurrentParameters();
    var er = ec.meanPredict(cp);

    if (er) {
        // angry=0, sad=1, surprised=2, happy=3
        for (var i = 0;i < er.length;i++) {

// what is below this only happens if the user smiles enough (if it worked better)

 if (-er[i].value * 30 < -8.) {
if (-er[i].value * 30 < -7.) {
// the transparency of the overlaid image is done here
tint(255, 5+frameCount);
     image(img, 0, 50);
     stroke(50);

pop();
// the volume is set to increase the more you smile, based on tracking data
song.volume(er[i].value * 30/35);
// the speed is set to increase the more you smile, based on tracking data
song.speed(er[i].value * 30/28);
song.loop();
     image(img3, 20, 400);
// Lastly the 'like-counter', it just increases with the framecount
     fill(59, 89, 152);
  textSize(40);
text(frameCount, 120, 460, );
// A bunch of end statements, I'm not sure why I needed this many.
// must be some sloppy code
}
}
}
}
}
// Thank you for reading this! 
