// MAP = percorer um array e fazer algo com cada item
/* 
O método .map() em JavaScript é usado para iterar sobre um array e transformar seus elementos em um novo array, sem modificar o original. 
Ele recebe uma função de callback que é aplicada a cada item do array e retorna um novo array com os resultados.
*/
//1️⃣ Convertendo números em um novo array
//const numeros = [1, 2, 3, 4]
//const dobrados = numeros.map(num => num * 2);
//console.log(dobrados); // [2, 4, 6, 8]

//2️⃣ Trabalhando com objetos – Transformando dados
const usuarios = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Maria', idade: 34 },
    { nome: 'João', idade: 45 }
];
const nomes = usuarios.map(user => user.nome);
console.log(nomes); // ['Lucas', 'Maria', 'João']

//3️⃣ Modificando Strings

const frases = ["olá mundo", "aprendendo map", "javascript é incrivel"];

const fraseMaiscula = frases.map(frase => frase.toUpperCase());
console.log(fraseMaiscula); // ['OLÁ MUNDO', 'APRENDENDO MAP', 'JAVASCRIPT É INCRIVEL']

// -------------------------- PARAMETROS DO MAP

//(1) Primeiro parâmetro: Elemento
const numeros = [10, 20, 30];
const dobrados = numeros.map((numero) =>{
    return numero * 2;
})
console.log(dobrados); // [20, 40, 60]


//(2) Segundo parâmetro: Índice
const letras = ["a", "b", "c"];
const resultado = letras.map((letra, indice) =>{
    return `${letra} + ${indice}`;
})

console.log(resultado); // ['a + 0', 'b + 1', 'c + 2']

//(3)Terceiro parâmetro: Array Original
const xnumeros = [5, 10, 15];

const xresultado = xnumeros.map((num, index, array) => {
  return `Número: ${num}, Índice: ${index}, Array Original: ${array}`;
});

console.log(xresultado);