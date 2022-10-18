// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
// O método every() executa uma função para cada elemento do array.
// O método every() retornará true se a função retornar true para todos os elementos.
// O método every() retornará false se a função retornar false para um elemento.
// O método every() não executa a função para elementos vazios.
// O método every() não altera o array original
//sintaxe: array.every(function(currentValue, index, arr), thisValue)
//Parametros: 
// callback: Função que testa cada elemento, recebe três parametros:
//      currentValue (obrigatório): O elemento atual sendo processado na array.
//      index (opcional): O índice do elemento atual sendo processado na array.
//      array (opcional): O array de origem.
// thisArg: Opcional. Valor a ser usado como this quando o callback é executado.

// Verifique se todos os valores em idades[] são maiores que 18:
const idades = [32, 22, 16, 40];
idades.every(checandoIdade);

function checandoIdade(idade) {
    return idade > 18;
}
console.log(idades.every(checandoIdade));

//--------------------------------------------
function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));//false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true