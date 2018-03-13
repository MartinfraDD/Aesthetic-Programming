## Deep Seeing - just a placeholder, no peeking!

For this week's assignment, we were asked to create a project which involved some object-oriented program, wherein we utilize classes and other unfamiliar syntax (at least unfamiliar to me)
Another aspect of this assignment was that we were asked to reflect on the programmer's subjectivity, and what effect it may have on their projects. 

For my project, I have decided to create a small game about a deep sea diver who believes fish to be gross creatures. 


#### The game is played through the arrow keys. Chrome may be required to view the intro and outro. 

## This program has some issues running, try perhaps opening it and switching between tabs on your web browser, I hope it works! Or perhaps try reloading it.
## [Dive in here](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/302ef2ff/Mini%20Exercises/Mini%20Ex%205/sketch05/index.html).
 
![hello](https://i.imgur.com/9A2yXXs.png) 

I think the main focus of the game is to be humourous and to entertaining for a little bit, without having an overall message, I hope it justifies its own existance in the end. 
It is my hope that adding a short amount of context to the scenario of the game will make the whole program seem more complete, in a way. 
There's a variety of different fish present,  each moving at a slightly different speed. The game doesn't really get harder as it goes, but there is an increasing point-counter, my highscore is 1000.

In order to incorporate the goals of this assignment into my program, one of the first thing that was decided, was which kind of object that would be focused on. 
It was decided that this object would be a fish, which may sound complex, given that is a living animal, however, the fish that appear in this game are extremely abstracted and simplified to fit the needs of this game.
In the game, a fish is simply defined as a create that is able to move left or right at different speeds, which can appear at different heights and which can only touch divers. There are only six fish, and they all look weird. 

I think when discussing how the programmer's own subjectivity can affect the representation of certain things in a program, a fish is a rather uncontroversial thing to focus on. 
During our class discussion, I found it particularly intersting when the football game FIFA was brough up. In this game you have the choice to play as several real-world human beings, however, their characteristics
appear to be chosen only based on what is needed for the game, and what would create a balanced experience. It's never reflected what the football player likes to have for dinner, or at what time they have their nap, which are just some aspects which also make up a human. 
But how does one decide what makes a human? in FIFA, a human is a football machine, and in The SIMS, a human is a creature who is unable to operate an oven.
But if the goal truly is to create the closest possible approximation of a human within the functions of the game, then I feel many issues might arise. 
For example, the issue of representation might be present. When designers choose what characteristics to give their human characters, perhaps in a video game context, it will be heavily influenced by the designers, as well as the game itself. 
This could perhaps lead to certain people or demographics feeling misrepresented, even if the goal of the designers were not to create an acurae representation.
I think this topic bears a lot of discussion value both socially and politically, and I feel that it very is important to consider these things as a designer, both in terms of what people might say about your finished product, but perhaps also what the finished product might say about you.

Anyway, I made a fish game. 

Here is a sample of the code I wrote, this portion deals with how a fish is defined. 
```javascript
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

```
I hope I haven't rambled too much, and I apologise for potential grammatical errors. Hopefully this has been a fun experience for you, it was a lot of fun making this program. 

P.S. I've tried to be more clean with how I write code, trying to use correct indentation and such, I hope it helps make it more legible! 
