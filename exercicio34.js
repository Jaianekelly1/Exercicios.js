// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

let a = "arara";
let b = "arabe";

console.log(contaLetras(a) == contaLetras(b));

function contaLetras(s) {
    s = s.toLocaleLowerCase(); //colocanto a string toda em minusculo
    let fields = {} //criando um obj
    
    for(let i=0; i<s.length; i++) {
        let letra = s[i];
        fields[letra] = true; //adcionando uma propriedade no obj
    }
    console.log(fields);
    return Object.entries(fields).length; //retorna uma lista com todos os bjs
}

