const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 3. Escreva  um  algoritmo  que  solicite  ao  usuário  que  informe:  quantidade  atual  em 
estoque,  quantidade  máxima  em  estoque  e  quantidade  mínima  em  estoque  de  um 
produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade  média  =  quantidade 
máxima  +  quantidade  mínima)/2).  Se  a  quantidade  em  estoque  for  maior  ou  igual  a 
quantidade  média  exibir  a  mensagem  'Não  efetuar  compra',  senão  escrever  a 
mensagem 'Efetuar compra'. */

console.log("*****Calcule a média do seu estoque*****");

//Leitura de dados
let estoqueAtual = prompt("Digite o seu estoque atual: ");
let estoqueMax = prompt("Digite a quantidade máxima do seu estoque: ");
let estoqueMin = prompt("Digite a quantidade mínima do seu estoque: ");

//Váriaveis
let mediaEstoque = (Number(estoqueMax) + Number(estoqueMin)) / 2;
    
//Lógica e resultados
if (estoqueAtual >= mediaEstoque) {
    console.log("Não  efetuar  compra.");
} else {
    console.log("Efetuar compra.");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");


