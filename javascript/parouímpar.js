alert("Opa eu sou o programa que diz se o número é par ou ímpar, se você não sabe você veio no lugar certo.")
const n1 = Number(prompt("Digite um número: "))
const p = (n1 % 2) * -1
console.log(p)
if (p == 0) {
    alert("Olha que legal esse número é par :)")
} else if (p > 0) {
    alert("Olha que massa esse número é ímpar :D")
} else {
    alert("Digite apenas números inteiros, tente novamente.")
}
