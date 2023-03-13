// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function numeroNegativos(vetor) {
    let quantidadeDeNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            quantidadeDeNegativos++
        }
    }
    return quantidadeDeNegativos
}

vetor = [-1, -2, -5, 6, 8, 10, -7, -9]
console.log(numeroNegativos(vetor))