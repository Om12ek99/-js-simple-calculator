const divNumberElem = document.querySelector(".number");
const divSymbolElem = document.querySelector(".symbol");
let divDisplayElem = document.getElementById("display");
let valore1;
let valore2;
let cont = 0;
let operator = "";

for (i = 1; i <= 11; i++) {
  const newNumber = createNumber(i);
  console.log(newNumber);
  divNumberElem.append(newNumber);
}


