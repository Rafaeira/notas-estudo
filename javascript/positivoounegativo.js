alert("Bem vindo ao analisador de números! Digite qualqure número e eu te direi se ele é positivo ou negativo.")
n1 = Number(prompt("Digite o primeiro número: "))
if (n1 >= 0) {
    alert("Esse número é positivo, que legal :D")
} else if (n1 < 0) {
    alert("Esse número é negativo, que legal :D")
} else {
    alert("Irmão isso não é um número, para de ser burro e tenta denovo.")
}