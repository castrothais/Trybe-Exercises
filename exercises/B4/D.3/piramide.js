
let n = 5;
let asteriscos = '*';
let linha = '';
let middel = (n + 1) / 2;
let positionDireita = middel;
let positionEsquerda = middel;

for(let index = 0; index <= middel; index += 1) {
    for(let i = 0; i <= n; i += 1) {
        if (i < positionDireita && i > positionEsquerda) {
            linha = linha + asteriscos;
    } else {
        linha = linha + ' ';
    }
 }
 console.log(linha);
 linha = '';
 positionDireita += 1;
 positionEsquerda -= 1;
}