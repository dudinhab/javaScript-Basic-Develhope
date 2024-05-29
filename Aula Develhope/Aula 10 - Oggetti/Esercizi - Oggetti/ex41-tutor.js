/*
Abbiamo l'oggetto smartphone. Utilizzando uno specifico metodo degli oggetti, possiamo rendere questo oggetto 'freezato', e quindi non modificare il prezzo così facilmente. Sapresti scrivere il metodo che ci serve?

const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

smartphone.price = 100;

console.log(smartphone);
*/

//La criazione dell'oggetto
const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

//Congelando l'oggetto in modo che non vi sia alcuna variazione di valore
Object.freeze(smartphone);
//Cercando di modificare il prezzo per controllare il congelamento
smartphone.price = 100;
//Visualizzazione per verificare se c'è stata una modifica nell'oggetto
console.log(smartphone);