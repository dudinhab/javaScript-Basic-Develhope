/*
Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Stampare in console il primo valore
Stampare la lunghezza dell'array
Stampare in console l'ultimo valore
Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Primo valore: ${numbers[0]}`);
console.log(`Questa é la lunghezza dell'array: ${numbers.length}`);
console.log(`Questo è l'ultimo valore dell'array: ${numbers[numbers.length-1]}`);
//Questo non é definido con questo indice, per questo che é tornato undefined
console.log(`Valore con indice venti: ${numbers[20]}`);