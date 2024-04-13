function createNumber(number) {
  const divElem = document.createElement("button");
  divElem.classList.add("numbers");
  divElem.innerText = number;
  if (number < 10) {
    divElem.classList.add("bg-grey", "btn-number");
    divElem.innerText = number;
  } else if (number == 10) {
    divElem.classList.add("bg-grey", "btn-number", "special");
    divElem.innerText = "0";
  } else if (number === 11) {
    divElem.classList.add("bg-orange", "btn-total");
    divElem.innerText = "=";
  }
  return divElem;
}