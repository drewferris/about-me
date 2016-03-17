var welcomeUser = prompt('Welcome User, what is your name?');
console.log('find out their name');

alert('Hello ' + welcomeUser + ' I am going to ask you some questions about myself.');

var numberCorrectAnswers = 0;
var numberTotalAnswers = 0;
var likeSoccer = prompt('Do I like soccer, yes or n?');
console.log('ask' + welcomeUser + 'if i like soccer');

if(likeSoccer.toUpperCase() === 'YES') {
  alert('You are right, I do like soccer!');
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  alert('You are wrong, soccer is my favorite sport.');
  numberTotalAnswers ++;
}

var favoriteTeam = prompt('Do I have a favorite team, yes or n?');
console.log('ask' + welcomeUser + 'if I have a favorite team');

if(favoriteTeam.toUpperCase() === 'YES') {
  alert('You are right, I do have a favorite team.');
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  alert('You are wrong, I do have a favorite team.');
  numberTotalAnswers ++;
}

var manchesterUnited = prompt('Is Manchester United your favorite team, yes or n?');
console.log('ask' + welcomeUser + 'if I like Manchester United');

if(manchesterUnited.toUpperCase() === 'YES') {
  alert('You are right Manchester United is my favorite team.');
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  alert('You are wrong, Manchester United is my favorite team.');
  numberTotalAnswers ++;
}

var wayneRooney = prompt('Is Wayne Rooney your favorite player, yes or n');
console.log('ask' + welcomeUser + 'if Wayne Rooney is favorite player');

if(manchesterUnited.toUpperCase() === 'YES') {
  alert('Yes, indeed Wayne Rooney is my favorite player.');
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  alert('You are wrong, Wayne Rooney is my favorite player.');
  numberTotalAnswers ++;
}

var liverPool = prompt('Will Manchester United beat Liverpool, yes or n?');
console.log('ask' + welcomeUser + 'if Manchester United will beat Liverpool');

if(liverPool.toUpperCase() === 'YES') {
  alert('Spot on mate!');
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  var whyNot = prompt('Why the f not?');
  numberTotalAnswers ++;
}
console.log('conditional about Man U vs. Liverpool');

alert('Liverpool is scheit!');

console.log('ask ' + welcomeUser + ' to guess a number');
var numGuesses = 0;
while(favoriteNum !== 16 && numGuesses < 4) {
  var favoriteNum = parseInt(prompt('What is my favorite number'));

  if (favoriteNum > 16) {
    alert('your guess ' + favoriteNum + ' is too high');
  } else if (favoriteNum < 16) {
    alert('your guess ' + favoriteNum + ' is too low' );
  } else if (isNaN(favoriteNum)) {
    // they didnt give us a number
  } else {
    alert('You guessed my favorite number!');
    numberCorrectAnswers ++;
  }
  numGuesses ++;
}
console.log('tell ' + welcomeUser + ' their score');
alert('Congratulations! You have finished my survey! You got ' + numberCorrectAnswers + ' out of ' + (numberTotalAnswers + numGuesses) + ' correct!' );
