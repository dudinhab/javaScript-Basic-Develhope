/*
Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". Per fare questo, andremo ad utilizzare la funzione di JavaScript setTimeout(), questa come avete visto nel video, prende due parametri: il primo parametro è una funzione, il secondo sono i millesimi di secondo di delay. Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".
*/

//Chiamando la function con una function callback di parametro
sayHelloName(`Duda`, printName)

//Function con solo il parametro di callback
function sayHelloName(firstName, callback) {
    //Delay per visualizare il nome
    setTimeout(()=>callback(firstName), 1000);
}
//Seconda function, quindi il callback
function printName(a) {
    console.log(`Hello ${a}!`);
}