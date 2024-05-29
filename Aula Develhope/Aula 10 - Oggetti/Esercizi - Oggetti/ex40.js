/*
Partendo dall'esercizio precedente, conosci altri modi per copiare l'oggetto user senza modificare le sue proprietà?

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
*/


let user = {
    name: "Cosimo",
    age: 30,
};

let newUser = Object.assign({}, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);