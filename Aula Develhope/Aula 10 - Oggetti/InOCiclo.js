let person = {
    name:'Duda',
    age:1,
    sayHello: function(){}
}

if ('age' in person){
    person.age = person.age+1;
    console.log(person.age);
}
else{
    console.log(`Age not present on person object!`)
}

//passa por todas as chaves do objeto
for (let key in person){
    console.log(key, person[key]);
}