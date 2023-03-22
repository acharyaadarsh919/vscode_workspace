let playGame = confirm("Shall we play the game?");
if(playGame){
    let playerChoice = prompt("enter Rock Paper or Scissor.")
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock"  ||
           playerOne === "paper" || 
           playerOne === "scissor"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 
            ? "rock" 
            : computerChoice === 2 
            ? "paper" 
            : "scissor";
            let result = playerOne === computer 
            ? `player : ${playerOne}\ncomputer : ${computer}\nTie Game`
            : playerOne === "rock" && computer === "paper" 
            ? `player : ${playerOne}\ncomputer : ${computer}\nComputer Win!` 
            : playerOne === "paper" && computer === "scissor" 
            ? `player : ${playerOne}\ncomputer : ${computer}\nComputer Win!` 
            : playerOne === "scissor" && computer === "rock" 
            ? `player : ${playerOne}\ncomputer : ${computer}\nComputer Win!`
            : `player : ${playerOne}\ncomputer : ${computer}\nPlayer Win!` ;
            alert(result);
            let playAgain = confirm("Play Again ?");
            playAgain ? location.reload() : alert("Thanks for playing");
        } else {
            alert("enter either rock paper or scissor")
        }
    } else {
        alert("Guess you changed your mind!")
    }
} else {
    alert("Maybe next time!")
}