## Generative piece 

For this week's assignment we were tasked to create a pice of software in the category of generative art. What this means is that the computer must 
be given a certain amount of autonomy in generating what becomes the final piece. On top of this, we were also asked to give ourselves some rules to 
follow, as we created our piece. 

For my project I decided that it could be fun to incorporate camera tracking into the program once again. 


## A webcam is required for this to work
## [Have a look here](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/23ad1f66/Mini%20Exercises/Ex%201/p5/Generativity/libs/index.html).

![hello](https://i.imgur.com/vPEioyR.png) 

This program registers how things are moving in front of the webcam, and then reflects this information through changing the size and 
colour of the rectangles which locations correspond to where the movement took place on the webcam. Another aspect of my program is a 
very simple use of an oscillator, which will generate a random frequency. Originally I would have liked to have the frequency tied directly
to the movement of the subject, but I was unfortunately not able to get this working. 
In order to get my program running, I've relied a bit on third-party p5.js libraries and sample code, in order to get a basic understanding
of the core principles of how the program operates. By moving the mouse along the canvas, the user is also able to control the framerate a bit,
which changes the expression quite a bit, for example, a low framerate will bring a much less chaotic experience than a high one. 

I must admit that this program is also the result of some pretty major time restraints, which is why the program itself if pretty scaled back 
compared to what I would ideally have liked to produce, I hope however, that this short experience will still hold some merit for those who try it out. 

This program does not really have a strict narrative or message to convey, rather I think it's more appropriate as a short-lived audio-visual
experience, which hopefully will have a bit of novelty. With regard to the rules we were asked to give ourselves, I decided that my program
should only use one basic shape, it not be narrative-focused (I do that a lot), and that it should get all the information to process through a webcam.
When it came down to incorporate the rules, I quickly found that it was quite difficult to do independently, which led me to look for some
online resources to help. An upside to this, is that the process of coding was much more manageable than it would have otherwise bin, however,
the code (especially in the external libraries) seems to be a bit above my level of understanding, which is unfortunate I feel. 

I think the concept of ownership and authorship is particularly interesting when it comes to generative art, and perhaps even in the field of 
coding in general. As stated earlier, my program only functions due to the resources made available by third parties, and by looking at their code,
it becomes apparent that they too have relied on external resources. In that way, perhaps the classical understanding of what authorship and ownership are
can not always be directly applied to the world of digital art and such. It's also interesting to note how openness and sharing is encouraged 
within this ecosystem, which harkens back to the principles set forth by the free software movement. More specifically in terms of generative art, 
I do believe the authorship of the programmer is difficult to deny, seeing as they are the ones dictating the parameters and compositional values of
the software, but at the same time, a core principle of generative art is also to embrace the unpredictability of what the machine is able to generate. Thus 
the programmer and the machine are in a constant dialogue with one another, when making generative art. The machine will interpret the code, and the 
programmer will make several value-judgements, until they feel the piece is complete to them. In this way I suppose one could consider the machine
itself a co-author in this field. 




Here is a sample of the code I wrote, this portion is what calls the tracking functions as well as deciding the values of the rectangles. 
```javascript
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

```

Apologies for any typos or other grammatical errors 
