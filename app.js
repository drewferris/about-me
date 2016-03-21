var welcomeUser = prompt('Welcome User, what is your name?');
console.log('find out their name');

alert('Hello ' + welcomeUser + ' I am going to ask you some questions about myself.');

var numberCorrectAnswers = 0;
var numberTotalAnswers = 0;

var arrayLocation = [];

function soccerlike(){
  var pTagOne = document.getElementById('ans-one');
  var likeSoccer = prompt('Do I like soccer, yes or n?');
  arrayLocation.push(likeSoccer);
  console.log('ask' + welcomeUser + 'if i like soccer');

  if(likeSoccer.toUpperCase() === 'YES') {
    pTagOne.textContent = 'You are right, I do like soccer!';
    numberCorrectAnswers ++;
    numberTotalAnswers ++;
  } else {
    pTagOne.textContent = 'You are wrong, soccer is my favorite sport.';
    numberTotalAnswers ++;
  }
};
soccerlike();

function teamFavorite(){
var pTagTwo = document.getElementById('ans-two');
var favoriteTeam = prompt('Do I have a favorite team, yes or n?');
arrayLocation.push(favoriteTeam);
console.log('ask' + welcomeUser + 'if I have a favorite team');

if(favoriteTeam.toUpperCase() === 'YES') {
  pTagTwo.textContent = 'You are right, I do have a favorite team.';
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  pTagTwo.textContent = 'You are wrong, I do have a favorite team.';
  numberTotalAnswers ++;
}
};
teamFavorite();

function unitedManchester(){
var pTagThree = document.getElementById('ans-three');
var manchesterUnited = prompt('Is Manchester United your favorite team, yes or n?');
arrayLocation.push(manchesterUnited);
console.log('ask' + welcomeUser + 'if I like Manchester United');

if(manchesterUnited.toUpperCase() === 'YES') {
  pTagThree.textContent = 'You are right Manchester United is my favorite team.';
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  pTagThree.textContent = 'You are wrong, Manchester United is my favorite team.';
  numberTotalAnswers ++;
}
};
unitedManchester();

function rooneyWayne(){
var pTagFour = document.getElementById('ans-four');
var wayneRooney = prompt('Is Wayne Rooney your favorite player, yes or n');
arrayLocation.push(wayneRooney);
console.log('ask' + welcomeUser + 'if Wayne Rooney is favorite player');

if(wayneRooney.toUpperCase() === 'YES') {
  pTagFour.textContent = 'Yes, indeed Wayne Rooney is my favorite player.';
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  pTagFour.textContent = 'You are wrong, Wayne Rooney is my favorite player.';
  numberTotalAnswers ++;
}
};
rooneyWayne();

function poolLiver(){
var pTagFive = document.getElementById('ans-five');
var liverPool = prompt('Will Manchester United beat Liverpool, yes or n?');
arrayLocation.push(liverPool);
console.log('ask' + welcomeUser + 'if Manchester United will beat Liverpool');

if(liverPool.toUpperCase() === 'YES') {
  pTagFive.textContent = 'Spot on mate!';
  numberCorrectAnswers ++;
  numberTotalAnswers ++;
} else {
  var whyNot = prompt('Why the f not?');
  numberTotalAnswers ++;
}
console.log('conditional about Man U vs. Liverpool');


pTagFive.textContent = 'Liverpool is scheit!';

};
poolLiver();

function numFavorite(){
var pTagSix = document.getElementById('ans-six');
console.log('ask ' + welcomeUser + ' to guess a number');
var numGuesses = 0;
while(favoriteNum !== 16 && numGuesses < 4) {
  var favoriteNum = parseInt(prompt('What is my favorite number'));
  arrayLocation.push(favoriteNum);

  if (favoriteNum > 16) {
    pTagSix.textContent = 'your guess ' + favoriteNum + ' is too high';
  } else if (favoriteNum < 16) {
    pTagSix.textContent = 'your guess ' + favoriteNum + ' is too low';
  } else if (isNaN(favoriteNum)) {
    // they didnt give us a number
  } else {
    pTagSix.textContent = 'You guessed my favorite number!';
    numberCorrectAnswers ++;
  }
  numGuesses ++;
}
console.log('tell ' + welcomeUser + ' their score');
alert('Congratulations! You have finished my survey! You got ' + numberCorrectAnswers + ' out of ' + (numberTotalAnswers + numGuesses) + ' correct!' );

};

numFavorite();
