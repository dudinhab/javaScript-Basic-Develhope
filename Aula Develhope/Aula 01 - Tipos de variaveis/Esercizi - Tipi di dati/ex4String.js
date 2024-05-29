/*
Si vogliono memorizzare il nome e il cognome di una persona in due variabili di tipo stringa. Crea quindi una nuova variabile fullName la quale dovrà contenere il nome completo della persona a partire dalle due variabili definite prima. Stampa infine a schermo la variabile fullName.

Ricorda che tra il nome e il cognome deve esserci uno spazio
Puoi concatenare le stringhe con l’operatore +
*/
//Variabili create come const, poiché i loro valori non variano durante l'esecuzione
//Nome 
const firstName = 'Maria Eduarda';
//Cognome
const lastName = 'de Paula Barone';
//Nome completo
const fullName = firstName+' '+lastName;

//Visualizzazione dell nome completo
console.log('Fullname: '+fullName);