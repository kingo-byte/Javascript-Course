// let username = "person";

// let message = "You have new notification";

// let entireMessage = message + ", " + username + "!";

// let username = "mohammad";

// let greeting = "Welcome to our website";

// let welcome = document.getElementById("welcome-el");

// welcome.innerHTML = greeting + " " + username + "😀";

// let mypoints = 3;

// function add3Points() {
//   mypoints += 3;
// }

// function remove1Point() {
//   mypoints--;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(mypoints);

// let errorMessage = document.getElementById("error");

// function displayError() {
//   errorMessage.textContent = "Something went wrong, please try again";
// }

let firstNumber = 8;
let secondNumber = 2;

let num1 = document.getElementById("num1");

let num2 = document.getElementById("num2");

num1.textContent = firstNumber;
num2.textContent = secondNumber;

let sum = document.getElementById("p-sum");

function Add() {
  let add = firstNumber + secondNumber;
  sum.innerHTML = "sum: " + add;
}
function Subtract() {
  let Subtract = firstNumber - secondNumber;
  sum.innerHTML = "subtract: " + Subtract;
}
function Divide() {
  let divide = firstNumber / secondNumber;
  sum.innerHTML = "divide: " + divide;
}
function Multiply() {
  let multiply = firstNumber * secondNumber;
  sum.innerHTML = "multiply: " + multiply;
}
