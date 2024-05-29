/*
Scrivi una funzione che prende un array di numeri come parametro e restituisce un nuovo array contenente solo i numeri primi dell'array originale.
Stampa il nuovo array.

Utilizza un ciclo for per iterare nell'array e un ciclo for nidificato per verificare se ogni numero è divisibile per qualunque numero diverso da 1 e se stesso.
*/
let numbers = [];
let newNumbers = [];

for (let i = 0; i <= 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    if (Checking(numbers[i])<=3) {
        newNumbers.push(numbers[i]);
    }
}

function Checking(verify) {
    let cont = 0;
    for (let b = 1; b <= verify; b++) {
        if (!(verify % b)) {
            cont += 1;
        }
    }
    return cont;
}
console.log(numbers);
console.log(newNumbers)