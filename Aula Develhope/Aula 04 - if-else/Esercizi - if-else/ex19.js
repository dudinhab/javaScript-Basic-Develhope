/*
Date le variabili name e surname, crea un costrutto if else per stampare in console la variabile fullname, che conterrà le due variabili precedenti.
La variabile fullname dovrà essere stampata solo se name e surname sono truthy, in caso contrario stampa il messaggio Fullname is invalid
let name;
let surname = 'Rossi';
*/

let nome;
let surname = 'Rossi';

if(nome&&surname){
    let fullname = nome+' '+surname;
    console.log(fullname);
}else{
    console.log('Fullname is invalid');
}