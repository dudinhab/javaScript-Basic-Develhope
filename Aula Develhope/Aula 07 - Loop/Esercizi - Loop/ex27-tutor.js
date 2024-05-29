/*
Stampa in console tutti i numeri pari da 0 a 20.
Esempio:

10 % 2 --> restituisce 0 perché 10 / 2 non ha resto
10 % 4 --> restituisce 2 perché 10 / 4 ritorna 2 con un resto di 2
*/


console.log("Questi sono i numeri pari compresi tra 0 e 20:")

//Costruttore (for) da ripetere fino a raggiungere l'importo esatto
for (let i = 0; i <= 20; i++) {
    /*
    Condizionale ternario perché è una condizione semplice da utilizzare
    Utilizzando l'operatore resto per creare la condizione, se è un numero pari, restituisce 0, se neghiamo questa equazione, il risultato sarà 1, che in Boolean è TRUE, quindi il primo condizionale viene eseguito, visualizzando il numero accumulato nella variabile di conteggio
    */
    !(i % 2) ? console.log(i) : "";
}