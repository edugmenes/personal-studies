const imprimirResultado = function (nota) {
    
    //padrão para estruturas de multiplas seleções:
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
            //palavra reservada que faz sair do switch
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida!')
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(0)