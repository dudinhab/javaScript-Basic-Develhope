/*
Il nostro oggetto student è incompleto. Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome personalData. L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo?

Stampa a schermo l'oggetto nested personalData che dovrà trovarsi dentro student.
const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};
*/
//Creazione dell'oggetto student
const Student = {
    id: 1,
    school: "Liceo",
    year: 3,
    //Creazione dell'oggetto nested 
    PersonalData: {
        name: 'Maria Eduarda',
        surname: 'Barone',
        age: 25,
    }
};

//Condizionale per vedere se l'oggetto nested esiste, se non bisogna ancora inserire
console.log(Student?.PersonalData ?? "Ancora bisogna inserire gli dati personale!")