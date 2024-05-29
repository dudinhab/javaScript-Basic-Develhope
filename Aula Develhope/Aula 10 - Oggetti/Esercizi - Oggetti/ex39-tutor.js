/*
Nel nostro codice troviamo un oggetto user che presenta le proprietà name e age. Adesso, se vogliamo creare un nuovo utente partendo da user, e dopo proviamo a modificarne il nome, come vedrete dai console.log(), andremo a modificare anche l'oggetto di partenza. Sapresti creare una copia dell'oggetto user per poterne modificare il nome senza modificare quello di user?

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
*/

//Dichiarazione dell'oggetto User
let user = {
  name: "Cosimo",
  age: 30,
};

//Criazione dell'oggetto newUser senza niente
let newUser = {}
//Copia dell'oggetto di forma Values Type
for (let key in user) {
  newUser[key] = user[key];
}

//Cambiando il nome all'interno dell'oggetto newUser
newUser.name = "Paolo";

//Visualizzazione e verifica se i due oggetti sono diversi
console.log(`User:`)
console.log(user);
console.log(`newUser:`)
console.log(newUser);