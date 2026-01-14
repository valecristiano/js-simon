// Visualizzare in pagina 5 numeri casuali.
const casualNumbersList = document.getElementById("numbers-list");
console.log(casualNumbersList);

function generateCasualNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

let casualNumbers = [];

for (let i = 0; i < 5; i++) {
  const casulNumberCycle = generateCasualNumber(1, 50);
  casualNumbers.push(casulNumberCycle);
}

console.log(casualNumbers);

casualNumbersList.innerText = casualNumbers.join(" ");

// - Da lì parte un timer di 30 secondi.
// - Dopo 30 secondi i numeri scompaiono e appaiono 5 input
const countdown = document.getElementById("countdown");
console.log(countdown);

const countdownId = setInterval(timer, 1000);

let timeToMemorize = 6;

function timer() {
  timeToMemorize--;
  console.log("timeToMemorize", timeToMemorize);
  if (timeToMemorize <= 0) {
    clearInterval(countdownId);
    countdown.style.display = "none";
    displaySwitch();
  }
  countdown.innerText = timeToMemorize;
}

// - Nei 5 input l'utente deve inserire i numeri che ha visto precedentemente,
//   nell'ordine che preferisce.

const form = document.getElementById("answers-form");
const message = document.getElementById("instructions");

function displaySwitch() {
  casualNumbersList.classList.remove("d-flex");
  casualNumbersList.classList.add("d-none");
  console.log(form);
  form.classList.remove("d-none");
  message.innerText = "Inserisci i numeri che ricordi (l'ordine non è importante)";
}

// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//   e quali dei numeri da indovinare sono stati individuati.

const userNumbersForm = document.getElementById("input-group");
console.log("input-group", userNumbersForm);

const userNumbers = document.querySelectorAll(".form-control");
console.log("userNumbers", userNumbers);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNumbersList = [];
  for (let i = 0; i < userNumbers.length; i++) {
    const currentNumber = userNumbers[i];
    userNumbersList.push(parseInt(currentNumber.value));
    console.log("Valore", currentNumber.value);
  }
  console.log("Numeri utente:", userNumbersList);

  const matchingNumbers = userNumbersList.filter((currentNum) => casualNumbers.includes(currentNum));

  const outputMessage = document.getElementById("message");
  outputMessage.innerText = ` Hai indovinato ${matchingNumbers.length} numeri: ${matchingNumbers.join(" ")}`;
});
