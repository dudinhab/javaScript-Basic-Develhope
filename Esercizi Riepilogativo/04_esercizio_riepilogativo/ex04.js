/*
Scrivi una funzione che prende un oggetto come parametro e restituisce un nuovo array con tutti i nomi delle proprietà dell'oggetto che hanno un valore stringa più lungo di 5 caratteri. 
Stampa il nuovo array.

## Suggestion ##
Utilizza un ciclo for...in per iterare attraverso le proprietà dell'oggetto e una condizione per verificare se ogni valore è una stringa e più lungo di 5 caratteri.
*/

let nameLong = [];

const obj = {
    longStringProperty: 'longStringProperty',
    shortstringProperty: 'ciao',
    booleanProperty: true,
    numberProperty: 10,
    longStringProperty2: 'longStringProperty2'
}

function Verify(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "string" && obj[prop].length >= 5) {
            nameLong.push(prop);
        }
    }
    return nameLong
}

console.log(obj);
console.log(Verify(obj));