console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
i = 0;

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

function getWinner(){
    if (humanScore > computerScore) return `Yay! You won ${humanScore}:${computerScore}`
    if (computerScore > humanScore) return `Aww! You lost ${humanScore}:${computerScore}`
    else return `You tied ${humanScore}:${computerScore}`
}

function playGame(){
    console.log(`Round ${i + 1}`);
    console.log("Human Score ", humanScore);
    console.log("Computer Score ", computerScore);
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log(`You chose ${human}`);
    console.log(`The computer chose ${computer}`);

    console.log(playRound(human, computer));
    i += 1;
    console.log(i)

    if(i < 5) playGame();

    return 0;
}

console.log("Let's play Rock Paper Scissors");
console.log(playGame());
console.log(getWinner());
