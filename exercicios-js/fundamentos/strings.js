const escola = 'Cod3r'
/* digito = índice
        C = 0
        o = 1
        d = 2
        3 = 3
        r = 4
*/

console.log(escola.charAt(4)) // função que a letra q está no índice 4 da String 'escola'
console.log(escola.charAt(5)) // retorna um valor vazio, não gera erro
console.log(escola.charCodeAt(3)) // valor na tabela ASC do dígito de índice 3 da String 'escola'
console.log(escola.indexOf('3')) // saber o índice associado ao dígito 3 da String 'escola'

console.log(escola.substring(1)) // a partir do índice 1 até o final 
console.log(escola.substring(0, 3)) // da 3 caracteres partindo do índice 0

console.log('Escola '.concat(escola).concat('!')) // concatenação 1
console.log('Escola ' + escola + '!') // concatenação 2
console.log(escola.replace(3, 'e')) // substitui o 3 pelo e

console.log('Ana,Maria,Pedro'.split(',')) // converte String em array