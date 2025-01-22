/*
let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [b,c,a];

 [a, b, c] = numeros;
console.log(a, b, c);
*/

/*
const numeros = [1, 2, 3, 4, 5, 6,7,8,9];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero,terceiroNumero, resto);*/

/*
const numeros = [
    [1,2,3],
    [3,4,5],
    [5,6,7],
]

console.log(numeros[0][2]);*/

const pessoa = {
    nome: 'Ariel',
    //idade: 29,
    endereco: {
        rua: 'Av Brasil',
        numero: 22
    }
};
const { nome, idade = 3} = pessoa;
console.log(nome, idade);