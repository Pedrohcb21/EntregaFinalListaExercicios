const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 8. Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene-os 
nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome 
qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre 
os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. */

//Variáveis
let decisao = "";
let nomes = [];
let resultado = ""; 

//Lógica
while (decisao.toLocaleUpperCase() != "NAO") {
    console.log("Digite o nome de 10 pessoas: ");

    for (let i = 0;i < 10;i++) {
        nomes[i] = prompt();
    };

    let pesquisa = prompt("Digite um nome e veja se já foi salvo: ");

    for (let x in nomes) {
        if (pesquisa == nomes[x]) {
            resultado = "Achei";
            break;
        } else {
            resultado = "Não achei";            
        }
    };

    //Resultado
    console.log("--------");
    console.log(resultado);
    console.log("--------");

    decisao = prompt("Executar novamente?(digite SIM ou NAO) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");