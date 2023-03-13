// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

function nota(vetor) {
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] <= 4.9) {
            console.log('D')
        }else if(vetor[i] >= 5.0 && vetor[i] <= 6.9) {
            console.log('C')
        }else if(vetor[i] >= 7.0 && vetor[i] <= 8.9) {
            console.log('B')
        }else if(vetor[i] >= 9.0 && vetor[i] <= 10.0) {
            console.log('A')
        }
    }

}

vetor = [0.0, 5.0, 7.0, 10.0]
nota(vetor)

