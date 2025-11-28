alert("Bem vindo ao calculador de imposto de renda, nada seu tudo do governo.")
const cpf = Number(prompt("Digite seu CPF: "))
const rendam = Number(prompt("Digite sua renda mensal: "))
const depen = Number(prompt("Digite o número de dependentes na sua residência: "))
let desconto = Number(prompt(""))
// Desconto de 5% do salário mínimo por dependente

//Alíquotas:

//Até 2 SM → isento
//Até 3 SM → 5%
//Até 5 SM → 10%
//Até 7 SM → 15%
//Acima de 7 SM → 20%
