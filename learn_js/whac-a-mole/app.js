const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let timerId = null;
let hitPosition ;
let currentTime = 60;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

function moveMole(){
    timerId = setInterval(randomSquare, 600);
}

moveMole();

squares.forEach(square => {
    square.addEventListener('mousedown',()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function countdown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER, Your Score is ' + result)
    }
}

let countDownTimerId = setInterval(countdown, 1000);