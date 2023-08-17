const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) // verifica se o número é inteiro e retorna "true or false"    

const avaliacao1 = 9.832
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // delimita o número de casas decimais a serem impressas
console.log(media.toString(2)) // converte para binário
console.log(typeof media) // retorna o tipo da variavel