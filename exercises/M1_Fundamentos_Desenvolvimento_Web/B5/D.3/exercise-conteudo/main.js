const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function ChangeTech(event) {                           //1º Criar função
  const techElement = document.querySelector('.tech'); //2º Recuperar o elemento
  techElement.classList.remove('tech');                // 3º remove(), remove uma ou mais classes do elemento
  event.target.classList.add('tech');                  // 4º add(), adiciona uma ou mais classes ao elemento.
  input.value = '';                                    // 5º O valor do input é uma string.
}

divUm.addEventListener('click', ChangeTech);
divDois.addEventListener('click', ChangeTech);
divTres.addEventListener('click', ChangeTech);

//3.Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

// 1º Recuperar o elemento e guardar em uma variável - Linha 4
input.addEventListener('input', (event) => {              // 2º Adicionar um evento
const techElement = document.querySelector('.tech');     // 3º Recuperar o elemento no qual vai ocorrer o evento
techElement.innerText = event.target.value               // 4º Inserir Texto
});

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// Referência: https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809

myWebpage.addEventListener('dblclick', () => {
window.location.href = 'https://www.linkedin.com/in/thaisdecastros/';
});

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo

myWebpage.addEventListener('mouseover', (event) => {
event.target.style.color = 'yellow';
});

//Referência: https://desenvolvimentoparaweb.com/javascript/eventos-javascript/

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});