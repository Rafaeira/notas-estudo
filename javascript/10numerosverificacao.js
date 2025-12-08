alert("Seja bem vindo ao verificador de números inteiros.")
alert("Digite 10 números e eu te direi quantos negativos você digitou.")
let n
let i
let s = 0
for(i = 1; i <= 10; i++){
    n = Number(prompt("Digite os números: "))
    if (n < 0) {
        s = (s+1)
    }
}
alert("Você digitou " + s + " números negativos.")