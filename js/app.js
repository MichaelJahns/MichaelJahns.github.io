'use strict';


//Declare Variables
var wowCount = 0;

alert ('Greetings stranger. It seems you have stumbled upon my Secret Garden.');

//Get Users Name and returns value to page
var user = prompt(' Before we begin, what may I ask is your name?');
document.getElementById("username").innerHTML = user;
console.log("The user input their name as " + user + ".s");


//Question Gate
var gate = prompt(' Well, ' + user + '! Are you ready to be dazzled!?').toLowerCase();

if (gate.toLowerCase() === "yes" || gate.toLowerCase() === "y")
{
alert("Well, " +user + " Let us begin!");
console.log(user + " is ready.");
}
else
{
alert("TOO BAD!");
console.log(user + " is not ready.");
};

//Question one
function Question1(bnum)
{
    if (bnum == 1)
    {
        var feedback = "*Nice one dumby.*";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
    if (bnum == 2)
    {
        var feedback = "*Almost.*";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
    if (bnum == 3)
    {
        var feedback = "*Nioce! You got it!!*";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
}
//Question two
function Question2(cnum)
{
    if (cnum == 1)
    {
        var feedback = "*Oh ho! A flatter!*";
        document.getElementById("questionTwoFeedback").innerHTML = feedback
    }
    if (cnum == 2)
    {
        var feedback = "*I've aged well for 25 havent I*";
        document.getElementById("questionTwoFeedback").innerHTML = feedback
    }
    if (cnum == 3)
    {
        var feedback = "*Back up.*";
        document.getElementById("questionTwoFeedback").innerHTML = feedback
    }
}
//Question three
function Question3(dnum)
{
    if (dnum == 1)
    {
        var feedback = "*Oh My Goodness! I like you.*";
        document.getElementById("questionThreeFeedback").innerHTML = feedback
    }
    if (dnum == 2)
    {
        var feedback = "*Wow! You really think so?*";
        document.getElementById("questionThreeFeedback").innerHTML = feedback
    }
    if (dnum == 3)
    {
        var feedback = "*Come now, don't be greedy.*";
        document.getElementById("questionThreeFeedback").innerHTML = feedback
    }
}

function Question4(fnum)
{
    if (fnum == 1)
    {
        var feedback = "*incorrect, but really who cares? the difference is so minor.*";
        document.getElementById("questionFourFeedback").innerHTML = feedback
    }
    if (fnum == 2)
    {
        var feedback = "*Correct!*";
        document.getElementById("questionFourFeedback").innerHTML = feedback
    }
    if (fnum == 3)
    {
        var feedback = "*What I look like? A hippie?*";
        document.getElementById("questionFourFeedback").innerHTML = feedback
    }
}
//WOWZA counter
function Counter()
{
    wowCount=wowCount +1;
    alert("WOW!!");
    document.getElementById("showCount").innerHTML = wowCount;
}