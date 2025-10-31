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













Nome de arquivo, variavel etc NÃO USA NÚMERO, ACENTO, NÚMERO (1) E ESPAÇO.
String = Texto Juntar / texto = Concatenar
Abrir terminal Ctrl + '

Tipos de escrita de variável:
mediaDeNotas // CamelCase
MediaNotas //PasquelCase
media_notas //Snacke_Case