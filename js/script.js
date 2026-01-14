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

casualNumbersList.innerText = casualNumbers;

// - Da lì parte un timer di 30 secondi.
// - Dopo 30 secondi i numeri scompaiono
// - Appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
//   nell'ordine che preferisce.
// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//   e quali dei numeri da indovinare sono stati individuati.
