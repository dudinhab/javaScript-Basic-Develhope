/*
Scrivi una funzione di nome sayHelloName che prende come parametro una stringa. Questa funzione deve restituire la concatenazione di due stringhe, per capirci, il risultato finale dovrà essere: 'Hello John'. In questo caso, John è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).

Indicazioni utili:

La funzione dovrà prendere come parametro una stringa
Il parametro in ingresso sarà il nostro nome
La funzione restituisce 'Hello' seguito dal nostro nome
Abbiamo la possibilità in JavaScript di concatenare le stringhe (es. str1 + str2)
Il risultato finale dovrà essere il tuo 'Hello nome' stampato sul terminale
*/
//A função recebe o parametro de um nome
//La function riceve il parametro di un nome
function sayHelloName(firstName){
    //A função retorna o valor concatenado
    //La function restituisce il valore concatenato
    return `Hello ${firstName}`;
}

//A variavel recebe o resultado da função
//La variabile riceve il risultato della function
const helloName = sayHelloName('Maria');
//A visualização da variavel mostra a mensagem inteira que foi retonada pela função
//La visualizzazione delle variabili mostra l'intero messaggio restituito dalla function
console.log(helloName);
