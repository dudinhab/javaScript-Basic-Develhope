/*
Le variabili booleane sono utilizzate per memorizzare condizioni che possono essere o vere o false.

Crea 5 variabili booleane, assegnando loro true se sono vere, false se non lo sono.
Cerca di nominarle in modo significativo: guardando il nome della variabile, devo immediatamente capire qual è la condizione che verifica quella variabile. Un esempio di nome di variabile booleana potrebbe essere itIsRaining (sta piovendo).
Stampa a schermo le variabili create.
*/
//Variabili create come const, poiché i loro valori non variano durante l'esecuzione
//Se ho fame 
const iAmHungry = false;
//Se ho cibi in frigo
const iHaveFoodInTheFridge = true;
//Se sono a casa
const iAmAtHome = true;
//Se c'e un Supermercato vicino a me
const isThereASupermarketNearMe=true;
//Se ho soldi
const iHaveMoney=true;

//Espressione per vedere se mangerò
const iAmGoingToEat = iAmHungry && ((iHaveFoodInTheFridge&&iAmAtHome)||(!iAmAtHome&&isThereASupermarketNearMe&&iHaveMoney));

//Visualizzazione dell'argomento
console.log(iAmGoingToEat);

//se eu estou com fome, se tem comida, e se estou na minha casa, posso fazer comida
//se eu estou com fome, se nao tem comida, se nao estou na minha casa, se tem algo perto para comprar comida e se eu tenho dinheiro, posso comprar