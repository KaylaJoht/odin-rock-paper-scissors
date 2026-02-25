let humanScore = 0;
let computerScore = 0;
let i = 0;
const pBtn = document.getElementById('p');
const rBtn = document.getElementById('r');
const sBtn = document.getElementById('s');
const results = document.getElementById('results');

function getVal(e){
    val = e.target.textContent;
    console.log(val);
    playGame(val);
}

pBtn.addEventListener('click', getVal);

rBtn.addEventListener('click', getVal);

sBtn.addEventListener('click', getVal);


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
    const winner = document.createElement('p');
    if (humanScore > computerScore) winner.textContent = `Yay! You won! Computer Lost!`;
    if (computerScore > humanScore) winner.textContent = `Aww! You lost! Computer Won!`;
    results.appendChild(winner); 
    pBtn.removeEventListener('click', getVal);
    rBtn.removeEventListener('click', getVal);
    sBtn.removeEventListener('click', getVal);
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

    
    round.appendChild(humanChoice);
    round.appendChild(comChoice);
    round.appendChild(winlose);
    round.appendChild(points);
    results.appendChild(round);

    console.log();
    i += 1;

    if(humanScore === 5 || computerScore === 5) getWinner();
}
