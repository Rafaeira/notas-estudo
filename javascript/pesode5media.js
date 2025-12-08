alert("Seja bem vindo ao calculador da média de peso entre 5 homo sapiens sapiens.")
let i
let p
let s = 0
for(i = 1; i <=5; i++){
    p = Number(prompt("Digite os pesos: "))
    s = (s + p)
}
alert("A média aritimética simples do peso das 5 pessoas é: " + s/5)