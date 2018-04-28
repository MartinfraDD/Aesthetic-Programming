
## Throbber Friend 
For this week’s assignment we were asked to create a program in which the concept of temporality would be explored through the use of a throbber. For my project I wanted to create something that was appealing both musically and aesthetically, and I hope I've achieved this in some aspect. 
I've called my project 'Throbber Friend', and it can be accessed through the link below. 
## [Become acquainted here!](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/ff553ee4/Mini%20Exercises/Ex%201/p5/Files/index.html).
 


![hello](https://i.imgur.com/Dm4QLMw.png) 

For my throbber I decided that I'd like to try a circular design, wherein the user gets a sense of how much loading is left at all times. The throbber does not move at a constant pace, but instead gradually becomes faster and faster until it is finished 'throbbing'. I feel that it would be satisfying for a user, to see that the loading was increasing in speed over time, instead of going at a constant pace. 
Another visual element I added is the sleeping cardboard character, whose movements also become more pronounced as the throbber progresses, indicating that the character is about to 'wake up', along with the rest of the program. 
The visuals of the throbber are accompanied by a short musical tune, which finishes at the exact point the throbber is completely full. I personally enjoy how both the visuals and the audio work together in giving the user a sense of the elapsed time. 

A large portion of my code works through frameCount in order to judge the passage of time, which controls both the music and the animated character. An excerpt of this can be seen below: 
```javascript
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
```
Perhaps frameCount is not an ideal approach to creating a throbber, if one had a real program that they wanted to load, considering that it may not give an accurate image of the actual loading that is remaining. In its current state, the program I've made will only begin after the 'artificial' throbber has completed its cycle. I think if the goal was effectiveness, this would perhaps not be a good approach. But if the throbbers visual expression was instead an integrated and enjoyable part of the experience of the program, perhaps people would be more lenient to longer waiting times. 

I personally often use Youtube in my free time to watch various videos, and I've become extensively familiar with the buffering throbber that is present on their site, when the video needs a little longer to present itself. I think their throbber has quite a nice visual expression, it's got a nice sense of momentum behind it, and it has very fluid animation. This throbber does not give much indication of how much time has passed, or how much time may be left to buffer. This may prove to be frustrating at times for the user, but perhaps it'd be an even larger source of frustration, if the throbber provided information that was not always accurate. 

Oftentimes in our day-to-day lives, waiting around is not the most desirable activity to partake in, which is perhaps why we see so much effort put into making throbbers and loading icons more appealing and varied to look at. It must be a difficult balance to strike for designers, when deciding how to present their loading icons, should they be informative or vague? Which would prove more frustrating? Should the loading happen behind the scenes altogether? 

I think my throbber could be seen as incredibly annoying and slow, if one had to encounter it often in their everyday lives. I feel that perhaps my throbber may be more suited for an activity you'd choose to do at your leisure, in a context where the throbber itself becomes an interwoven part of the experience itself, rather than just being a barrier to it. 

![hello](https://i.imgur.com/t3GU1Ki.png)
