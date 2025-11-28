alert("Seja bem vindo a calculadora pré-histórica!")
alert("Em seguida você poderá digitar dois números e depois indicar a operação que deseja realizar entre eles.")
n1 = Number(prompt("Digite o primeiro número: "))
n2 = Number(prompt("Digite o segundo número: "))
po = prompt("Qual operação matemática você deseja realizar? Digite: (S = Soma / Su = Subtração / M = Multiplicação / D = Divisão)")
if (po == "S") {
    alert("O resultado dessa operação é: " + (n1 + n2))
} else if (po == "Su") {
    alert("O resultado dessa operação é: " + (n1 - n2))
} else if (po == "M") {
    alert("O resultado dessa operação é: " + (n1 * n2))
} else if (po == "D") {
    alert("O resultado dessa operação é: " + (n1 / n2))
} else {
    alert("Digite apenas um valor entre S / Su / M / D, tente novamente.")
}