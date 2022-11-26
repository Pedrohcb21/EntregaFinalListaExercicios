const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 7. Escrever um algoritmo que lê cinco números inteiros, um de cada vez, armazena os 
números lidos em um vetor e a partir da leitura do vetor imprime qual é o maior e o 
menor dos números lidos e também a soma dos números lidos. */

//Variáveis
let decisao = "";
let inteiros = [];
let soma = 0; 

//Parte lógica
while (decisao.toLocaleUpperCase() != "NAO") {
    console.log("Digite cinco números inteiros: ");

    for (let i = 0;i < 5;i++) {
        inteiros[i] = prompt();    
    }

    for (let x in inteiros) {
        soma += Number(inteiros[x]);
    }

    //Variáveis
    const maiorNum = Math.max(...inteiros);
    const menorNum = Math.min(...inteiros);

    //Resultados
    console.log("---------------------------------------------");
    console.log(" O menor número digitado foi: ",menorNum)
    console.log("---------------------------------------------");
    console.log(" O maior número digitado foi: ",maiorNum)
    console.log("---------------------------------------------");
    console.log(" A soma dos números digitados é: ",soma)
    console.log("---------------------------------------------");
    
    decisao = prompt("Executar novamente?(digite SIM ou NAO) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");