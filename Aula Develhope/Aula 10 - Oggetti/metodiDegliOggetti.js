console.log(1..toFixed(2))

//copia de forma mais facil de um objeto
let person = {
    name:'Jimmy',
    age:22,
}

let employeeData={
    office:'12A',
    position: 'CEO',
}

//concatena e copia outros objetos para dedntro de um novo objeto
let employee = Object.assign({favoriteColor:'blue',},person, employeeData);

console.log(employee);