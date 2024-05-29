/*
Crea un controllo, tramite un costrutto if else, che permetta di verificare il valore di una variabile pin di tipo number: se il valore del pin è maggiore di 999 e minore o uguale a 10000, stampa il messaggio "Pin is valid". Altrimenti stampa il messaggio: "Pin is not valid".
*/

//Creando una variabile
let pin=6789;
//Confermando se è un numero e convertendo se non lo è
pin=Number(pin);

if (pin > 999 && pin <= 9999){
    console.log("Pin "+ pin +" is valid!");
}else{
    console.log("Pin "+ pin +" is not valid!")
}