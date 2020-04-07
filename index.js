// Randomizer for player one

var randomNumber1 = (Math.floor(Math.random()*6)+1);
var dice1 = `dice${randomNumber1}.png`;
var playerOneDice = document.querySelector(".img1");
playerOneDice.setAttribute("src", `images/${dice1}`);

// Randomize for player two
var randomNumber2 = (Math.floor(Math.random()*6)+1);
var dice2 = `dice${randomNumber2}.png`;
var playerTwoDice = document.querySelector(".img2");
playerTwoDice.setAttribute("src", `images/${dice2}`);

// Deciding the winner
var results = document.querySelector(".banner");
if (randomNumber1 > randomNumber2){
  results.innerHTML = '🚩 Player One Wins';
}
else if (randomNumber2 > randomNumber1){
  results.innerHTML = 'Player Two Wins 🚩';
}
else if(randomNumber1 === randomNumber2){
  results.innerHTML = "It's a Draw"
}
