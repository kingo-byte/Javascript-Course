let count = 0;
let countEl = document.getElementById("count");
let previous = document.getElementById("save-el");

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let countstr = " " + count + " - ";
  previous.textContent = previous.textContent + countstr;
  countEl.textContent = 0;
  count = 0;
}
