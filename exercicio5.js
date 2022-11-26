const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 5. A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de 
indústrias  que  são  altamente  poluentes  do  meio  ambiente.  O  índice  de  poluição 
aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo 
são  intimadas  a  suspenderem  suas  atividades,  se  o  índice  crescer  para  0,4  as 
industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades, se o índice 
atingir  0,5  todos  os  grupos  devem  ser  notificados  a  paralisarem  suas  atividades. 
Escreva um algoritmo que solicite ao usuário que informe o índice de poluição medido 
e emita a notificação adequada aos diferentes grupos de empresas. */

console.log("*********************************************");
console.log(" Verifique o nivel de poluição das empresas! ");
console.log("*********************************************");

//Leitura de dados
let indice = prompt("Digite o índice médio de poluição medido: ");

//Lógica e resultados
if (indice < 0.30) {
    console.log("Índice de poluição dentro do limite!");
} else if (indice >= 0.30 && indice < 0.40) {
    console.log("Índice de poluição a partir de (0.30) já ultrapassou o nível permitido. As indústrias do 1º grupo serão notificadas para paralisarem suas atividades.");
} else if (indice >= 0.40 && indice < 0.50) {
    console.log("Índice de poluição a partir de (0.40) já ultrapassou duas vezes o nível permitido. As indústrias do 1º e do 2º grupo serão notificadas para paralisarem suas atividades.");
} else if (indice >= 0.50) {
    console.log("Índice de poluição a partir de (0.50) já ultrapassou todos os níveis permitidos. Todos os grupos de industrias serão notificados para paralisarem suas atividades.");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");