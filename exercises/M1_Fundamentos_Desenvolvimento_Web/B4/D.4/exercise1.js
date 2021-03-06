// Parte I - Objetos e For/In:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Bem-Vinda,' + ' ' + info.personagem);

//2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
// em seguida, imprima o objeto no console.

console.log(info.recorrente);

// 3. Faça um for/in que mostre todas as chaves do objeto.
for ( let key in info) {
    console.log(key);
}

//4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for ( let value in info) {
    console.log(info[value]);
}

//5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }