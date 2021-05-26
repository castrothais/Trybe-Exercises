//1.Faça cinco programas, um para cada operação aritmética básica. 
//Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. 

let a = 100;
let b = 50;

let soma = a+b;
console.log(soma)

let subtração = a-b;
console.log(subtração)

let multiplicação = a*b;
console.log(multiplicação)

let divisão = a/b;
console.log(divisão)

let módulo = a%b;
console.log(módulo)

//2.Faça um programa que retorne o maior de dois números. 
//Defina no começo do programa duas variáveis com os valores que serão comparados

let a = 200;
let b= 45;

if (a > b) {
    console.log(" a é maior que b")
} else {
    console.log("b é maior que a")
}

//3.Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 200;
let b = 100;
let c = 50;

if (a > b && a > c) {
    console.log("a é maior que b e c")
} else if (b > a && b > c) {
    console.log("b é maior que a e c")
} else {
    console.log("c é maior que a e c")
}

//4.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, 
//"negative" se for negativo e "zero" caso contrário.

let numero = 0;

if(numero > 0) {
    console.log("o numero é positivo")
}
else if(numero < 0) {
    console.log("o numero é negativo")
}
else {
    console.log("o numero é zero")
}

//5.Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloInternoA = 100;
let anguloInternoB = 35;
let anguloInternoC = 45;

let somaDosAngulosInternos = anguloInternoA + anguloInternoB + anguloInternoC;

let anguloEhPositivo = anguloInternoA > 0 && anguloInternoB >0 && anguloInternoC > 0;

if(anguloEhPositivo) {
    if(somaDosAngulosInternos ===180) {
        console.log(True)
    } else {
        console.log(False)
    };
} else {
    console.log('Erro: ângulo inválido')
}

//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Referência:https://www.ludijogos.com/multiplayer/xadrez/regras/

let pecaXadrez = 'torre';

switch (pecaXadrez.toLowerCase()) {
 case 'rei':
    console.log('O rei pode movimentar em todas as direções');
    break;
 case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
 case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
 case 'cavalo':
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, ou seja, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
 case 'torre':
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;
 case 'peão':
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;

    default:
    console.log('Erro, peça inválida!');
    break;
};

//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
//Siga essas regras:

let nota = 60;

if (nota < 0 || nota > 100) {
    console.log('Erro,nota incorreta')
} else if(nota >= 90){
console.log('A');
} else if(nota >= 80) {
    console.log('B');
} else if(nota >= 70) {
    console.log('C');
} else if(nota >= 60) {
    console.log('D');
} else if(nota >= 50) {
    console.log('E') 
} else if(nota < 50) {
    console.log('F')
}

//8.Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. 
//Caso contrário, ele retorna false .
let numero1 = 30;
let numero2 = 50;
let numero3 = 75;

if(numero1%2 === 0 || numero2%2 === 0 || numero3%2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

//9.Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. 
//Caso contrário, ele retorna false .
let numero1 = 30;
let numero2 = 50;
let numero3 = 100;

if(numero1%2 !== 0 || numero2%2 !==0 || numero3%2 !==0 ) {
    console.log(true)
} else {
    console.log(false)
}

//10.Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoProduto = 80;
let valorVendaProduto = 100;
const impostoProduto = 0.2 * custoProduto;

let valorCustoTotal = custoProduto + impostoProduto;
let lucro = valorVendaProduto - valorCustoTotal;

if(custoProduto >= 0 && valorVendaProduto >=0) {
    console.log('A empresa terá' + ' '+ lucro + ' ' + 'de lucro')
} else {
    console.log("Error, os valores não podem ser negativos");
}

