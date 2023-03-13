// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function caixa(valorDoSaque) {
    let notasDe100 = Math.floor(valorDoSaque/100);
    valorDoSaque = valorDoSaque % 100;
    let notasDe50 = Math.floor(valorDoSaque/50);
    valorDoSaque = valorDoSaque % 50;
    let notasDe20 = Math.floor(valorDoSaque/20);
    valorDoSaque = valorDoSaque % 20;
    let notasDe10 = Math.floor(valorDoSaque/10);
    valorDoSaque = valorDoSaque % 10;
    let notasDe5 = Math.floor(valorDoSaque/5);
    valorDoSaque = valorDoSaque % 5;
    let notasDe1 = valorDoSaque;
    console.log(notasDe100, notasDe50, notasDe20, notasDe10, notasDe5, notasDe1);
}

caixa(99);


// Forma diferente de fazer
// function sacarDinheiro(valorSaque) {
//     let contador100 = 0
//     let contador50 = 0
//     let contador10 = 0
//     let contador5 = 0
//     let contador1 = 0
//     let valorNota = calcularValorNota(valorSaque)
//     while (valorSaque >= valorNota) {
//         switch (valorNota) {
//             case 100:
//                 valorSaque -= 100
//                 contador100++
//                 break
//             case 50:
//                 valorSaque -= 50
//                 contador50++
//                 break
//             case 10:
//                 valorSaque -= 10
//                 contador10++
//                 break
//             case 5:
//                 valorSaque -= 5
//                 contador5++
//                 break
//             case 1:
//                 contador1++
//                 valorSaque -= 1
//                 break
//         }

//         valorNota = calcularValorNota(valorSaque)

//     }
//     return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
// }

// function calcularValorNota(valorSaque) {
//     if (valorSaque >= 100) {
//         return 100
//     } else if (valorSaque >= 50) {
//         return 50
//     } else if (valorSaque >= 10) {
//         return 10
//     } else if (valorSaque >= 5) {
//         return 5
//     } else if (valorSaque >= 1) {
//         return 1
//     }
// }

// function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
//     let resultado = ''

//     if (contador100 > 0) {
//         resultado += `${contador100} nota(s) de R$ 100. `
//     }

//     if (contador50 > 0) {
//         resultado += `${contador50} nota(s) de R$ 50. `
//     }

//     if (contador10 > 0) {
//         resultado += `${contador10} nota(s) de R$ 10. `
//     }

//     if (contador5 > 0) {
//         resultado += `${contador5} nota(s) de R$ 5. `
//     }

//     if (contador1 > 0) {
//         resultado += `${contador1} nota(s) de R$ 1. `
//     }

//     return resultado
// }

// console.log(sacarDinheiro(153));