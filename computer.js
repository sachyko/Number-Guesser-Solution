let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Task 1
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//Task 2
const compareGuesses = (human, computer, secret) => {
  let humanValue = Math.abs(secret - human);
  let computerValue = Math.abs(secret - computer);

  if (humanValue > computerValue) {
    return true;
  } else if (humanValue < computerValue) {
    return false;
  } else {
    return true;
  }
};

//Task 3
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

//Task 4
const advanceRound = () => {
  return currentRoundNumber++;
};
