alert("Opa eu sou o cara que vai te dizer que entre dois números qual é o maior, muito louco.")
const n1 = Number(prompt("Digite o primeiro número: "))
const n2 = Number(prompt("Digite o segundo número: "))
if (n1 > n2) {
    alert("O número " + n1 + " é maior que o número " + n2 + ".")
} else if (n2 > n1) {
    alert("O número " + n2 + " é maior que o número " + n1 + ".")
}