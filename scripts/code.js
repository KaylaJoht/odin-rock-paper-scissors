console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    x = (Math.floor(Math.random() * 100) % 3) + 1;
    if(x == 1) return "rock";
    if(x == 2) return "paper";
    if(x == 3) return "scissors";
    else return 0;
}

function getHumanChoice(){
    //For now, we assume the human will enter either Rock, Paper, or Scissors
    let y = prompt("Please enter Rock, Paper, or Scissors: ");
    return y;
}

function playRound(human, computer){
    human = human.toLowerCase();
    console.log(human);
    console.log(computer);
    result = false;

    if((human == "rock" && computer == "paper")
        || (human == "paper" && computer == "scissors")
        || (human == "scissors" && computer == "rock")){
            computerScore += 1;
            return `You lose! ${computer} beats ${human}`;
        }
    else if (human == computer) return "You tied!";
    else {
        humanScore += 1;
        return `You win! ${human} beats ${computer}`;
    }

}

console.log("Human Score ", humanScore);
console.log("Computer Score ", computerScore);
//console.log("The computer chose ", getComputerChoice());
//console.log("You chose ", getHumanChoice());
//console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound("paper", "rock"));
console.log(playRound("scissors", "scissors"));
console.log(playRound("rock", "paper"));