/*
Scrivi una funzione che prenda come parametro un array di oggetti, ognuno dei quali rappresenta una macchina con le seguenti proprietà: brand, model, year. La funzione dovrebbe restituire un nuovo array di stringhe che contenga la marca e il modello di ogni macchina nel formato "brand model".
Stampare il nuovo array.
*/

const car=[
    {
      brand: "Ferrari",
      model: "F40",
      year: 1987,
    },
    {
      brand: "Lamborghini",
      model: "Aventador",
      year: 2011,
    },
    {
      brand: "Bugatti",
      model: "Chiron",
      year: 2016,
    },
]
const arrayCar=[];
for(let i=0;i<car.length;i++){
    arrayCar.push(car[i].brand+" "+car[i].model);
}
console.log(arrayCar);