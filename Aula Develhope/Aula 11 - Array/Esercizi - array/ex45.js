/*
Abbiamo bisogno di scrivere un array che chiameremo students. Questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age
Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente.

Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array
*/

let students=[
    {id:1, name:'Maria' ,surname:'Duda' ,age:25},
    {id:2, name:'Billy' ,surname:'Bi' ,age:23},
    {id:3, name:'Jimmy' ,surname:'Ji' ,age:52}
]
console.log(students[0]);