var song;
var song2;
var song3;
var beat;

function preload() {
  song = loadSound('bark1.mp3');
    song2 = loadSound('bark2.mp3');
    song3 = loadSound('bark3.mp3');
    beat = loadSound('beat.mp3');
    img = loadImage('sproed.png');
}
function setup() {

   beat.loop();
  song = loadSound('bark1.mp3');
  song2 = loadSound('bark2.mp3');
  createCanvas(1280, 720);
    image(img, 0, 0);

}

function keyTyped() {
  if (key === 'a') {
    song2.play();
  } else if (key === 's') {
    song.play();
  } else if (key === 'd') {
    song3.play();
  }

  }
