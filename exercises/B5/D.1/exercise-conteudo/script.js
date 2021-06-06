//1- Alterando o background da Parte Urgente
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(240, 245, 245)';

//2-Alterando o background da Parte Não Urgente
const noemergencytasks = document.getElementsByClassName('no-emergency-tasks')[0];
noemergencytasks.style.backgroundColor = 'white';

//3- Alterando o background da Parte Urgente e Importante/Não importante;
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'red';
  }

//4- Alterando o background da Parte Não Urgente e Importante
const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for ( let index =0; index < noEmergencyTasks.length; index +=1) {
    noEmergencyTasks[index].style.backgroundColor = 'rgb(255, 204, 255)';
}

//5- Alterando o background do Administrador do Tempo da Trybe
const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = 'rgb(0, 204, 153)';

//6- Alterando o background da Trybe
const footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = 'rgb(179, 255, 255)';

