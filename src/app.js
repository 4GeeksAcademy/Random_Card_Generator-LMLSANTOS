/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  flipCard();
  btnCard.onclick = flipCard;
};

// variables
let btnCard = document.querySelector("#new-card");
let topNumber = document.querySelector(".top-number");
let bottomNumber = document.querySelector(".bottom-number");
let suitDeck = document.querySelector(".suit");
suitDeck.style.color = "purple";

// variable for flipping the card
let cardFlip = document.querySelector(".card");

// function that flips the card
const flipCard = () => {
  cardFlip.classList.toggle("flipped");

  let newNumber = generateNumber();
  topNumber.innerText = newNumber;
  bottomNumber.innerText = newNumber;
  generateCard();
};
// function that generates a number
const generateNumber = () => {
  const numbers = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

// This function generates the suit and color
const generateCard = () => {
  const suits = ["♦", "♣", "♠", "♥"];

  let indexSuits = Math.floor(Math.random() * suits.length);
  const updateCard = suits[indexSuits];

  if (updateCard === "♠" || updateCard === "♣") {
    suitDeck.style.color = "black";
  } else {
    suitDeck.style.color = "red";
  }

  suitDeck.innerHTML = updateCard;
};

console.log("this is fun or not");
