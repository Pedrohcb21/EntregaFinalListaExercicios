const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 6. Escrever um algoritmo que lê a quantidade informada de pessoas que não estão sendo 
monitoradas no posto de saúde. Para cada pessoa é anotada o peso e a altura (em 
metros), que é fornecida pelo usuário, sendo que o peso igual a zero informa o final 
da leitura. Calcule e escreva: 
a. A maior altura informada, 
b. A menor altura informada, 
c. A média dos pesos informados. */

console.log("*********************************************");
console.log(" MONITORAMENTO POSTO DE SAÚDE! ");
console.log("*********************************************");

//Variáveis
let decisao = "";
let pesos = [];
let alturas = [];
let total = 0;

//Lógica
while (decisao.toLocaleUpperCase() != "NAO") {
    let fila = prompt("Primeiramente informe a quantidade de pessoas que ainda não estão sendo monitoradas: ");

    for (let i = 0;i < fila;i++) {
        pesos[i] = prompt("Digite o peso da pessoa: ");
        
        if (pesos[i] != 0) {
            alturas[i] = prompt("Agora digite a altura: ");
        } else {
            i = i - 1;
            console.log("Informe o peso real do paciente.");
        };
    };
    
    for (let x in pesos) {
        total += Number(pesos[x]);
    };

    //Variáveis 
    const media = total / pesos.length;
    const maiorAltura = Math.max(...alturas);
    const menorAltura = Math.min(...alturas);

    //Resultados
    console.log("---------------------------------------------");
    console.log(" A média do peso dos pacientes é: ",media.toFixed(2))
    console.log("---------------------------------------------");
    console.log(" A maior altura entre os pacientes é: ",maiorAltura.toFixed(2))
    console.log("---------------------------------------------");
    console.log(" A menor altura entre os pacientes é: ",menorAltura.toFixed(2))
    console.log("---------------------------------------------");

    decisao = prompt("Deseja continuar monitorando pacientes?(digite SIM ou NAO) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");