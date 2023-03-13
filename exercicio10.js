// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function inteiro(numero) {
    if(numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(inteiro(3))
console.log(inteiro(5))
console.log(inteiro(100))