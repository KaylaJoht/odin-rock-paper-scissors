console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let i = 0;
const pBtn = document.getElementById('p');
const rBtn = document.getElementById('r');
const sBtn = document.getElementById('s');
const results = document.getElementById('results');

pBtn.addEventListener('click', (event) => {
        val = pBtn.textContent;
        console.log(val);
        playGame(val);
});

rBtn.addEventListener('click', (event) => {
        val = rBtn.textContent;
        console.log(val);
        playGame(val);
});

sBtn.addEventListener('click', (event) => {
        val = sBtn.textContent;
        console.log(val);
        playGame(val);
});


function getComputerChoice(){
    x = (Math.floor(Math.random() * 100) % 3) + 1;
    if(x == 1) return "Rock";
    if(x == 2) return "Paper";
    if(x == 3) return "Scissors";
    else return 0;
}

function playRound(human, computer){
    result = false;

    if((human == "Rock" && computer == "Paper")
        || (human == "Paper" && computer == "Scissors")
        || (human == "Scissors" && computer == "Rock")){
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

function playGame(human){
    console.log(`Round ${i + 1}`);    

    console.log("Human Score ", humanScore);
    console.log("Computer Score ", computerScore);
    computer = getComputerChoice();
    console.log(`You chose ${human}`);
    console.log(`The computer chose ${computer}`);

    round = document.createElement('p');
    humanChoice = document.createElement('p');
    comChoice = document.createElement('p');
    round.textContent = `Round ${i + 1}`;
    results.appendChild(round);
    humanChoice.textContent = `You chose ${human}`;
    results.appendChild(humanChoice);
    comChoice.textContent = `The computer chose ${computer}`;
    results.appendChild(comChoice);

    console.log(playRound(human, computer));
    i += 1;

    //if(i < 5) playGame();
    return "Game Over! That was fun!"
}

console.log("Let's play Rock Paper Scissors");
