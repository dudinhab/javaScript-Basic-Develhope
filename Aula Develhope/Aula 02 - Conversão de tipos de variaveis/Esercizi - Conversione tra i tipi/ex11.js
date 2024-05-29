/*
Le variabili di partenza memorizzano il progresso di avanzamento di uno studente in un percorso universitario. A partire da tali variabili stampa a schermo il risultato di 6 comparazioni considerando i seguenti punti:

Per ognuna delle 6 comparazioni, la variabile usata come operando di sinistra deve essere diversa da quella usata come operando di destra.
Usa ognuno dei seguenti operatori ==, !=, <=, >, <, ===
Fai in modo che 3 comparazioni stampino a schermo true e le rimanenti false
const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;
*/

//Argomenti
const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

//Visualizzazione del operatore
console.log(examsCompleted <= average);
console.log(firstYearCompleted != isGraduated);
console.log(firstYearCompleted <= yearsCompleted);
console.log(isGraduated == yearsCompleted);
console.log(yearsCompleted === firstYearCompleted);
console.log(firstName === lastname);