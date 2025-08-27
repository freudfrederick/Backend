// importando a lib prompt-sync
let prompt = require('prompt-sync')()

//importar o modulo Calculadora
let {calcSoma, calcSubtracao, calcMultiplicar, calcDividir, calcQuadrado, calcRaiz} = require('./calculadora.js');

console.log('---- CALCULADORA ----');
console.log('1 - Soma');
console.log('2 - Subtração');
console.log('3 - Multiplicação');
console.log('4 - Divisão');
console.log('5 - Quadrado');
console.log('6 - Raiz');
let operacao = parseInt(prompt('Escolha a operação matemática: '));

switch(operacao){
    case 1: 
        var num1 = parseInt(prompt('Insira o primeiro número: '));
        var num2 = parseInt(prompt('Insira o segundo número: '));
        var soma = calcSoma(num1, num2);
        console.log(`A soma de ${num1} + ${num2} é: ${soma}.`);
        break;
    case 2:
        var num1 = parseInt(prompt('Insira o primeiro número: '));
        var num2 = parseInt(prompt('Insira o segundo número: '));
        var subtracao = calcSubtracao(num1, num2);
        console.log(`A subtração de ${num1} - ${num2} é: ${subtracao}.`);
        break;
    case 3:
        var num1 = parseInt(prompt('Insira o primeiro número: '));
        var num2 = parseInt(prompt('Insira o segundo número: '));
        var multiplicar = calcMultiplicar(num1, num2);
        console.log(`A multiplicação de ${num1} * ${num2} é: ${multiplicar}.`);
        break;
    case 4:
        var num1 = parseInt(prompt('Insira o primeiro número: '));
        var num2 = parseInt(prompt('Insira o segundo número: '));
        var dividir = calcDividir(num1, num2);
        console.log(`A divisão de ${num1} / ${num2} é: ${dividir}.`);
        break;
    case 5:
        var quad = parseInt(prompt('Insira o número: '))
        var quadrado = calcQuadrado(quad);
        console.log(`O quadrado de ${quad}: ${quadrado}.`);
        break;
    case 6:
        var raiz = parseInt(prompt('Insira o número: '))
        var raizquad = calcRaiz(raiz);
        console.log(`A raiz de ${raiz}: ${raizquad}.`);
        break;
}



/*let soma = calcSoma(num1, num2);
let subtracao = calcSubtracao(num1, num2);
let multiplicar = calcMultiplicar(num1, num2);
let dividir = calcDividir(num1, num2);

console.log(`A soma de          ${num1} + ${num2} é: ${soma}.`);
console.log(`A subtração de     ${num1} - ${num2} é: ${subtracao}.`);
console.log(`A multiplicação de ${num1} * ${num2} é: ${multiplicar}.`);
console.log(`A divisão de       ${num1} / ${num2} é: ${dividir}.`);*/