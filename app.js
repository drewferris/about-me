var welcomeUser = prompt('Welcome User, what is your name?');
console.log('find out their name');

alert('Hello ' + welcomeUser + ' I am going to ask you some questions about myself.');

var likeSoccer = prompt('Do I like soccer, yes or n?');
console.log('ask' + welcomeUser + 'if i like soccer');

if(likeSoccer.toUpperCase() === 'YES') {
  alert('You are right, I do like soccer!');
} else {
  alert('You are wrong, soccer is my favorite sport.');
}

var favoriteTeam = prompt('Do I have a favorite team, yes or n?');
console.log('ask' + welcomeUser + 'if I have a favorite team');

if(favoriteTeam.toUpperCase() === 'YES') {
  alert('You are right, I do have a favorite team.');
} else {
  alert('You are wrong, I do have a favorite team.');
}

var manchesterUnited = prompt('Is Manchester United your favorite team, yes or n?');
console.log('ask' + welcomeUser + 'if I like Manchester United');

if(manchesterUnited.toUpperCase() === 'YES') {
  alert('You are right Manchester United is my favorite team.');
} else {
  alert('You are wrong, Manchester United is my favorite team.');
}

var wayneRooney = prompt('Is Wayne Rooney your favorite player, yes or n');
console.log('ask' + welcomeUser + 'if Wayne Rooney is favorite player');

if(manchesterUnited.toUpperCase() === 'YES') {
  alert('Yes, indeed Wayne Rooney is my favorite player.');
} else {
  alert('You are wrong, Wayne Rooney is my favorite player.');
}

var liverPool = prompt('Will Manchester United beat Liverpool, yes or n?');
console.log('ask' + welcomeUser + 'if Manchester United will beat Liverpool');

if(liverPool.toUpperCase() === 'YES') {
  alert('Spot on mate!');
} else {
  var whyNot = prompt('Why the f not?');
}
console.log('conditional about Man U vs. Liverpool');
