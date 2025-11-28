alert("Bem vindo ao calculador de área de um triângulo.")
alert("Se com os valores inseridos não for possível formar um triângulo os valores serão apresentados na tela.")
const b = Number(prompt("Digite o valor da base: "))
const l2 = Number(prompt("Digite o valor de um dos lados: "))
const l3 = Number(prompt("Digite o último lado: "))
const h = Number(prompt("Digite a altura do triângulo: "))
if (b + l2 > l3 && l2 + l3 > b && b + l3 > l2) {
    alert("A área do triângulo é igual a " + b * h / 2)
} else {
    alert("A base é: " + b + " os lados são " + l2 + " e " + l3 + " e a altura é " + h + ".")
}