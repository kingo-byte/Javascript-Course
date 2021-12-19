// for (let i = 0; i < messages.length; i++) {
//   console.log(messages[i]);
// }

// messages.forEach((element) => {
//   console.log(element);
// });

// let messages = [
//   "Hey , how's it going?",
//   "I'm great , thank you! How about you?",
//   "All good. Been woring on my portfolio lately",
//   "Great to hear",
// ];

// let sentence = ["Hello", "my", "name", "is", "Peter"];

// let greetingEl = document.querySelector("#greeting-el");

// sentence.forEach((element) => {
//   greetingEl.textContent = greetingEl.textContent + element + " ";
// });

//How to generate a random number

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

function totalRaceTime() {
  return player1Time + player2Time;
}

let total = totalRaceTime();

console.log(total);
