'use strict';


//Declare Variables
var wowCount = 0;

//Get Users Name and return to page
var user = prompt('Yo whats playing player.');
document.getElementById("username").innerHTML = user;



function Counter()
{
    wowCount=wowCount +1;
    document.getElementById("showCount").innerHTML = wowCount;
}