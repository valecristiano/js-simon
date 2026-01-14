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
const countdown = document.getElementById("countdown");
console.log(countdown);

countdownId = setInterval(timer, 1000);

let timeToMemorize = 6;

function timer() {
  timeToMemorize--;
  console.log("timeToMemorize", timeToMemorize);
  if (timeToMemorize <= 0) {
    clearInterval(countdownId);
    countdown.style.display = "none";
  }
  countdown.innerText = timeToMemorize;
}

// - Dopo 30 secondi i numeri scompaiono

setTimeout(function () {
  casualNumbersList.style.display = "none";
}, 6000);

// - Appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
//   nell'ordine che preferisce.
const form = document.getElementById("answers-form");
console.log(form);

// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//   e quali dei numeri da indovinare sono stati individuati.
