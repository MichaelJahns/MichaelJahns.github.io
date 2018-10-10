'use strict';

alert ('Greetings stranger. It is a great undertaking you are about to embark on.');

//Get Users Name and returns value to page
var user = prompt(' Before we begin, what may I ask is your name?');
document.getElementsByClassName("username").innerHTML = user;
console.log("The user input their name as " + user + ".s");


//Question Gate
var gate = prompt(' Well, ' + user + '! Are you ready to be tested!?').toLowerCase();

    if(gate === "yes" || gate === "y")
    {
        alert("Well, " +user + " Let us begin!");
        console.log(user + " is ready.");
    }
    else
    {
        alert("TOO BAD!");
        console.log(user + " is not ready.");
    };

var totalAttempts = 0;
var correctAnswers = 0;
//Question One
for(var q1AttemptsLeft = 5; q1AttemptsLeft >= 0; q1AttemptsLeft--){
var q1 = prompt('Your first question ' + user + ' Where did the Illustrious Michael J attend College?').toLowerCase();

    if(q1AttemptsLeft === -1)
    {
        alert("Oh! I'm sorry " + user + " you are incorrect, and you have used all of your guesses. Acceptable answers were (wsu, washington state university, and washington state)");
    }
    else
    {
        if(q1 === "wsu" || q1 === "washington state university" || q1==="washington state")
        {
            totalAttempts++;
            correctAnswers++;
            alert("Correct " + user + "!! He's not especially proud of that, but what else was he supposed to put on his about me page?");
            console.log(user + " is correct!!"+ user + " has submitted " + q1 + " as their answer");
        }
        else
        {   
            totalAttempts++;
            alert("I actually didnt go there. Go ahead and guess again, you've " + q1AttemptsLeft + " left.");
            console.log(user + " is incorrect."+ user + " has submitted " + q1 + " as their answer and has " + q1AttemptsLeft + " left.");
        }
    }
   
}
//Question Two
//Question Three
//Question Four
//Questtion Five
//Question Six
//Question Seven