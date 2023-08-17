/* palavras reservadas para TRATAMENTO DE ERROS:
    try = bloco de potencialmente pode gerar algum tipo de erro
    catch = tratamento do erro usando throw
    throw = personalização do tratamento do erro
    finally = chamado de qualquer forma no final */


function tratarErroELancar(erro){
    //throw new Error('...') //mensagem de erro
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{ //bloco de código que contém um código que pode ter algum tipo de erro

        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e) { 

        tratarErroELancar(e)

    } finally { //bloco que sempre será executado no final
        console.log('final')
    }
}


const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)