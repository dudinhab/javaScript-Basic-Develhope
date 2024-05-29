/*
Crea la variabile favoriteFood e utilizza un costrutto switch per stampare i seguenti messaggi:
"You like PIZZA!" se favoriteFood contiene il valore "pizza" "You like COCONUT!" se favoriteFood contiene il valore "coconut" "You like something else!" in tutti gli altri casi
*/

let favoriteFood = "COCONut";
//Poiché Switch è una funzione con distinzione tra maiuscole e minuscole, ho scelto di aggiungerla in modo che non vi siano errori con il valore della variabile, non venendo modificato se l'input viene effettuato con una lettera maiuscola o minuscola.
favoriteFood = favoriteFood.toLowerCase();

switch (favoriteFood) {
    case "pizza":
        console.log("You like PIZZA!");
        break;

    case "coconut":
        console.log("You like COCONUT!");
        break;

    default:
        console.log("You like something else!");
        break;

}