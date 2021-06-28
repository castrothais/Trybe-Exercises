// Triângulo Invertido 

let n = 5;
let asteriscos= '*';
let linha = '';
let posicao = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < posicao) {
        linha = linha + ' ';
    } else {
        linha = linha + asteriscos;
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
};