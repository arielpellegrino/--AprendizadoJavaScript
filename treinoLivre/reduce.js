//REDUCE
// O .reduce() é um método poderoso que reduz um array a um único valor. 
// Ele percorre o array e acumula um resultado baseado em uma função que você define.

// Diferente de .map() (que transforma cada elemento) e .filter() (que filtra elementos), 
// o .reduce() é usado para resumir um array em um único resultado, como um número, um objeto, uma string, etc.

// Array.reduce((acumulador, elemento, indice, arrayOriginal) =>{
//     // retorna um valor
// }, valorInicial)

//(1) SOMAR TODOS OS NÚMEROS DE UM ARRAY

const numeros = [10, 20, 30, 40];

const soma = numeros.reduce((acumulador, numero) =>{
    return acumulador + numero;
}, 1)

const maiorNumero = numeros.reduce((acumulador, numero) =>{
    return numero > acumulador ? numero : acumulador;
})

console.log(maiorNumero);