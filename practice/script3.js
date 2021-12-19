let array = ["1", "2", "3", "4"];

array = JSON.stringify(array);

localStorage.setItem("array", array);

array = JSON.parse(localStorage.getItem("array"));

array.push("99");

console.log(array);
