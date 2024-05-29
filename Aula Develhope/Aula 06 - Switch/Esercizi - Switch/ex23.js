/*
Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:
Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€
*/

let tariffa = "HB";
tariffa = tariffa.toUpperCase();

switch (tariffa) {
    case "BB":
        console.log("La tariffa é 50€");
        break;

    case "HB":
        console.log("La tariffa é 80€");
        break;

    case "FB":
        console.log("La tariffa é 100€");
        break;

    default:
        console.log("Questa tariffa é sconosciuta!");
        break;
}