console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    x = (Math.floor(Math.random() * 100) % 3) + 1;
    if(x == 1) return "Rock";
    if(x == 2) return "Paper";
    if(x == 3) return "Scissors";
    else return 0;
}

function getHumanChoice(){
    //For now, we assume the human will enter either Rock, Paper, or Scissors
    let y = prompt("Please enter Rock, Paper, or Scissors: ");
    return y;
}

console.log("Human score ", humanScore);
console.log("Computer Score ", computerScore);
console.log(getComputerChoice());
console.log(getHumanChoice());