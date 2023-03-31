const cardArray = [
    {
        cardName: 'fries',
        img:'fries.png',
    },
    {
        cardName: 'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        cardName: 'hotdog',
        img:'hotdog.png',
    },
    {
        cardName: 'ice-cream',
        img:'ice-cream.png',
    },
    {
        cardName: 'milkshake',
        img:'milkshake.png',
    },
    {
        cardName: 'pizza',
        img:'pizza.png',
    },
    {
        cardName: 'fries',
        img:'fries.png',
    },
    {
        cardName: 'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        cardName: 'hotdog',
        img:'hotdog.png',
    },
    {
        cardName: 'ice-cream',
        img:'ice-cream.png',
    },
    {
        cardName: 'milkshake',
        img:'milkshake.png',
    },
    {
        cardName: 'pizza',
        img:'pizza.png',
    }
]

cardArray.sort(()=> 0.5 - Math.random());
// console.log(cardArray)

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
// console.log(gridDisplay)

function createBoard(){
    for(let i = 0 ; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','blank.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard)
        gridDisplay.append(card);
    }
}
createBoard();

let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // if(optionOneId == optionTwoId){
    //     alert('you have clicked the same image');
    //     cards[optionOneId].setAttribute('src',"blank.png");
    //     cards[optionTwoId].setAttribute('src',"blank.png");
    // } else 

    if(cardsChosen[0] == cardsChosen[1]){
        alert("you found a match!");
        cards[optionOneId].setAttribute('src',"white.png");
        cards[optionTwoId].setAttribute('src',"white.png");
        // cards[optionOneId].removeEventListener('click', flipCard);
        // cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src',"blank.png");
        cards[optionTwoId].setAttribute('src',"blank.png");
        cards[optionOneId].addEventListener('click', flipCard);
        cards[optionTwoId].addEventListener('click', flipCard);
        alert('Sorry Try Again');
    }
    
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations, You found them all";
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    this.removeEventListener('click',flipCard);
    cardsChosen.push(cardArray[cardId].cardName);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
    console.log(cardsChosen)
}