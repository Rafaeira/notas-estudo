Java Script:
Quando você quer digitar um texto você utiliza "" para escrever, já quando o comando não é um texto você não coloca aspas (Duplas ou normal tanto faz).
Por exemplo:
console.log("Hello Word")
   Resultado terminal: Hello Word
console.log(1+1)
   Resultado terminal: 2
Se você colocar + entre palavras com "" o programa irá somar (Concatenar) os textos (Strings).
Por exemplo:
console.log("50" + "50")
   Resultado terminal: 5050
Para criar uma variável no JS você pode usar tanto o let quanto o const, com o let você pode mudar a variável futuramente por exemplo:
let numero = 102
console.log(numero)
numero = 99
console.log(numero)
   Resultado terminal: 99
   Pois como usamos let você pode alterar a variável em uma outra linha.
De maneira semelhante você pode usar o const a diferença é que se você atribuir um valor usando const você não poderá alterar no futuro como o próprio nome é constante.
const nome = "Rafael"
console.log(nome)
   Resultado terminal: Rafael
Já se escrevessemos:
const nome = "Rafael"
console.log(nome)
nome = "Lucas"
console.log(nome)
   Resultado terminal: Erro
   Pois usando a variável const não podemos alterar o valor da variável.


Em HTML podemos usar o comando <script src="nomedoseuarquivoemjava.js"></script> para executar comandos em java dentro do site.

O comando prompt é utilziado para pedir uma informações para o usuário que será armazenada dentro da respectiva variável, seguimos com exemplo:
const n1 = prompt("Digite um número") *O número digitado aqui pelo usuário será 4 por exemplo
alert(n1)
O resultado no site será:
4
Para escrevermos na tela em um site utilizamos o alert("Hello Word") em vez do console.log("Hello Word")
alert("Opa tudo bom")
  O resultado no site será: Opa tudo bom
Para que o programa considere a informação digitada pelo usuário como um número você deve digitar Number e abrir () antes do prompt, segue o exemplo:
const n1 = Number(Prompt("Digite um número"))
Fazemos isso para que se realizarmos uma soma o programa ao invés de somar os termos (1 + 1 = 11) fazer o cálculo matemático que seria (1 + 1 = 2), vamos aos exemplos:
const n1 = prompt("Digite um número") --O número digitado pelo usuário aqui será 7 como exemplo.
const n2 = prompt("Digite outro número") --O número digitado aqui pelo usuário será 3 como exemplo.
const resultado = (n1 + n2)
alert(resultado)
  O resultado no terminal nesse caso será: 73 --Pois como não colocamos Number() atrás do prompt o script considerou as varíaveis n1 e n2 como string (Texto)
Agora se colocarmos Number:
const n1 = Number(prompt("Digite um número")) --O número digitado pelo usuário aqui será 5 como exemplo.
const n2 = Number(prompt("Digite outro número")) --O número digitado aqui pelo usuário será 6 como exemplo.
const resultado = (n1 + n2)
alert(resultado)
  O resultado no terminal será: 11
Pois agora as variáveis n1 e n2 são consideradas números pelo programa.


Dentro do JS podemos aplicar condições ao nosso código usando if, else e if else, por exemplo:
const p1 = prompt("Serra dourada é a capital do Brasil? Digite utilizando [Y/N])
if (p1 == Y) {
   console.log("Está errado... a capital do Brasil é Brasília.)
} if else (p1 == N) {
   console.log("Boaa sabe muito.)
} else {
   console.log("Digite apenas entre as opções Y ou N.)
}




Nome de arquivo, variavel etc NÃO USA NÚMERO, ACENTO, NÚMERO (1) E ESPAÇO.
String = Texto Juntar / texto = Concatenar
Abrir terminal Ctrl + '

Tipos de escrita de variável:
mediaDeNotas // CamelCase
MediaNotas //PasquelCase
media_notas //Snacke_Case