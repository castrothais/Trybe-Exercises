//Parte II - Funções

//1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function checkPalindromo(string){
    for(index in string){
      if(string[index] != string[(string.length - 1) - index]){
        return false;
      }
    }
    return true;
};

console.log(checkPalindromo('arara')); //true

//Outra forma de verificar se é um Palíndromo:
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }

//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaior(numbers) {
    let indiceMaior = 0;
    for (let index in numbers) {
        if (indiceMaior < numbers[index]) {
            indiceMaior = index;
        }
    }
    return indiceMaior;
  }
  console.log(indiceMaior([2, 3, 6, 7, 10, 1]));
  
//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenor (numbers1) {
    let indiceMenor = 0;
    for (let index in numbers1) {
        if(indiceMenor > numbers1[index]) {
            indiceMenor = index
        }
    }
    return indiceMenor;
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));

//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

function maiorPalavra (names) {
    let maiorPalavra = names[0];
    for (let index in names) {
        if (maiorPalavra.length < names[index].length) {
            maiorPalavra = names[index];
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
// 1° Para descobrir o maior número
function maiorNumero(numbers) {
    let numeroMaior = numbers[0];
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] > numeroMaior) {
        numeroMaior = numbers[index];
      }
    }
    return numeroMaior;
  }
  // 2° Quantas vezes o maior número aparece
  function highestCount(numbers) {
    let numeroMaior = maiorNumero(numbers);
    let resultado = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      if (numeroMaior === numbers[index]) {
        resultado += 1;
      }
    }
    return resultado;
  }
  console.log(highestCount([1, 3, 5, 7, 9, 9]));

//6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function sum(numeros) {
    let result = 0;
    for (let index = 1; index <= numeros; index += 1) {
      result = result + index;
    }
    return result;
  }
  console.log(sum(5)); 

//7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending está incluída na word.

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}