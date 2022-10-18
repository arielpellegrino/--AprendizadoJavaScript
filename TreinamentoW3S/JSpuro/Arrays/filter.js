//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
//sintaxe: var newArray = arr.filter(callback[, thisArg])
//Parametros:
// callback: Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
// element: O elemento que está sendo processado no array.
// index: O índice do elemento atual que está sendo processado no array.
// array: O array para qual filter foi chamada.
// thisArg Optional: Opcional. Valor a ser usado como this durante a execução do callback.

//Retorne uma matriz de todos os valores em idades[] com 18 anos ou mais:
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log(checkAdult());
//----
function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtrado é [12, 130, 44]
console.log(filtered);
console.log('---------------------------------')
/// teste 2

const times = ['Palmeiras', 'Santos', 'Curintia', 'Trikas'];
const filter = times.filter(validaTime) // const variavelFilter = variavelComDadosAseremValidados.filter(funçãoDeValidação);

function validaTime(time){
    return time == 'Palmeiras' ? 'Meu time é o Palmeiras' : 'Meu time é outro';
}
console.log(validaTime('Palmeiras'));