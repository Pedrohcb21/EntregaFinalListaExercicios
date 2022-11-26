const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 1. O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com  a 
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo 
que  o  percentual  do  distribuidor  seja  de  28%  e  os  impostos  de  45%,  escrever  um 
algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao 
consumidor. */

//Variáveis
let decisao = ""

//Lógica
while(decisao.toLocaleUpperCase() != "N") {
    let valor = prompt(" Digite o custo de fábrica do veículo para saber o seu custo final ao consumidor(incluindo porcentagem do distribuidor e impostos): ");

    let valorDistribuidorCalc = 28 * valor;
    let valorDistribuidor = valorDistribuidorCalc/ 100;

    let valorCarro = Number(valor) + Number(valorDistribuidor);

    let valorFinalCalc = valorCarro * 45;
    let valorFinalCalc2 = valorFinalCalc /100;

    let valorFinal = Number(valorCarro) + Number(valorFinalCalc2)

    //Resultado
    console.log("------O valor final do carro ao consumidor é: " +valorFinal+"R$------");

    decisao = prompt("Deseja calcular o valor de outro veículo(digite S ou N)? ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");