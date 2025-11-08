// console.log("Hello mofo");

let computerscore = 0;
let userscore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getUserChoice() {
  let userchoice = prompt("Enter your choice").toLowerCase();
  return userchoice;
}

const playRound = () => {
  for (let i = 0; i <= 4; i++) {
    let userchoice = getUserChoice();
    let computerchoice = getComputerChoice();
    console.log("Computer choice: " + computerchoice);
    if (userchoice === computerchoice) {
      console.log("Tie");
      computerscore += 1;
      userscore += 1;
    } else if (
      (userchoice === "rock" && computerchoice === "scissor") ||
      (userchoice === "scissor" && computerchoice === "paper") ||
      (userchoice === "paper" && computerchoice === "rock")
    ) {
      console.log("You Win!");
      userscore += 1;
    } else {
      console.log("You Lose!");
      computerscore += 1;
    }
  }
  if (userscore === computerscore) {
    console.log("You have tied the RPS World Championship");
  } else if (userscore >= computerscore) {
    console.log("You have won teh RPS world Championship.");
  } else {
    console.log("You have lost the RPS World Championship.");
  }
};

playRound();
