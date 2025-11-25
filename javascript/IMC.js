alert("Seja bem vindo a calculadora de IMC...")
const p1 = prompt("Você é homem ou mulher? Digite H para homem e M para mulher.")
const h = prompt("Qual a sua altura? ")
if (p1 == "H") {
    alert(72.7 * h - 58)
} else if (p1 == "M") {
    alert(62.1 * h - 44.7)
}
