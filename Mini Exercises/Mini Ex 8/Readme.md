## Motivation(?) generator
Frederik la Cour, Mark Staun Poulsen and Martin Hansen

Similarly to last week, the assignment we were given for this week was a collaborate one, this time with the theme of API integration, which proved to be tricky in ways that we perhaps did not entirely expect. This time around I collaborated with Mark and Frederik, who are an absolute force of nature when it comes to coding. 

I believe our goal with this week's assignment was to create something that was able to visualise the API interaction in some way. For this reason, we were particularly drawn to the GIPHY API, which gave us access to a frequently updated database of user-submitted gifs. Giphy, while having a mother lode of gifs, also provides quite a beginner-friendly API, which was quite easy to set up. 

The result of our labours is a program which will randomly select gifs, based on a variety of keywords we felt bore positive meaning. The keywords are displayed underneath its corresponding gif. 

## [Have a look here](https://cdn.rawgit.com/MartinfraDD/Aesthetic-Programming/2a2d2175/Mini%20Exercises/Mini%20Ex%208/API/index.html).

![hello](https://i.imgur.com/iaahDZh.png) 

### the process

Working with Frederik and Mark was quite an enjoyable and educational experience for me. It is my understanding that they've both had some experience with coding before this course, so it was very cool to see how they approach coding. While I spent a lot of my time in this process trying to wrap my head around the code, I do feel that I've now learned a lot as a result of this experience. 

Our method for working on this assignment was quite interesting, instead of deciding on a grand idea or concept from the get-go, we instead opted to build our program in layers, meaning that our concept ended up being developed alongside the program, rather than independently of one another. 

The Giphy API gives us access to user-submitted gifs and MP4s based on a variety of different variables, including (but not limited to) keywords, filesize and dimensions. It also appears that you have access to information showing the popularity and upload date of the gif, but this is not something we explored too deeply. Even though the Giphy API is quite user-friendly, we did have some difficulty in certain aspects. For example, we learnt that since the gifs are not stored locally on the machine, we would not be able to apply some filters or effects to the media, we were also not able to incorporate the Gif.js library, which we had otherwise thought to be ideal. These factors lead us to change the direction of our program a bit throughout the process. 

We also experimented a bit with object-oriented programming in this context, we tried to incorporate a class-based system to store the gifs in, but ultimately we abandoned this idea, seeing as the functions of the API changed the behaviour of the program in unexpected ways. We have chosen to include this code in the .js file, just so people can see a bit of our process through the code. 

A snippet of the code can be seen below: 


```javascript
function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.position(0,0);
  getRandom();    //These two functions are first called upon once during setup.
  askGiphy();

  setInterval(getRandom, 15000); //They are then called upon again every 15 seconds.
  setInterval(askGiphy, 15000);
}


function getRandom() {
  removeElements(); //Removes previous DOM-elements: gifs and text.
  for(let i = 0; i < 6; i++) {
    word[i] = random(words.encouraging_words); //Six random words are picked out from the JSON-file over this for-loop
    let ord = createP(word[i]);
    ord.position(50+ 200 * i, 350); //The words are positioned apart from one another using the i-value to multiply.
  }
}

function askGiphy() {
  for(i = 0; i < 6; i++) { //The six random words are then used here to get six completely different JSON-files.
    data[i] = loadJSON("http://api.giphy.com/v1/gifs/search?q=" + word[i] + "&api_key=dc6zaTOxFJmzC&limit=25", gotData); //The callback function makes it so that gotData will run for every iteration of the loop right after this line here.
  }
}
```
### some rambling

While we did not discuss the meaning or message of our final result in the group too much, I do think we each kind of have an idea of what can be said from it. I personally find the contradiction which often occours between the keyword and the gif being displayed. While the keywords are all what we've deemed positive, the user-submitted gifs will often use them ironically or in other humourous ways. There is a great disparity between the words and what the users have attached these words to. 

The subjectivity of how we selected these words is also interesting to point out. While we all agreed that these words were all positive, this may not be the case for everyone. While the program may be intended to display encouraging and positive gifs, the true impact of the final product is left for the users to decide, which can often lead to unexpected results. 

I am reminded of some heavily user-based digital initiatives of the past. You may have heard of the Microsoft powered Tay AI, which was a Twitter bot made to emulate the online behaviour of a teenage girl, while being dynamically influenced by the users who interact with it (similar to [Cleverbot](http://www.cleverbot.com/)) What ended up happening, is that the users influenced the AI to such an extreme degree, that the AI began spouting racial explitives and other wildly extreme comments, which prompted Microsoft to lock the account indefinitely. It's interesting to think about the relationship between providers and users in this context, where the users are able to influence the program as much as the providers themselves. What is intended of the program may be wildly different from the reality which is formed, and it may even make an innocent robot yell at minorities. 

![TayAI](https://i.imgur.com/UaecgZH.png) 
Tay never ttyl'd me 
