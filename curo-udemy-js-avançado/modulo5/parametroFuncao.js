
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1,1,1,3,3,3)

function nome({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'John', sobrenome: 'John', idade: 24};
nome(obj)

function name([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

name(['Ariel', "miranda", 30])