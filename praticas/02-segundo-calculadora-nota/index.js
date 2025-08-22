// importando a lib prompt-sync
let prompt = require('prompt-sync')()

//Usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome? ")

//usando o nome capturado pelo prompt
console.log("Olá, " + nome)

//importar o modulo CalcularNota
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./calculadoraNota.js')

//Perguntar pro usuário a nota de exercícios, trabalho e prova
let exerciciosA1 = parseFloat(prompt("Qual a nota do exercício A1: "))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho A1: "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "))
let notaA1 = parseFloat(calcularNotaA1(exerciciosA1, trabalhoA1, provaA1))

console.log("### Calculo da NOTA A1 ###")
console.log("Nota Exercício A1: ", exerciciosA1)
console.log("Nota Trabalho A1: ", trabalhoA1)
console.log("Nota Prova A1: ", provaA1)
console.log("Nota A1 CALCULADA: ", notaA1)


let exerciciosA2 = parseFloat(prompt("Qual a nota do exercício A2: "))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2: "))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2: "))
let notaA2 = parseFloat(calcularNotaA2(exerciciosA2, trabalhoA2, provaA2))

console.log("### Calculo da NOTA A2 ###")
console.log("Nota Exercício A2: ", exerciciosA2)
console.log("Nota Trabalho A2: ", trabalhoA2)
console.log("Nota Prova A2: ", provaA2)
console.log("Nota A2 CALCULADA: ", notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("### Calculo da NOTA FINAL ###")
console.log("Nota final: ",notaFinal)

if (notaFinal >= 5){
    console.log("Parabéns " + nome + ", você foi Aprovado!!!")
}
else{
    console.log("Estude mais " + nome + ", você foi Reprovado!!!")
}
