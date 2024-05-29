function somma(a,b, callback){
    callback(a+b);
}

let cb = function(result){
    console.log(`The result is: ${result}`)
}
somma(2,3,cb)

//setTimeout é uma função global disponivel para utilizar um delay para execução de uma função
//setTimeout (função, tempo de delay - Milesecondi)
setTimeout(function(){
    console.log(`Hello word!`);
}, 2500)


function sayHello(){
    console.log(`Hello Word 2!`);
}
//como não estamos invocando a função e sim passando ela para uma execução, nao se deve meter os ()
setTimeout(sayHello, 2500)