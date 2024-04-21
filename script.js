let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//creating a random integer between 0-9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};
//a function to determine which guess is close to the target number
const compareGuesses = (human, computer, target) => {
  let humanNumber = getAbsoluteDistance(human, target);
  let computerNumber = getAbsoluteDistance(computer, target);

  if (human < 0 || human > 9) {
    alert(
      "Your number is out of range! Please choose a number between 0 and 9."
    );
    return;
  }
  if (humanNumber > computerNumber) {
    return true;
  } else if (humanNumber < computerNumber) {
    return false;
  } else {
    return true;
  }
};

//to increase the winner's score after each round
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  return currentRoundNumber++;
};
