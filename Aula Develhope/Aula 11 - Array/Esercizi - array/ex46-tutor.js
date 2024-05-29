/*
Partendo dall'esercizio precedente, tramite un ciclo for, dobbiamo stampare tutti gli elementi contenuti nel nostro array

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
*/
//creando l'array degli students
const students = [
    //Assegnare valori agli indici di array
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];


//"for" creato con una ripetizione condizionale che dipende dalla dimensione dell'array in modo che vengano visualizzati tutti gli oggetti al suo interno

//for(let i=0; i<students.length;i++){
//    //Visualizzazione dell'array con il numero di indice che rappresenta il conteggio delle ripetizioni, //facendo sì che venga preso l'intero contenuto dell'array
//    console.log(students[i]);
//}

students.forEach((item) => {
    console.log(students);
});