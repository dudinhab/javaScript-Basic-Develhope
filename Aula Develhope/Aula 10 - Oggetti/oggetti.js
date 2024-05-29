

//Para criar um objeto deve ter essa estrutura
let person = {
    name:'Duda',
    age:25,
    sayHello: function(){
        console.log(`Hello!`)
    },
    //objeto dentro de outro objeto sendo criado
    residenza:{
        citta:'ivrea',
    }
}

let key='age'

console.log(person);
//dot notation
console.log(person.name);
//espressione
console.log(person['name']);
console.log(person['na'+'me']);
console.log(person[key]);
console.log(person.sayHello);
person.sayHello();
person.age = person.age+1;
console.log(person.age);
//objeto dentro de outro objeto sendo visualizado
console.log(person.residenza.citta);

person.favoriteColor = 'blue'
console.log(person);