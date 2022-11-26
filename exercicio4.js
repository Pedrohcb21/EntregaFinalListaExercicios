const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 4. Escreva  um  algoritmo  que  permita  que  o  professor  digite  as  notas  da  1a.  e  2a. 
avaliações  de  vários  alunos,  um  aluno  de  cada  vez.  calcule  e  imprima  a  média 
(simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) 
para cada nota. Após apresentar a media calculada, o algoritmo deverá perguntar se 
o professor deseja continuar calculando a media para outros alunos. Se a resposta for 
‘SIM’, o algoritmo continua, caso contrário, o algoritmo finaliza. */

let decisao = "";

//Lógica
while (decisao.toLocaleUpperCase() != "NAO") {
    let nome = prompt("Digite o nome do aluno: ");
    let nota1 = prompt("Digite a nota de humanas do aluno: ");
    let nota2 = prompt("Digite a nota de exatas do aluno: ");

    //Lógica e resultados
    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
        let media = (Number(nota1) + Number(nota2)) / 2;
        console.log("A média do aluno",nome,"foi:",media);
    } else {
        console.log("Erro!! Apenas notas entre 0 e 10.");
        break;
    };

    decisao = prompt("Deseja continuar calculando a média dos outros alunos?(digite SIM ou NAO) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");