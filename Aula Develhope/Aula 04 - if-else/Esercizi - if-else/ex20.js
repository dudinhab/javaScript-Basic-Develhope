/*
Crea una variabile primitive e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
Crea un controllo per verificare il tipo della variabile e stamparlo in console.
*/

let primitive = 1;

if (typeof primitive === "number"){
console.log("This variable is a Number!");
}else if(typeof primitive === "string"){
console.log("This variable is a String!");
}else if(typeof primitive === "boolean"){
console.log("This variable is a Boolean!");
}else{
    console.log("Variable type not studied yet!")
}