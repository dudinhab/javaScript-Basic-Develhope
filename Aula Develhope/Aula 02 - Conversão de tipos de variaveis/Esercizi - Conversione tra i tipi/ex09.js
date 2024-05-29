/*
Nel codice di partenza trovi la stampa a schermo del risultato di 7 comparazioni. Se provi ad eseguire il codice, ti accorgerai che ognuna di quelle comparazioni assume come risultato il valore false. Prova a modificare l’operando di destra di ogni comparazione in modo tale che ognuna delle comparazioni restituisca true.

console.log(10 < 9);
console.log(45 == 34);
console.log(true === 1);
console.log(false === 0);
console.log(1 == 0);
console.log(4 <= 2);
console.log(4 >= 8);
*/
//Le operazioni originale rendono falsi tutti i confronti
console.log("PRIMA (tutto false):")
console.log(10 < 9);
console.log(45 == 34);
console.log(true === 1);
console.log(false === 0);
console.log(1 == 0);
console.log(4 <= 2);
console.log(4 >= 8);

//Le operazioni modificate rendono veri tutti i confronti
console.log("DOPO (tutto true):")
console.log(10 < 11);
console.log(45 == 45);
console.log(true === true);
console.log(false === false);
console.log(1 == true);
console.log(4 <= 4);
console.log(4 >= 4);