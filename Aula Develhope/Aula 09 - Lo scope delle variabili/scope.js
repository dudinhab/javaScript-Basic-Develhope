//var é utilizado para poder ser chamado antes do nivel dele (top level)
//function são top level, logo, pode ser chamada antes do bloco de execução dele

console.log(`Vamos testar!`)
myFunction();
function myFunction(){
console.log(a);
if(true){
    var a=10;
    console.log(a);
}
console.log (`Leitura da função`)
}