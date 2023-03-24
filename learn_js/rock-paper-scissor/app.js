const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');

let userChoice ,computerChoice,result;

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (event)=>{
    // console.log(event); //so event here is the pointerEvent that points to the object that invoked click event, HERE BUTTON
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or can use possibleChoices.length
    if(randomNumber === 1){
        computerChoice = "rock";
    } else if(randomNumber === 2){
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's a Draw!"
    } else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!"
    } else if(computerChoice === "rock" && userChoice === "scissor"){
        result = "You Lost!"
    } else if(computerChoice === "paper" && userChoice === "scissor"){
        result = "You Win!"
    } else if(computerChoice === "paper" && userChoice === "rock"){
        result = "You Lost!"
    } else if(computerChoice === "scissor" && userChoice === "paper"){
        result = "You Lost!"
    } else if(computerChoice === "scissor" && userChoice === "rock"){
        result = "You Win!"
    }
    resultDisplay.innerHTML = result;
}