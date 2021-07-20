/* 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório
entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao 
número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
// Referência: http://devfuria.com.br/javascript/numeros-aleatorios/

const loteryResult = () => {
let numberAleatory = Math.floor(Math.random()*5) + 1; //Gera números aleatórios entre 1 e 5. 
console.log(`O número sorteado é ${numberAleatory}`);
return numberAleatory;

}

const checkResult = (loteryResult) => {
   let numberBet = 3;
    if (numberBet === loteryResult()) {
        return 'Parabéns você ganhou';
    } 
    return 'Tente novamente'
}

console.log(checkResult(loteryResult));