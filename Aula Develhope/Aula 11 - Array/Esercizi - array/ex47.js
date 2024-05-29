/*
Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Rimuovere il nome "Giovanni" dal nostro array
Aggiungere il nome "Pippo" alla coda del nostro array
Aggiungere il nome "Giovanni" come primo elemento del nostro array
Dopo ogni operazione inserire il console.log() del nostro array names
*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log(names);

names.pop();
console.log(names);

names.push('Pippo');
console.log(names);

names.unshift('Giovanni');
console.log(names);