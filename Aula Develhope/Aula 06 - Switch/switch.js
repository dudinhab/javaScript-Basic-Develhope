//Variavel para receber um valor
let food = "pizza"
food = food.toUpperCase();
// food.toUpperCase(); é importante porque switch é Case sensitive, quindi é necessário estar totalmente igual para ser considerado um caso.

//Switch coloca uma variavel em evidencia e coloca para cada resultado uma consequencia, tendo uma default em caso de não se ajustar a nenhuma dessas condições
switch (food) {
    case "pizza":
        console.log("I like pizza!");
        break;

    case "burrito":
        console.log("I like pizza!");
        break;

    default:
        console.log("I don't know this food!");
        break;
}