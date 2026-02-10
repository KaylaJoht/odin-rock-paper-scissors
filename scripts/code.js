console.log("Hello World");

function getComputerChoice(){
    x = (Math.floor(Math.random() * 100) % 3) + 1;
    if(x == 1) return "Rock";
    if(x == 2) return "Paper";
    if(x == 3) return "Scissors";
    else return 0;
}

function getHumanChoice(){
    let y = prompt("Please enter Rock, Paper, or Scissors: ");
    return y;
}

console.log(getComputerChoice());
console.log(getHumanChoice());