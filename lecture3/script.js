let cards = [];

let sum = 0;

let hasBlackJack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Mohammad",
  chips: 200,
};

let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  let firsCard = getRandomCard();

  let secondCard = getRandomCard();

  cards = [firsCard, secondCard];

  sum = firsCard + secondCard;

  isAlive = true;

  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum:" + sum;

  cardsEl.textContent = "Cards: ";

  cards.forEach((element) => {
    cardsEl.textContent = cardsEl.textContent + element + "  ";
  });

  // for (let i = 0; i < cards.length; i++) {
  //   cardsEl.textContent = cardsEl.textContent + cards[i] + " - ";
  // }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();

    cards.push(card);
    sum = sum + card;
    renderGame();
  }
}
//generate a random number between 1 and 13

function getRandomCard() {
  let random = Math.floor(Math.random() * 13 + 1);

  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  }
  return random;
}
