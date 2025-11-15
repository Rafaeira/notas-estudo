alert("Opa tudo bem, digita dois números ai que eu vou te falar qual é o maior entre eles")
const n1 = Number(prompt("Digite um número:"))
const n2 = Number(prompt("Digite outro número: "))
if (n1>n2) {
    alert("Entre os dois numerais o maior é o " + n1)
} else if (n2>n1) {
    alert("Entre os dois numerais o maior é o " + n2)
}