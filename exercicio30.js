// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function percorrer(vetor) {
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior) {
                maior = vetor[i]
            }if(vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return[maior, menor]
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(percorrer(vetor))