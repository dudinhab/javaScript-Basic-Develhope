/*
Partendo dal seguente oggetto students:
const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
Come possiamo rimuovere "Giovanni" e aggiungere lo studente Francesco?

{ id: 3, name: "Francesco", surname: "Verdi", age: 41 }
*/
//Creazione dell'array
const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
//Visualizzazione dell'inizio dell'array
console.log(students);

//Pop per cancelare l'ultimo valore dell'array
students.pop();
console.log(students);

//Push per inserire valore nell'ultima postazione dell'array
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);