//Função para não precisar repetir todos os inputs toda vez
function person(name, age) {
    //Chama o mesmo objeto para inserir o parameto indicado
    this.name = name;
    this.age = age;
    this.growUp = function () {
        this.age += 1
    }
    //se a função é criada assim, e é passado para outra variavel o parametro dela com uma variavel de input, ele nao retorna o valor inputado, apenas como nao definido, se ao inves disso, insere como um arrow function, ele passa o valor completo
    //this.sayHello = function(){
    this.sayHello = () => {
        console.log(`Hello, my name is ${this.name}, and i'm ${this.age} years old!`)
    }
}

//Inserindo o primeiro input passando os parametros para a função com os valores que serão atribuidos no objeto
let Duda = new person('duda', 25);
//Visualização do objeto já com o input
console.log(Duda);
Duda.sayHello();
let sayHello = Duda.sayHello
sayHello();