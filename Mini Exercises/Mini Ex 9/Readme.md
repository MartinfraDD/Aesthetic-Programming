## Working With Flow Charts

For this weeks assignment we were asked to create a variety of flowcharts, both individually and in groups, which would visualise 
either past or future mini exercises. In this Readme I will first focus on my individually made flowchart, and then the two group flowcharts
after that. 



### Individual flowchart:

In approaching our individual work, we were asked to use our most complex past mini-ex to visualise through our flowchart. For this reason 
I have decided to focus on my fifth mini exercise "Deep Seeing", which was originally done with a focus on object-oriented programming.
#### [Here is a link to the page](https://github.com/MartinfraDD/Aesthetic-Programming/blob/master/Mini%20Exercises/Mini%20Ex%205/Readme.md).
I believe we were told at one point, that we should design our flowcharts with the condition that our mothers should be able to understand the program, which
is something I've attempted to do here:

![hello](https://i.imgur.com/JElqUaT.png) 


I think it's been interesting to see how other's have tackled their flowcharts, seeing as some has taken a very technical focus, which 
explores the programs functions on a detailed level, while my own flowchart simply conveys the functions on a perhaps more superficial level,
which hopefully everyone can understand. Seeing as I my focus was on my most technically complex program, it's funny how simplified one can make it. 

I wondered for a while about how much should be included in this flowchart, for example, each fish will have a randomly selected appearance 
based on several different illustrations. I chose not to include this aspect in the flowchart, since it was not required for people to understand
how the program functions, instead I've just written that "random fish are spawned". 

While I do believe that something is gained through making the program a lot more understandable through this heavily simplified flowchart, 
something is also lost, mainly the smaller details of how the program functions. Thus this flowchart has become more of a way to visualise 
how the game works, rather than a more educational work, which could give others insight into each process of the program. I am unsure 
if one approach is better than the other, but I do think this is an important thing to reflect upon when deciding how to approach making a flowchart.
Ultimately, I suppose my point is just that one should fit their flowchart to the context of which it is needed. In my case, I'll try to see if my mother can decipher my flowchart. 

### group flowcharts:

My group and I met this monday to discuss this aspect of the mini exercise. We had a pretty good time coming up with ideas, and the result of our meeting can be seen in these two flow charts, the first being a Pac-Man-like game:
![hello](https://cdn.discordapp.com/attachments/413663144389509122/435448445499736075/Flowchart_of_PacMan.jpg) 

Our idea for this was to create a Pac-Man game in which we added a new element in the form of a light resistor (connected through Arduino), which the player would
be able to control with their hand. The look of the game and the behaviour of the enemies changes according to how the user affects the light resistor.I do not believe we were able to agree on the exact effect of the light, but one could for example imagine that placing your hand over the light resistor would darken the Pac-Man stage, and stop the movement of enemies. 
Since we have not done any coding on this program as of yet, our flowchart does not reflect any specific code syntax either. 
It could be an interesting challenge for us to try to code the program, following the structure presented in this program, since
we have never tried that kind of workflow before. 

I think the most challenging technical challenges which arise are often those tat catch you completely off guard. 
- For this program we were thinking of using the play library, so we should be careful to make sure that none of our current libraries 
conflict with play.js 
- programming the AI of the ghosts in Pacman is likely also a big challenge, especially if we wish for them to act more intelligently, rather than going in random directions when hitting walls. To help with this issue, we could consult other's who have programmed similar games in JavaScript.
- We should be careful when looking at the code of other JavaScript Pac-Man clones, so that we do not rely too heavily on the pre-existing work of others. 


our second flowchart: 

![hello](https://cdn.discordapp.com/attachments/413663144389509122/435448438013034526/Flowchart_of_Chicago_Police.jpg) 

For this program we were thinking of creating sort of a fake Facebook website, which would generate profiles based on an API providing the information of convicted criminals in Chicago. The mugshot would be the profile picture, and the persons personal information would be displayed as well. In their friends list, you'd be able to click on the profiles of other inmates, and see their profiles. We would have to acquire the proper CSS-styling in order for it to look authentic. 

I think something that attracted us to this idea was just the weird morality of it all. Should this data be accessible? Is it ethical to use it for such purposes? what purposes would be ethical? 

Besides moral and legal qualms, there are also several technical challenges which could arise here:
- The state of the API. We currently do not know how accessible this API is, or if has any guides or resources available online. 
- Finding the proper Facebook styling may be difficult, it'd be very unfortunate if we did not get the look right. 
- Displaying the API data in the right places. It should hopefully be quite indistinguishable from the proper facebook interface in the end. 

If we choose to describe an algorithm as a recipe for the computer, a flowchart can in many ways function in the same way for a human. 
However, while the computer will have quite a rigid understanding of an algorithmic process, the human might have several different interpretations, which may even conflict with one another. Depending on the amount of detail in a flowchart, the user may have to fill in a lot of the blanks using their own mental faculties, rather than the flowchart providing a rigid step-by-step of how the program looks and functions. You could say that the same principles can apply to when we follow a recipe when cooking. You'll often see that 
two people can follow instructions quite differently, one might be very methodical, while the other may refer to the recipe more loosely, perhaps even adding new ingredients to the mix. In this case you could argue that personal taste and habits have appeared as hidden variables. Were this situation applied to computers, the computers would have needed two completely different algorithms to produce different results. Just as when we created our florcharts, those who create algorithms also partake in a process of abstracting and applying their own personal tastes and values to the process which they are writing, this process will then be repeated endlessly until the algorithm itself is changed. In the case of a flowchart, one is always required to keep interpreting and thinking critically of what it is they are being presented, rather than following a rigid structure of rules and variables. 
