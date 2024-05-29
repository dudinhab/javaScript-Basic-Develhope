let person = {
    name: 'Billy',
    age: 25,
     //objeto dentro de outro objeto sendo criado
     residenza:{
        citta:'ivrea',
    }
}
//Essa copia aponta um referimento ao person, é copia de um caminho, e não a copia das keys e conteudos, se muda um, muda os dois
//Uma indicação da onde esta aquele objeto na memoria do computador
//ReferenseTypes
let personCopy = person;
person.age += 1

console.log(person.residenza.citta===personCopy.residenza.citta);
console.log(person, personCopy, person === personCopy);


//Para passar todo o conteudo é necessario fazer um for in
//Elas não serão mais iguais porque o referimento do local guardado é diferente
//ValuesTypes 
let personCopy2 = {}
for (let key in person) {
    personCopy2[key] = person[key];
}
//Essa comparação deu True porque pega a referencia de um objeto dentro de outro objeto, nao foi passado o valor conforme o restante das keys
console.log(person.residenza.citta===personCopy2.residenza.citta);
console.log(personCopy2, personCopy, personCopy2 === person);