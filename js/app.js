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
        var feedback = "Nice one dumby";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
    if (bnum == 2)
    {
        var feedback = "Almost";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
    if (bnum == 3)
    {
        var feedback = "Nioce!";
        document.getElementById("questionOneFeedback").innerHTML = feedback
    }
}
//Question two

//Question three


//WOWZA counter
function Counter()
{
    wowCount=wowCount +1;
    document.getElementById("showCount").innerHTML = wowCount;
}