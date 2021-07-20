let notaCandidato = 95;

if (notaCandidato >80) {
    console.log("Parabéns, você foi aprovada(o)!");

}
else if (notaCandidato >= 60 && notaCandidato < 80) {
    console.log("Você está na nossa lista de espera");
}

else if (notaCandidato <60) {
    console.log("Você foi reprovada(o)");
}

// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"