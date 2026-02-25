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
    const winner = createElement('p');
    if (humanScore > computerScore) winner.textContent = `Yay! You won! Computer Lost!`;
    if (computerScore > humanScore) winner.textContent = `Aww! You lost! Computer Won!`;
    results.appendChild(winner); 
    pBtn.removeEventListener('click');
    rBtn.removeEventListener('click');
    sBtn.removeEventListener('click');
}

function playGame(human){
    computer = getComputerChoice();

    round = document.createElement('p');
    humanChoice = document.createElement('p');
    comChoice = document.createElement('p');
    winlose = document.createElement('p');
    points = document.createElement('p');
    
    winlose.textContent = playRound(human, computer);
    round.textContent = `Round ${i + 1}`;
    humanChoice.textContent = `You chose ${human}`;
    comChoice.textContent = `The computer chose ${computer}`;
    points.textContent = `You: ${humanScore} Computer: ${computerScore}`

    results.appendChild(round);
    results.appendChild(humanChoice);
    results.appendChild(comChoice);
    results.appendChild(winlose);
    results.appendChild(points);

    console.log();
    i += 1;

    if(humanScore === 5 || computerScore === 5) getWinner();
}
