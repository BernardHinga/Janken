/*-----Rock ⛰ Paper 📜 Scissors ✂ game------*/

//Initialize all variables
let playerOneChoice, playerTwoChoice, result;

//Array to store the three plays
const choice = ["rock", "paper", "scissors"];

//Randomise player 2 choices
playerTwoChoice = choice[Math.floor(Math.random() * choice.length)];

//Get player 1 input
//Import readline module to allow for user input
const readline = require("readline");

//Create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Output gameplay
console.log("Ready Player One");
rl.question("Rock ⛰ --- Paper 📜 --- Scissors ✂ ??\n", function (string) {
  playerOneChoice = string;
  //Close input stream
  rl.close();

  //Win 🏆 - Lose 😝 logic
  //If you choose Rock
  if (playerOneChoice === "rock") {
    if (playerTwoChoice === "scissors") {
      result = "You Win 🏆";
    }
    if (playerTwoChoice === "paper") {
      result = "You Lose 😝";
    }
    if (playerTwoChoice === "rock") {
      result = "Its a draw 🤞";
    }
  }

  // If you choose Paper
  if (playerOneChoice === "paper") {
    if (playerTwoChoice === "rock") {
      result = "You Win 🏆";
    }
    if (playerTwoChoice === "scissors") {
      result = "You Lose 😝";
    }
    if (playerTwoChoice === "paper") {
      result = "Its a draw 🤞";
    } 
  }

  // If you choose Scissors
  if (playerOneChoice === "scissors") {
    if (playerTwoChoice === "paper") {
      result = "You Win 🏆";
    }
    if (playerTwoChoice === "rock") {
      result = "You Lose 😝";
    }
    if (playerTwoChoice === "scissors") {
      result = "Its a draw 🤞";
    }
  }
  
  //if player one chooses out of the scope
  else{
    if (playerOneChoice != "rock"){
        if (playerOneChoice != "paper"){
            if (playerOneChoice != "scissors"){
                result = "Play fair 😠"
            }
        }
    }
  }
  console.log(playerTwoChoice);
  console.log(result);
});
