// O método copyWithin() copia parte de um array para outra localização dentro deste mesmo array e o retorna, sem alterar seu tamanho.

// O método copyWithin() copia os elementos do array para outra posição no array.
// O método copyWithin() substitui os valores existentes.
// O método copyWithin() não adiciona itens ao array.

// target: Posição para a qual os elementos serão copiados. Caso negativo, o target será contado a partir do final.
// start: Índice inicial de onde se copiará os elementos. Caso negativo, o start será contado a partir do final.
// end Optional: Índice final de onde se copiará os elementos. Caso negativo, o end será contado a partir do final.

// Os argumentos target, start e end são restritos a Number e truncados para valores inteiros.
// Se start for negativo, ele é tratado como length+start, onde length é o comprimento do array. Se end for negativo, ele é tratado como length+end.
// A função copyWithin é intencionalmente genérica, não requer que seu valor this seja um objeto Array e, adicionalmente, copyWithin é um método mutável, irá mudar o próprio objeto this e retorná-lo, não apenas retornar uma cópia dele.

//sintaxe: arr.copyWithin(target, start[, end = this.length])



//Copie os dois primeiros elementos da matriz para os dois últimos elementos da matriz:
const frutas = ['banana', 'laranja', 'maçã', 'manga', 'kiwi'];
frutas.copyWithin(3,2);
console.log(frutas);

frutas.copyWithin(2, 0, 2)
console.log(frutas);
//Copie os dois primeiros elementos da matriz para a terceira e quarta posição:

const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(1, 0, 2);
console.log(numbers);