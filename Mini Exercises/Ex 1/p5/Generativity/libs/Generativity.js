// Defining various variables
var capture;
var previousPixels;
var flow;
var w = 580,
    h = 480;
var step = 15;
var osc;
var x = 0;


function setup() {
    createCanvas(w, h);
// The document is set to capture video from a webcam
    capture = createCapture(VIDEO);
//FlowCalculator refers to an external library, which focuses on registering how
//movement has changed since the last frame that was drawn.
    flow = new FlowCalculator(step);
    x = width / 2;
    y = height;
// The Oscillator is created. This means that the program will generate a
//sound at a certain frequency, which will be defined later.
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.amp(0);
    osc.start();

}

function draw() {
//the oscillator is set to generate a random frequency, which should make
// for a more chaotic experience
 osc.freq(random(100,300));
 osc.amp(0.2);
capture.loadPixels();
      if (previousPixels) {
        //the differences and movements between frames are registered
        flow.calculate(previousPixels, capture.pixels, capture.width, capture.height);
        }
previousPixels = copyImage(capture.pixels, previousPixels);

background(10,50);
//quite a bit of this is unfortunately beyond me, since I have taken a lot of
//the following from third party libraries
      if (flow.flow && flow.flow.u != 0 && flow.flow.v != 0) {
          flow.flow.zones.forEach(function (zone) {
          // the area and mass of the rectangles seem to be defined within these parameters.
          stroke(map(zone.u, -step, +step, 51, 1055, 153),
          map(zone.v, -step, +step, 255, 0), 0);
          // a rectangle is drawn in accordance with the above parameters.
          strokeWeight(random(1,10));
          //The size and dimensions of the rectangle are decided based on movements
          //registered from the webcam

          rect(zone.x-50, zone.y, zone.x + zone.u-320, zone.y + zone.v-250);
          capture.hide();
          // The frameRate is tied to the x-coordinates of the mouse, so that the user
          //is able to control the experience a bit.
              frameRate(mouseX+10);

              while (x <= width) {
                fill(0, 0, 0);
                x = x + 50;
              }
            })

            }
  }
