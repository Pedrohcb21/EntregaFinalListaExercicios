const promptSync = require('prompt-sync');
const prompt = promptSync();

/* 2. Uma revendedora de carros usados paga a seus funcionários vendedores um salário 
fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do 
valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros 
por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe 
por carro vendido. Calcule e escreva o salário final do vendedor */

console.log("******Calcule o seu salário final(com comissão e salário fixo)******");

//Variáveis
let decisao = "";

//Lógica
while(decisao.toLocaleUpperCase() != "N") {
    let salarioFixo = prompt ("Qual o seu salário fixo? ");
    let carrosVendidos = prompt("Quantos carros você vendeu esse mês? ");
    let totalCarrosVendidos = prompt("Somando o valor de todas as suas vendas, qual seria o valor final? ");
    let comissao = prompt ("Qual sua comissão fixa por carro vendido? ");

    let valorCarrosVendidos = (totalCarrosVendidos*5)/100;
    let comissaoFixa = carrosVendidos * comissao;

    let valorFinal = (Number(salarioFixo) + Number(valorCarrosVendidos) + Number(comissaoFixa));

    //Resultado
    console.log("------O seu salário final é "+valorFinal+"R$------");

    decisao = prompt("Deseja calcular outra vez?(digite S ou N) ");
};

console.log("----------------------");
console.log(" PROGRAMA FINALIZADO! ");
console.log("----------------------");