// FILTER
// O .filter() é um método de array que filtra elementos com base em uma condição 
// e retorna um novo array apenas com os elementos que passaram no teste.

// Diferente do .map(), que transforma elementos, o .filter() seleciona elementos.

// Array.filter((elemento, indice, arrayOriginal) =>{
//     // retorna true ou false
// })


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maiorQueCinco = numeros.filter(num => num > 5);
console.log(maiorQueCinco); // [6, 7, 8, 9, 10]

const pessoas = [
    {
        nome: 'Lucas',
        idade: 23
    },
    {
        nome: 'Maria',
        idade: 34
    },
    {
        nome: 'João',
        idade: 45
    }
]

const validaPessoas = pessoas.filter(pessoas => pessoas.idade > 30);
console.log(validaPessoas)