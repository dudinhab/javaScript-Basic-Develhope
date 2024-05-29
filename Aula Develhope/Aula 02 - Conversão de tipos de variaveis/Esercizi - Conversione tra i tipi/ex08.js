/*
Crea una variabile e assegnale come valore true;
Stampa il suo valore in console e il tipo di dato;
Esegui il casting a number e stampa nuovamente il valore e il tipo.
Esegui il casting a string e stampa nuovamente il valore e il tipo.
Infine esegui il casting a boolean e stampa nuovamente il valore e il tipo.
*/

let variabile1 = true;

//Visualizzazione del variabile
console.log(variabile1, typeof variabile1);

//Casting del variabile a Number
variabile1 = Number(variabile1);
//Visualizzazione del variabile
console.log(variabile1, typeof variabile1);


//Casting del variabile a String
variabile1 = String(variabile1);
//Visualizzazione del variabile
console.log(variabile1, typeof variabile1);


//Casting del variabile a Boolean
variabile1 = Boolean(variabile1);
//Visualizzazione del variabile
console.log(variabile1, typeof variabile1);