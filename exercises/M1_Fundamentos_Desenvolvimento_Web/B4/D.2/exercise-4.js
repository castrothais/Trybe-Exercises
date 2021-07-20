let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index])
    
}

let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
}
console.log('A soma é' + ' ' + soma);
  
for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
}
let mediaAritmetica = soma / numbers.length;

console.log('A média aritmética é' + ' ' + mediaAritmetica);

if(mediaAritmetica > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}


let maiorNumeroNoMomento = numbers[0]
for( let index1 = 1; index1 < numbers.length; index1 +=1) {
    if(numbers[index1] > maiorNumeroNoMomento) {
        maiorNumeroNoMomento = numbers[index1]
    }
}
console.log('O maior número é ' + ' ' + maiorNumeroNoMomento)


let numerosImpares = 0;
for (index1 = 0; index1 < numbers.length; index1 +=1) {
    if(numbers[index1] %2 !== 0) {
        numerosImpares +=1;
    }
} 
     if (numerosImpares ===0) {
        console.log('nenhum valor ímpar encontrado');
    } else {
     console.log('Existem' + ' ' + numerosImpares + ' '+ 'número ímpares');
    }

let menorValor = numbers[0];
for(index2=0; index2 < numbers.length; index2 +=1) {
    if(menorValor > numbers[index2]) {
        menorValor = numbers[index2]
    }
}
console.log('O menor valor é' + ' '+ menorValor);

for (let index4 = 0; index4 < numbers.length; index4 +=1) {
    console.log(' '+ numbers[index4] /2 );
}

// Exercicio 2:

let arrayDeNumero = []
for(index3 = 1; index3 <= 25; index3 +=1) {
    arrayDeNumero.push(index3);
}
console.log(arrayDeNumero);

