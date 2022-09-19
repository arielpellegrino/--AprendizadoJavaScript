//O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
// O método concat() concatena (junta) dois ou mais arrays.
// O método concat() retorna um novo array, contendo os arrays unidos.
// O método concat() não altera os arrays existentes.
// sintaxe: array1.concat(array2, array3, ..., arrayX)

const arr1 = ['A', 'B', 'C', 'D'];
const arr2 = ['1', '2', '3', '4'];
const arr3 = ['X', 'Y', 'W', 'Z'];

const concatenandoDoisArrays = arr1.concat(arr2);
const concatenandoTresArrays = arr1.concat(arr2, arr3);

console.log(concatenandoDoisArrays);
console.log(concatenandoTresArrays);

console.table(concatenandoDoisArrays);
console.table(concatenandoTresArrays);