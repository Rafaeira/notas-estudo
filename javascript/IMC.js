alert("Seja bem vindo a calculadora de IMC...")
const h = Number(prompt("Qual a sua altura? "))
const p1 = prompt("Você é homem ou mulher? Digite H para homem e M para mulher.")
if (p1 == "H") {
    alert(72.7 * h - 58)
} else if (p1 == "M") {
    alert(62.1 * h - 44.7)
} else {
    alert("Digite um valor entre H e M, tente novamente.")
}
