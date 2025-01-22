// A propriedade constructor retorna a função que criou o protótipo Array.
// Para matrizes JavaScript, a propriedade do construtor retorna:
// function Array() { [código nativo] }
//sintaxe: array.constructor

const frutas = ['Banana', 'maçã', 'pera'];
let text = frutas.constructor;

console.log(text);