//Entrada - Variáveis
//Média aritimética entre três notas condicionada a:
// Menor que 3 horrível, menor que 7 da pra melhorar e maior que 7 gênio.
const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))
const nota3 = Number(prompt("Digite a terceira nota: "))

//Processamento
const soma = (nota1 + nota2 + nota3)
const media = (soma/3)

//Menor que 3 = Horrível
//Menor que 7 = Da para melhorar
//Maior que 7 = Mandou bem
if (media <3) {
    alert("O conhecimento te persegue mas você é mais rápido, sua média está atualmente igual a: " + media + "👎")
} else if (media < 7) {
    alert("Irmão não ta ruim mais da pra melhorar... Sua média atual é igual a: " + media)
} else if (media <=10) {
    alert("Que isso sabe muito... Sua média atual é igual a: " + media)
} else {
    alert("Digite apenas valores entre 0 e 10... Tente novamente")
}