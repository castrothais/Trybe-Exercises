/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que 
checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF 
deve retornar o total da contagem de respostas certas.*/

/*Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver 
resposta ("N.A") não altera-se a contagem.*/

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pointExame = (rightAnswers, studentAnswers, checkResult) => {
    let result = 0;
    for (index = 0; index < rightAnswers.length; index +=1) {
        if (rightAnswers[index] === studentAnswers[index]) {
            result += 1; 

        } if (studentAnswers[index] === 'N.A') {
            result+=0;
        
        } if (rightAnswers[index] !== studentAnswers[index]) {
            result -= 0.5;
    }
} 

};



 

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indesa) => {
    console.log('Cada elemento do array:', element);
    console.log('Index, posição do elemento:', indesa);
});