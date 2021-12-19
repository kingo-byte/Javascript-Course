//-----------------------------How to get a random Number-------------------------------------
// function rollDice() {
//   return Math.floor(Math.random() * 6 + 1);
// }

// console.log(rollDice());

// function getRandomCard() {
//   let random = Math.floor(Math.random() * 13 + 1);

//   if (random === 1) {
//     return 11;
//   } else if (random >= 10 && random <= 13) {
//     return 10;
//   }
//   return random;
// }

// console.log(getRandomCard());
//-----------------------------How to get a random Number-------------------------------------

//-----------------------------Logical Operators-------------------------------------
// let hasCompletedCourse = true;

// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating Certificate......");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the Solution");
// }

// let likesDocumentaries = false;
// let likesStartups = true;

// if (likesStartups === true || likesDocumentaries === true) {
//   recommendMovie();
// }

// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!!");
// }
//-----------------------------Logical Operators-------------------------------------

//-----------------------------Object Oriented Programming-------------------------------------
// let course = {
//   title: "learn CSS Grid For Free",
//   lessons: 16,
//   creator: "Per Harold Borgen",
//   length: 63,
//   level: 3,
//   isFree: true,
//   tags: ["html", "css"],
// };

// let castle = {
//   title: "DairsieCastle",
//   price: 190,
//   isSuperHost: true,
//   images: ["img/castle1.png", "img/castle2.png"],
// };

// console.log(castle.price);
//-----------------------------Object Oriented Programming-------------------------------------

//-----------------------------Object Oriented Programming-------------------------------------

// let Person = {
//   name: "Mohammad",
//   age: 21,
//   country: "Lebanon",

//   logData: function () {
//     return (
//       Person.name +
//       " is " +
//       Person.age +
//       " years old and lives in " +
//       Person.country
//     );
//   },
// };

// console.log(Person.logData());

//-----------------------------Object Oriented Programming-------------------------------------

//----------------------------- Arrays -------------------------------------

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world:");

// largeCountries.forEach((element) => {
//   console.log(element);
// });

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// console.log(largeCountries);

// //shift removes element from the front
// largeCountries.shift();

// //unshift adds element
// largeCountries.unshift("China");

// //removes element from the back
// largeCountries.pop();
// //add elements on the front
// largeCountries.push("Pakistan");

// console.log(largeCountries);

//----------------------------- Arrays -------------------------------------

//----------------------------- logical operators -------------------------------------

// let dayOfMonth = 13;

// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("Spooky Face");
// }

//----------------------------- logical operators -------------------------------------

//----------------------------- Random Number -------------------------------------
// let hand = ["rock", "paper", "scissors"];

// function randomNumber() {
//   let r = Math.floor(Math.random() * hand.length);

//   return r;
// }

// console.log(hand[randomNumber()]);

//----------------------------- Random Number -------------------------------------
