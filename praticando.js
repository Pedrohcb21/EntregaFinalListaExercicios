/* 1- Escreva um algoritmo que solicite a escrita de 5 animais, os mesmos devem ser armazenados 
em um array. O único detalhe é que não pode ser incluso animais duplicados, caso
tenha alguma duplicação, o algoritmo deve informar que aquele animal já foi digitado, caso
contrário o mesmo deve ficar salvo no array.

2- Faça um algoritmo que salve dados em uma matriz e de acordo com a data de nascimento 
realize a categorização - maiores de idade, menores de idade e idosos.

3- Faça um algoritmo que baseado na média dos alunos(> 60) quantifique o número de aprovados
e reprovados. */

var arr = [10,10,10,10]
var soma = 0
for (let i in arr) {
    soma += Number(arr[i])
}
console.log(soma)

// for (let i = 0;i < registro;i++) {
//     let sexo = prompt("Digite o sexo das pesssoa(m ou f): ")
//     if (sexo == "m") {
//         m[i] = prompt("Agora digite a altura da pessoa: ")
//         console.log("-------------------------------------")
//         if (m[i] == 0) {
//             console.log(" Altua igual a 0 não é permitida, fim da leitura.")
//             break;
//         }
//     } else if (sexo == "f") {
//         f[i] = prompt("Agora digite a altura da pessoa: ")
//         console.log("-------------------------------------")
//         if (f[i] == 0) {
//             console.log("Altua igual a 0 não é permitida, fim da leitura.")
//             break;
//         }
//     }
// }

// var masculino = m.sort()
// var feminino = f.sort()

// //Variáveis dos resultados
// const maiorAlturaM = Math.max(...masculino)
// const maiorAlturaF = Math.max(...feminino)
// let maiorAltura = 0

// if (maiorAlturaM > maiorAlturaF) {
//     maiorAltura = maiorAlturaM
// } else if (maiorAlturaF > maiorAlturaM) {
//     maiorAltura = maiorAlturaF
// };

// let mediaF = 0;
// let soma = 0;
// for (let x in f) {
//     soma += Number(f[x])
// }
// mediaF = soma / f.length

// let homens = masculino.length

// let menorAlturaM = Math.min(...m)

// //Resultados
// console.log("---------------------------------------------")
// console.log(" A maior altura informada é: ",maiorAltura.toFixed(2))
// console.log("---------------------------------------------")
// console.log(" A média de altura das mulheres é: ",mediaF.toFixed(2))
// console.log("---------------------------------------------")
// console.log(" A quantidade homens registrados é: ",homens)
// console.log("---------------------------------------------")
// console.log(" A menor altura dos homens registrados é: ",menorAlturaM.toFixed(2))
// console.log("---------------------------------------------")

// console.table(masculino)
// console.table(feminino)
// console.log(homens)
// console.log(maiorAlturaM)
// console.log(maiorAlturaF)
