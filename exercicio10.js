const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 10. Escrever  um  algoritmo  que  lê  uma  quantidade  informada  inicialmente  de  notas  de 
alunos da disciplina de Lógica. Para cada aluno são lidas quatro (4) notas variando de 
zero (0) a dez (10). Para ser aprovado o aluno necessita de média igual ou superior a 
seis (6). Ler as notas, calcular a média e armazenar em uma matriz (Vetor 
bidimensional).  Considere  o  índice  da  linha  da  matriz  como  o  número  do  aluno  na 
chamada. Após o cálculo da média, ler os dados e escrever: “O Aluno y foi Aprovado 
(ou Reprovado) com média x,xx”. No final informar: 
a. quantos alunos foram aprovados, 
b. quantos alunos foram reprovados, 
c. qual a porcentagem de alunos aprovados. */

//Variáveis
let nomes = [];
let notas = [];
let aprovados = [];
let reprovados = [];

//Leitura
console.log(" ----------------------------------------------------------------- ");
let alunos = prompt ("Quantos alunos você deseja registrar as notas? ");

//Lógica
for (var l = 0; l < alunos;l++) {
    var soma = 0;
    var media = 0; 
    
    notas[l] = [];
    console.log(" ----------------------------------------------------------------- ");
    nomes[l] = prompt("Digite o nome do aluno: ");
    console.log("Digite as 4 notas do aluno na seguinte ordem(HTML, CSS, Lógica e JS).");
    
    for (var c = 0;c < 4;c++) {
        notas[l][c] = prompt();
        soma += Number(notas[l][c]);
    };

    media = soma / 4;
    
    if (media >= 6) {
    console.log("O aluno",nomes[l],"foi aprovado com média",media,"!");
    aprovados[l] = media;
    } else if (media < 6) {   
        console.log("O aluno",nomes[l],"foi reprovado com média",media,"!");
        reprovados[l] = media;
    };
};

let aprovadosCalc = 0;
aprovados.forEach(aprovado => {
    aprovadosCalc = aprovadosCalc + 1;
});

let reprovadosCalc = 0;
reprovados.forEach(reprovado => {
    reprovadosCalc = reprovadosCalc + 1;
});

let mult = aprovadosCalc * 100;
let porcentagem = mult / alunos;

//Resultado
console.log("---------------------------------------------");
console.log(" Nessa turma",aprovadosCalc,"alunos foram aprovados!");
console.log("---------------------------------------------");
console.log(" Nessa turma",reprovadosCalc,"alunos ficaram reprovados!");
console.log("---------------------------------------------");
console.log(" Nessa turma",porcentagem.toFixed(2)+"% dos alunos foram aprovados!") ;
console.log("---------------------------------------------");

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");

