//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
//sintaxe: arr.fill(valor[, ínicio = 0[, fim = this.length]])
//Parametros:
// valor: Valor para preencher o array.
// ínicio: Opcional. Índice inicial.
// // fim: Opcional. Índice final.
// O método fill() preenche os elementos especificados em uma matriz com um valor.
// O método fill() substitui o array original.
// As posições inicial e final podem ser especificadas. Caso contrário, todos os elementos serão preenchidos.

const arr1 = [1, 2, 3, 4];
console.log(arr1.fill(1));

const frutas = ['banana', 'pessego', 'caju', 'limão'];


console.log(frutas.fill(1,1 ));