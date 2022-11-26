const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 9. Escrever  um  algoritmo  que  lê  uma  quantidade  não  informada  de  dados  de  pessoas 
que estão sendo monitoradas no posto de saúde. Para cada pessoa é anotada o sexo 
(M ou F) e a altura (em metros), que é fornecida via teclado, sendo que a altura igual 
a zero informa o final da leitura. Armazenar as informações em vetores e 
posteriormente, calcule e escreva: 
a. A maior altura informada, 
b. A média das alturas das mulheres, 
c. A quantidade de homens,
d. A menor altura dos homens. */

//Variáveis
let decisao = "";
let m = [];
let f = [];

//Lógica
while (decisao.toLocaleUpperCase() != "NAO") {
    console.log(" Digite o sexo e altura das pessoas não monitoradas:");
    console.log("-----------------------------------------------------");
    let registroM = prompt(" Quantos homens deseja registrar? ");
    console.log("-----------------------------------------------------");
    let registroF = prompt(" Quantas mulheres deseja registrar? ");
    console.log("-----------------------------------------------------");

    console.log("Vamos começar pelos homens:");
    for (let i = 0;i < registroM;i++) {
        m[i] = prompt("Digite a altura do paciente que será registrado: ");
        console.log("-----------------------------------------------------");
        if (m[i] == 0) {
            console.log("Altua igual a 0 não é permitida, fim da leitura.");
            break;
        };
    };      

    console.log("Agora as mulheres:");
    for (let x = 0;x < registroF;x++) {
        f[x] = prompt("Digite a altura da paciente que será registrada: ");
        console.log("-----------------------------------------------------");
        if (f[x] == 0) {
            console.log("Altua igual a 0 não é permitida, fim da leitura.");
            break;
        };
    };

    //Variáveis dos resultados
    const maiorAlturaM = Math.max(...m);
    const maiorAlturaF = Math.max(...f);
    let maiorAltura = 0;

    if (maiorAlturaM > maiorAlturaF) {
        maiorAltura = maiorAlturaM;
    } else if (maiorAlturaF > maiorAlturaM) {
        maiorAltura = maiorAlturaF;
    };

    let mediaF = 0;
    let soma = 0;
    for (let y in f) {
        soma += Number(f[y])
    };
    mediaF = soma / f.length;

    let homens = m.length;

    let menorAlturaM = Math.min(...m);

    //Resultados
    console.log(" A maior altura informada é: ",maiorAltura.toFixed(2));
    console.log("---------------------------------------------");
    console.log(" A média de altura das mulheres é: ",mediaF.toFixed(2));
    console.log("---------------------------------------------");
    console.log(" A quantidade de homens registrados é: ",homens);
    console.log("---------------------------------------------");
    console.log(" A menor altura dos homens registrados é: ",menorAlturaM.toFixed(2));
    console.log("---------------------------------------------");


    decisao = prompt("Executar novamente?(digite SIM ou NAO) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");