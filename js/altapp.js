'use strict';

alert ('Greetings stranger. It is a great undertaking you are about to embark on.');

//Get Users Name and returns value to page
var user = prompt(' Before we begin, what may I ask is your name?');
document.getElementById('user').innerHTML = user;
console.log('The user input their name as ' + user + '.s');

//Question Gate
var gate = prompt(' Well, ' + user + '! Are you ready to be tested!?').toLowerCase();

if(gate === 'yes' || gate === 'y')
{
  alert('Well, ' +user + ' Let us begin!');
  console.log(user + ' is ready.');
}
else
{
  alert('TOO BAD!');
  console.log(user + ' is not ready.');
}

var totalAttempts = 0;
var correctAnswers = 0;
// Question One
function q1run() {
  for(var q1AttemptsLeft = 6; q1AttemptsLeft >= 0; q1AttemptsLeft--){
    var q1 = prompt('Your first question ' + user + ' Where did the Illustrious Michael J attend College?').toLowerCase();

    if(q1AttemptsLeft === 0)
    {
      alert('Oh! I\'m sorry ' + user + ' you are incorrect, and you have used all of your guesses. Acceptable answers were (wsu, washington state university, and washington state)');
      document.getElementById('q1CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if(q1 === 'wsu' || q1 === 'washington state university' || q1==='washington state')
      {
        totalAttempts++;
        correctAnswers++;
        alert('Correct ' + user + '!! He\'s not especially proud of that, but what else was he supposed to put on his about me page?');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q1 + ' as their answer');
        q1AttemptsLeft =0;
        document.getElementById('q1CheckBoard').src = 'img/Right.png'
      }
      else
      {
        totalAttempts++;
        alert('I actually didnt go there. Go ahead and guess again, you\'ve ' + q1AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q1 + ' as their answer and has ' + q1AttemptsLeft + ' left.');
      }
    }

  }
}
// Question Two
function q2run() {
  for(var q2AttemptsLeft = 3; q2AttemptsLeft >= 0; q2AttemptsLeft--){
    var q2 = Number(prompt('Next question ' + user + '. How many fingers does Michael J have?').toLowerCase());

    if(q2AttemptsLeft === 0)
    {
      alert('Oh! I\'m sorry ' + user + ' you are incorrect, and you have used all of your guesses. Michael just has the usual ten fingers. He\'s nothing special.)');
      document.getElementById('q2CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if(q2 === 10)
      {
        totalAttempts++;
        correctAnswers++;
        alert('That is correct ' + user + '!! Michael J has ten beautifully kept and maintained fingers.?');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q2 + ' as their answer');
        q2AttemptsLeft = 0;
        document.getElementById('q2CheckBoard').src = 'img/Right.png'
      }
      if(q2 > 10)
      {
        totalAttempts++;
        alert('Nope! Your guess was too high. Go ahead and guess again, you\'ve ' + q2AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q2 + ' as their answer and has ' + q2AttemptsLeft + ' left.');
      }
      if(q2 < 10)
      {
        totalAttempts++;
        alert('Wrong! Your guess is too low, try again, you\'ve ' + q2AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q2 + ' as their answer and has ' + q2AttemptsLeft + ' left.');
      }
    }

  }
}
//Question Three
function q3run() {
  var words = ['maelstrom', 'doody', 'phantasmagoric', 'chaos', 'buttress', 'olive', 'fjord']
  for(var q3AttemptsLeft = 6; q3AttemptsLeft >= 0; q3AttemptsLeft--)
  {
    var q3 = prompt(user + ', can you guess one of Michael J\s favorite words?').toLowerCase();

    if(q3AttemptsLeft === 0)
    {
      alert('Oh! I\'m sorry ' + user + ' you failed to guess any of Michael J\s favorite words. Acceptable answers were (maelstrom, doody, phantasmagoric, chaos, buttress, olive, and fjord.)');
      document.getElementById('q3CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if (words.includes(q3))
      {
        totalAttempts++;
        correctAnswers++;
        alert('Correct ' + user + '!! Its not really like Michael J likes the way that word sounds, he just the way it looks.');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q3 + ' as their answer');
        document.getElementById('q3CheckBoard').src = 'img/Right.png'
        q3AttemptsLeft = 0;
      }
      else
      {
        totalAttempts++;
        alert('Michael J doesn\'t love that word, go ahead and guess again, you\'ve ' + q3AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q3 + ' as their answer and has ' + q3AttemptsLeft + ' left.');
      }
    }

  }
}
// Question Four
function q4run() {
  for(var q4AttemptsLeft = 6; q4AttemptsLeft >= 0; q4AttemptsLeft--){
    var q4 = prompt('Okay, here is a toughie ' + user + '. What did Michael J claim was his favorite color as a child?').toLowerCase();

    if(q4AttemptsLeft === 0)
    {
      alert('Its okay ' + user + ' I didn\'t expect you to get it. Michael J\'s favorite color as a child was rainbow. Right? You werent going to get that.');
      document.getElementById('q4CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if(q4 === 'rainbow')
      {
        totalAttempts++;
        correctAnswers++;
        alert('... how did you actually get that? Its not like Michael J tells alot of people that.');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q4 + ' as their answer');
        q4AttemptsLeft = 0;
        document.getElementById('q4CheckBoard').src = 'img/Right.png'
      }
      else
      {
        totalAttempts++;
        alert('Hard nope. You aren\'t going to get this one, you\'ve only ' + q4AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q4 + ' as their answer and has ' + q4AttemptsLeft + ' left.');
      }
    }

  }
}
// Question Five
function q5run() {
  for(var q5AttemptsLeft = 6; q5AttemptsLeft >= 0; q5AttemptsLeft--){
    var q5 = prompt(' Let\'s get to the fun stuff ' + user + '.. Can you name one of Michael J\'s favorite three swear words.').toLowerCase();

    if(q5AttemptsLeft === 0)
    {
      alert('You guessed a bunch of really foul stuff' + user + '... Michael J\'s favorite swear words are \'Heck, Pumpkin Head, and Darn Tooting\' in that order.\'');
      document.getElementById('q5CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if(q5 === 'heck' || q5 === 'pumpkin head' || q5=== 'yikes')
      {
        totalAttempts++;
        correctAnswers++;
        alert('Heck ya ' + user + '!! You sure aren\'t a pumpkin head!');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q5 + ' as their answer');
        q5AttemptsLeft = 0;
        document.getElementById('q5CheckBoard').src = 'img/Right.png'
      }
      else
      {
        totalAttempts++;
        alert('...no... just no. Yikes. ' + q5AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q5 + ' as their answer and has ' + q5AttemptsLeft + ' left.');
      }
    }

  }
}
// Question Six
function q6run() {
  for(var q6AttemptsLeft = 6; q6AttemptsLeft >= 0; q6AttemptsLeft--){
    var q6 = prompt('Ramping down ' + user + '. How many times has Michael J cried last month?').toLowerCase();

    if(q6AttemptsLeft === 0)
    {
      alert('You\'ve a rather warped opinion me of ' + user + '. No, Michael J has cried (just enough to be healthy but not enough to be excessive)');
      document.getElementById('q6CheckBoard').src = 'img/Wrong.png'
    }
    else
    {
      if(q6 === 'just enough to be healthy but not enough to be excessive')
      {
        totalAttempts++;
        correctAnswers++;
        alert('Yup, Thats just cause Michael J is a real down to earth guy ' + user + '.');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q6 + ' as their answer');
        q6AttemptsLeft = 0;
        document.getElementById('q6CheckBoard').src = 'img/Right.png'
      }
      if(q6 > 10)
      {
        totalAttempts++;
        alert('I think to think Michael J has a bit more composure than that ' + user + 'try again, you\'ve ' + q6AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q6 + ' as their answer and has ' + q6AttemptsLeft + ' left.');
      }
      if(q6 < 10)
      {
        totalAttempts++;
        alert('What do you think Michael J is made of stone? Try agian ' + user + '.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q6 + ' as their answer and has ' + q6AttemptsLeft + ' left.');
      }
    }

  }
}
// Question Seven
function q7run() {
  for(var q7AttemptsLeft = 6; q7AttemptsLeft >= 0; q7AttemptsLeft--){
    var q7 = prompt('Last Question ' + user + '. And this is the big one. Would you recommend Michael J to a friend?').toLowerCase();

    if(q7AttemptsLeft === 0)
    {
      alert('No one will ever see this text ' + user + '. Its a secret song between you and I. I love you');
      document.getElementById('q7CheckBoard').src = 'img/Wrong.png'
    }
    if(q7AttemptsLeft === 2)
    {
      alert('You are not being kind, but I believe you could be if you tried. Here you are runnning low on guesses ' + user + '. have some more. *Guesses +7"* ');
      q7AttemptsLeft += 7;
      console.log(user + ' is incorrect.'+ user + ' has submitted ' + q7 + ' as their answer and has ' + q7AttemptsLeft + ' left.');
    }
    else
    {
      if(q7 === 'yes' || q7 === 'y')
      {
        totalAttempts++;
        correctAnswers++;
        alert('Aw! you are so sweet! I like you too ' + user + '.');
        console.log(user + ' is correct!!'+ user + ' has submitted ' + q7 + ' as their answer');
        q7AttemptsLeft = 0;
        document.getElementById('q7CheckBoard').src = 'img/Right.png'
      }
      else
      {
        totalAttempts++;
        alert('Careful user, you run the risk of hurting Michael J\'s feeling. Go ahead and try again '+ user + ', you\'ve ' + q7AttemptsLeft + ' left.');
        console.log(user + ' is incorrect.'+ user + ' has submitted ' + q7 + ' as their answer and has ' + q7AttemptsLeft + ' left.');
      }
    }
  }
}
//Updates the HTML Scoreboard
document.getElementById('finalScore').innerHTML = correctAnswers;
document.getElementById('totalAttempts').innerHTML = totalAttempts;
