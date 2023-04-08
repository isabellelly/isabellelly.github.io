class MixOrMatch {
    constructor(cards) {
        this.cardsArray = cards;
        this.counter = document.getElementById('matches');
        this.facter = document.getElementById('fact');
    }

    startGame() {
        this.ace = false;
        this.one = false;
        this.two = false;
        this.three = false;
        this.four = false;
        this.five = false;
        this.six = false;
        this.seven = false;
        this.eight = false;
        this.nine = false;
        this.ten = false;
        this.jack = false;
        this.queen = false;
        this.king = false;
        this.totalMatches = 0;
        this.fact = "?";
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.cardsArray);
            this.busy = false;
        }, 500)
        this.hideCards();
        this.facter.innerText = this.fact;
        this.counter.innerText = this.totalMatches;
    }
    victory() {
        document.getElementById('victory-text').classList.add('visible');
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            card.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.totalMatches++;
        this.counter.innerText = this.totalMatches;
    
        if (this.getCardType(card1) === "e.png") {
            if (this.ace === false) {
                this.fact = "1 minor completed in computing";
                this.facter.innerText = this.fact;
                this.ace = true;
            }
            else {
                this.fact = "1 internship term completed as a Business Analyst for Sun Life's IT Asset Management Team";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "2.png") {
            if (this.two === false) {
                this.fact = "2 certificates I will be graduating with: A GEC and EDGE certificate";
                this.facter.innerText = this.fact;
                this.two = true;
            }
            else {
                this.fact = "2 years of experiencing online and hybrid classes due to lockdowns and restrictions";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "3.png") {
            if (this.three === false) {
                this.fact = "3 months and 3 weeks I was on a study exchange at SUTD";
                this.facter.innerText = this.fact;
                this.three = true;
            }
            else {
                this.fact = "3 years between receiving my entrance scholarship, and my international experience award";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "4.png") {
            if (this.four === false) {
                this.fact = "4 years of GBDA!";
                this.facter.innerText = this.fact;
                this.four = true;
            }
            else {
                this.fact = "4 Professional Development classes taken";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "5.png") {
            if (this.five === false) {
                this.fact = "5 classes on average taken per semester";
                this.facter.innerText = this.fact;
                this.five = true;
            }
            else {
                this.fact = "5(6) students who participated in an online AR gallery that I directed and curated";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "6.png") {
            if (this.six === false) {
                this.fact = "6 students I worked with to direct and curate an online AR gallery";
                this.facter.innerText = this.fact;
                this.six = true;
            }
            else {
                this.fact = "6 hours per week driving to the Stratford campus as a full-time 4th year student";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "7.png") {
            if (this.seven === false) {
                this.fact = "7 courses taken in a term, two terms in a row (that's a 2 course overload!)";
                this.facter.innerText = this.fact;
                this.seven = true;
            }
            else {
                this.fact = "7am wake-ups to get to Stratford in time for 9am classes";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "8.png") {
            if (this.eight === false) {
                this.fact = "8 terms in a row taking at least one class";
                this.facter.innerText = this.fact;
                this.eight = true;
            }
            else {
                this.fact = "8 terms from 1A to 4B terms... My overloading meant I was in my 4B term '3 times'";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "9.png") {
            if (this.nine === false) {
                this.fact = "9 computer science courses taken";
                this.facter.innerText = this.fact;
                this.nine = true;
            }
            else {
                this.fact = "9(4) Faculty average by the end of undergrad";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "0.png") {
            if (this.ten === false) {
                this.fact = "10 different GBDA instructors to learn from";
                this.facter.innerText = this.fact;
                this.ten = true;
            }
            else {
                this.fact = "10(0) is the highest I've gotten in a class, twice";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "k.png") {
            this.fact = "Jack of all trades is what we become in GBDA!";
            this.facter.innerText = this.fact;
        }
        else if (this.getCardType(card1) === "n.png") {
            if (this.queen === false) {
                this.fact = "Queen of GBDA would be Christine McWebb, our founding director";
                this.facter.innerText = this.fact;
                this.queen = true;
            }
            else {
                this.fact = "Queen of GBDA would be Christine McWebb, our founding director (yes repeated because she deserves recognition)";
                this.facter.innerText = this.fact;
            }
        }
        else if (this.getCardType(card1) === "g.png") {
            if (this.king === false) {
                this.fact = "(Wor)King on further strengthening my skillset in all GBDA disciplines";
                this.facter.innerText = this.fact;
                this.king = true;
            }
            else {
                this.fact = "(Ma)King and creating was the best part of GBDA 413";
                this.facter.innerText = this.fact;
            }
        }
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMismatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src.slice(-5);
        
    }
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}