/* 
Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.
Il risultato dovrà essere:

0
1
2
3
4
5
6
7
8
9
10
55
*/

//Creazione della variabile accumulatore
let total = 0;

//Costruttore (for) per la ripetizione della somma e la visualizzazione della variabile di conteggio
for (let i = 0; i <= 10; i++) {
    //Visualizzazione della variabile di conteggio
    console.log(i);
    //Contando la somma con la variabile accumulatore
    total = total + i;
}

//Visualizzazione del risultato all'esterno del costruttore (for) da visualizzare solo una volta
console.log(`Risultato della soma:${total}`);