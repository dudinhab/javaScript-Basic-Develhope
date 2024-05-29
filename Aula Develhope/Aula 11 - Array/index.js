let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers[0]);
console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let persons=[
    {name:'Jimmy', age:14},
    {name:'Billy', age:24}
]

for (i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
}

/*
array.push() - coloca no final do Array
array.unshift() - coloca no inicio do array
array.pop() - retira o ultimo valor de Array (se coloca uma variavel para receber o valor, ele pega o valor removido)
array.shift() - retira o primeiro valor do array
array.join('') - separação entre as visualização dos indices
*/


let names = ['Billy', 'Jimmy', 'Kate'];
//forEach é como um for normal sem precisar utilizar toda a estrutura
names.forEach((item)=>{
    console.log(item);
})
