const area = prompt('Você quer seguir para área de Front-End ou seguir para a área de Back-End?');
var tec = [];
let aprender = "";

if (area == 'Front-End') {
   aprender = prompt('Você quer aprender React ou aprender Vue?');
}
else if (area == 'Back-End') {
    aprender = prompt('Você quer aprender C# ou aprender Java?');
}
else {
    alert("Você não inseriu uma área válida!");
}

const espc = prompt('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar FullstackVocê quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?')
if (espc == 1) {
    alert (`Continue se especializando em ${aprender} para dominar a área de ${area}!`);
}
else if (espc == 2) {
    alert (`Chegou a hora de começar a aprender outras linguagens além de ${aprender} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let resposta = prompt('Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?');

while (resposta != 'Não') {
    tec.push(resposta);
    alert (`${resposta}é uma técnologia muito interessante!`);
    resposta = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
}

alert(`Você gostaria de aprender ${tec}`);