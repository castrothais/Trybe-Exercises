// EXercício 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) => {
    let resultado = 1;
    for ( let index = 1; index <= number; index +=1) {
        resultado*=index;
    }
return resultado
}
console.log(fatorial(3));


//BÔNUS:
// Recursividade Usando Ternary OPerator
let fatorial = (number) => (number ===1) ? 1 : number*fatorial(number-1);
console.log(fatorial(5));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254