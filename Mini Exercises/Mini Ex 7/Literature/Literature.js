var sourceText = "To be, or not to be, that is the question Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep No more; and by a sleep, to say we end the heart-ache, and the thousand natural shocks that Flesh is heir to? 'Tis a consummation devoutly to be wished. Be all my sins remember'd";
var words = sourceText.split(" ");
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(255);
    text(words[i], random(width), random(height));
  }
}
