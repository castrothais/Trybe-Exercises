// Exercício 1

testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);
  
// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

oddsAndEvens[0] =2;
oddsAndEvens[1] =3;
oddsAndEvens[2] =4;
oddsAndEvens[3] =7;
oddsAndEvens[4] =10;
oddsAndEvens[5] =13;

return oddsAndEvens;
}
const sorteArray = sortOddsAndEvens();
console.log(`Os números ${sorteArray} ordenados de forma crescente !`);

// BÔNUS
//Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let numbers = [13, 3, 4, 10, 7, 2];
numbers.sort((a, b) => a - b );
console.log(`Os número estão em ordem crescente ${numbers}`);

