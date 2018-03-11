
## Smile

For this week's assignment we were tasked to create a piece of software, that would critically reflect on the rampant data capturing in digital culture. 

With this assignment in particular, I feel that there are so many ways to approach the topic, and having already looked at many of my peer's assignments, I feel it's so encouring to see all the creative ways people have expressed their feelings on this topic. For my own assignment, I have decided to focus on tracking the expressiveness of the face, focusing on smiling, 

#### A webcam is required for the program to work, and probably good lighting as well, for the tracking of expressions

## [Practice smiling here](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/4a715732/Mini%20Exercises/Ex%201/p5/Smile/index.html).
 
![hello](https://i.imgur.com/PqZLSdn.png) 

I think the 'message' of the program might be pretty apparent (If it works??). The program focuses on how we handle ourselves online, and the pressure that exists to put your best possible foot forward. In this program (If it works alright), the user will recieve both visual and auditory gratification from putting on a smile. A song will constantly be playing in the background, but it will be distorted and quiet if the user does not start smiling. Once the user begins to smile, a rose-tinted overlay will appear, accompanied by an ever increasing like-counter. In the lop left corner of the screen I've placed an imposing message that reads 'we see you', which both creates a bit of an uncomfortable atmosphere, as well as letting the user know that their face has been recognised by the software. The music that plays is a bit off-kilter as well, which I hope further supports the weird atmosphere. The more the user smiles, the more the music will approach its correct tempo and pitch, which may lead the user to pull some very exaggerated smiles, which I think is pretty funny on its own. I do feel a bit self-conscious about the overall message of the program, it kind of feels like a statement that has already been made many times, and likely better than what I've done as well. But I hope that you will still find merit in this program. 

I was not able to test this with any other webcams prior to publishing this, and even my own doesn't work 100% of the time. I would definitely have liked to have the parameters for when the user is smiling be more robust, so that it would not appear to fluctuate so much, and I hope that this is something that can be improved in the future. 

Another visual element I added is the sleeping cardboard character, whose movements also become more pronounced as the throbber progresses, indicating that the character is about to 'wake up', along with the rest of the program. 
The visuals of the throbber are accompanied by a short musical tune, which finishes at the exact point the throbber is completely full. I personally enjoy how both the visuals and the audio work together in giving the user a sense of the elapsed time. 

A large portion of my code works through frameCount in order to judge the passage of time, which controls both the music and the animated character. An excerpt of this can be seen below: 
```javascript
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

        for (var i = 0;i < er.length;i++) {

// what is below this only happens if the user smiles enough (if it worked better)

 if (-er[i].value * 30 < -8.) {
if (-er[i].value * 30 < -7.) {
}
```
I think perhaps what might be highlighted in this program, is both how tracking works on a technical level, but also how this tracking affects the way we carry ourself on social media and other online spaces. What I've created is pretty exaggerated in a lot of ways, and I hope that this along with the humourous aspect helps highlight the purpose of the software. 

P.S. I've been testing the smiling-registrating for ages now, and my entire face is so tired from smiling into my webcam all day. 
