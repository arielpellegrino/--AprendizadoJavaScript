// Escreva uma função que recebe um numero e retorne o seguinte
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = BUzz
// Numero é divisivel por 3 e 5 = FIzzBUzz
// Numero NÃO é divisivel por 3 e 5 = Retorn o proprio número
// Checar se o numero é realmente um número
// Use a função com numeros de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';

    return numero;
}
console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}