// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total)
// }
// funcao(1, 2, 3, 4, 5, 6);

// function soma(a, b = 2, c = 10) {
//     console.log(a + b + c);
// }
// soma(2);

// function dados(nome, sobrenome, idade){
//     console.log(nome, sobrenome, idade);
// }
// dados({
//     nome: 'Luiz', sobrenome: "Silva", idade: 20
// });

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);

const a = [1, 2, 3];
const b = [7, 8, 9];

console.log([...a,4, 5, 6, ...b]);