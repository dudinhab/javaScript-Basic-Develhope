/*
Partendo dall'oggetto creato nell'esercizio precedente, scrivi un ciclo for in dove stampiamo le chiavi dell'oggetto car
*/

//La criazione dell'oggetto
const car={
    name:'Corsa',
    color:'red',
}

//Utilizzo "for in" per visualizzare l'oggetto completamente senza dover scrivere elemento per elemento
for(let key in car){
    hasOwnProperty = car[key]
    if(hasOwnProperty){
    console.log(`Questo é il valore della chiave ${key} nell'oggeto car: ${car[key]}`)
}
}