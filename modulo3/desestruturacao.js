//Desestruturação com rest operator
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const [um, dois, tres, ... resto] = numeros;
const [um, , tres, cinco, , ] = numeros;

//console.log(um, tres, cinco)

//console.log(um, dois, tres);

//rest -  operador de resto
//console.log(resto);

// const numbers = [
//     [1, 2, 3], // indice 0
//     [4, 5, 6], // indice 1
//     [7, 8, 9]  // indice 2
// ]

// const [lista1, lista2, lista3] = numbers;

// console.log(numbers[2][0]);
// console.log(lista1[2]);

function listagem (primeiro, segundo, ...outros) {
    console.log(`Na lista estão: ${primeiro}, $. Os demais são: ${outros.join(', ')}.`)
  }

  listagem('Pedro', 'Maria', 'João', 'Marcus', 'Tiago')
  // Na lista estão: Pedro, Maria. Os demais são: João, Marcus, Tiago.

  const pessoas = ['Pedro', 'Maria', 'João']

  const todasAsPessoas = [ ...pessoas, 'Marcus', 'Tiago']

  console.log(todasAsPessoas)
  // [ 'Pedro', 'Maria', 'João', 'Marcus', 'Tiago' ]