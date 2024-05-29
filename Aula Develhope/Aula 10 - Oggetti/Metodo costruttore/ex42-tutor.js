/*
Scrivere un funzione di nome Smartphone che prenda come parametro i seguenti elementi: brand, name, price.
Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo.
*/

//Funzione per non dover ripetere ogni volta tutti gli input
function Smartphone(brand, name, price){
    //Richiama lo stesso oggetto con "this" per inserire il parametro indicato
    this.brand = brand;
    this.name = name;
    this.price = price;
}

//Inserendo i due input, passando i parametri alla funzione con i valori che verranno assegnati all'oggetto
let iPhone = new Smartphone('Apple','IPhone',1200);
let samsung = new Smartphone('Samsung','Galaxy', 500);

//Visualizzazione dei due oggetti creati, e visualizzati con for per non dimenticare nessuna riga di parametro
console.log(`iPhone`);
for (let key in iPhone){
    console.log(`${key}: ${iPhone[key]}`);
}
console.log('')
console.log(`Samsung`);
for (let key in samsung){
    console.log(`${key}: ${Samsung[key]}`);
}