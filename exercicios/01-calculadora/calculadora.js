function calcSoma(num1, num2){
    return num1 + num2
}

function calcSubtracao(num1, num2){
    return num1 - num2
}

function calcMultiplicar(num1, num2){
    return num1 * num2
}

function calcDividir(num1, num2){
    return num1 / num2
}

function calcQuadrado(quad){
    return quad * quad
}

function calcRaiz(raiz){
    return Math.sqrt(raiz)
}

module.exports = {
    calcSoma,
    calcSubtracao,
    calcMultiplicar,
    calcDividir,
    calcQuadrado,
    calcRaiz
}