//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimple(capitalInicial, taxaDeJuros, tempo) {
    return (capitalInicial * taxaDeJuros * tempo)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempo) {
    return Math.round(capitalInicial * Math.pow( (1 + taxaDeJuros), tempo))
    
}

console.log(jurosSimple(3000, 10/100, 6))
console.log(jurosComposto(8000, 3/100, 14))
