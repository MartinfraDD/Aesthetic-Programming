## Mini Ex Monkeys 
By Magnus Laursen and myself 

For this week's assignment we were asked to create a collaborative piece of software which would in some way relate to literature. 
While discussing different ideas in our group, I believe Magnus brought up the 'Infinite monkey theorem', which argues that given infinite time, a monkey would be able to produce every piece of known literature by simply mashing a typewriter in a banana-fueled rampage. We both thought that this would be a fun concept to explore, so we decided to collaborate on this together. 

The end result is a program in which you assume the role of a dutiful monkey, tasked with producing Hamlet's famous soliloquy. For the sake of brevity, as you type, the program will eventually begin producing the correct piece. You are also able to start over by pressing the 'enter key' 


## [Fulfill your primate duty here](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/cb0222ff/Mini%20Exercises/Mini%20Ex%207/Literature/index.html).

![hello](https://i.imgur.com/Xpu08Wb.png) 

I believe that the program is quite close to our original vision, and we're both quite happy with the final result. Internally we've discussed some ways that the program could possibly be improved, for example, we were thinking it would be nice if only one word appeared at a time, which would give more of a 'typewritery' effect, but we were not able to achieve this in a way that would not include writing some quite messy code we felt. As a program, this project is highly conceptual in nature, and I do wonder whether or not the concept is successfully conveyed if one was not presented the context beforehand. I do believe that the visuals and sounds of the program give several hints as to what we are trying to achieve conceptually, perhaps especially the loud monkey sound (provided by an anonymous group member who will not be named) which plays when the user has successfuly recreated the soliloquy. 


### the process

In a lot of ways, the process of creating our program is not too different from the subject matter of our work. As it often took a certain degree of trial and error to get our program to function properly, at times we felt that we were just a pair of monkeys mashing our keyboards trying to muscle our way into a result that would compile properly. The greatest source of confusion for us was perhaps to wrap our heads around having text written in strings, rather than singular entities. We ran into a great deal of trouble having words displaying randomly on certain sections of the page, but thankfully we found a workable solution without too much compromise. A sample of this code can be seen below: 

```javascript
function keyPressed() {
image(bg, -50, -50);
    if (keyCode === 13) {
       Ding.play();
       taeller = 0;
       forskudtY = 0;

       playMode = 'sustain';
     } else {
       for (let x = 50; x < width-100; x += 110) {
         for (let y = 60; y < height-10; y += 70) {
            fill(0);
            textStyle(BOLD);
             text(random(words), x, y + forskudtY);
          }
       TypeWriter.play();
       playMode = 'sustain';
       taeller = taeller + 1;
       b = 50;
       h = 60;
       if (taeller > 20) {
         forskudtY = 70;
         text('To', b, h), text('be,', b + 110, h), text('or', b + 110 * 2, h), text('not', b + 110 * 3, h);
       }

       if (taeller > 40) {
          forskudtY = 140;
          text('to', 50, 130), text('be,', 160, 130), text('that', 270, 130), text('is', 380, 130);
       }

```
I'm actually quite happy with the overall simplicity of the code. Most of the syntax is stuff we've both used previously, and it feels great to begin to get the sense that your understanding of code has improved since when we started. It's great to get the sense that you're not always just a primate mashing away on a keyboard hoping to eventually recieve some gratification. 

