const imprimirResulado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResulado(10)
imprimirResulado(4)
imprimirResulado('Epa!') //cuidado!
