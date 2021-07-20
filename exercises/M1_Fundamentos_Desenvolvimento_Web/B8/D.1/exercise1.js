// JavaScript ES6 - Introdução a Higher Order Functions

/*1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova 
pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no 
formato nome_da_pessoa@trybe.com .*/

const employeesDates = (name, lastName) => {
  let lowerCaseName = name.toLowerCase();
  let lowerCaseLastName = lastName.toLowerCase();
  const employessData = {
    fullName: `${name} ${lastName}`,
    email: `${lowerCaseName}_${lowerCaseLastName}@trybe.com`,
  }
  return employessData;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza', 'Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla', 'Paiva '),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeesDates));



const churras = (vacinado) => {
  if (vacinado === true) return 'Parabéns Tryber, vocẽ pode ir no churras'
  return "o que está esperando"
}
console.log(churras(true));
