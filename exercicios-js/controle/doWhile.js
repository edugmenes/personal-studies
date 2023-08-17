//variante da estrutura while, garante que pelo menos uma vez haja repetição no laço
//muito pouco usada
function getInterioAleatoiroEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 
do{
    opcao = getInterioAleatoiroEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Fim')