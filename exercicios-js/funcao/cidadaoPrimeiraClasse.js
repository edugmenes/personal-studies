// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function nomeDaFuncao(parametros){
    //bloco de código    
}

//Armazenar em uma variável
const funcao2 = function(){
}

//Armazenar dentro de um array
const array = [function (a,b) {return a + b}, funcao2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function() {return 'Opa'}
console.log(objeto.falar())

//Passar como parametro
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)

