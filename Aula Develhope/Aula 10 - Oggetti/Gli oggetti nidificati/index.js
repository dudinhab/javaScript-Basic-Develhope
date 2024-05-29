const Person={
    name:'Duda',
    age:25,
    address:{
        city:'Ivrea',
        number:2,
    }
}

//Não retona erro se não existir o objeto que esta chamando e sim um undefied
console.log(Person.address?.city);

//Nullish Coalescing Operator (se for vazio o primeiro, executa a parte da direita)
console.log(Person.address?.city ?? 'vazio');