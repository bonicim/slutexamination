const cards = document.querySelectorAll('.memory-card');

let FlippedCard =  false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    alert("FLIPPING!!!")
    if (lockBoard) {
        return;
    } 
    this.classList.add('flip');
    
    if (!FlippedCard){
        //first click
        FlippedCard = true;
        firstCard =  this;
       
        return;
    }
    
    //second click
    FlippedCard = false;
    secondCard =  this;

    checkformatch();
}


function checkformatch(){
    alert("CHECKING FOR MATCH!!!")
    if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards();      
    } else {
      unfilpCards();  
    }
}

function disableCards(){ 
    alert("DISABLING!!!")
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);  
}

function unfilpCards(){
    alert("UNFLIPPING!!!")
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard =  false;
    }, 400);
}

(function shuffle() {
    alert("SHUFFLING!!!")
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() *24);
        card.style.order = randomPos;
        
        //Immediately Invoked Function Expression (https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife)
    });
})();


cards.forEach(card=> card.addEventListener('click', flipCard));

//Jag vill säga att jag behövde hjälp med JS och lärde mig av en websida som heter freecodecamp.org.
//Jag kunde inte lösa problemet när man dubbelklicka på ett kort och kortet är frusen.