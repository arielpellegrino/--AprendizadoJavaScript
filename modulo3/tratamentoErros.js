//try, catch throw

// try {
//     console.log('a VARIAVEL X NÃO EXISTE', x);
// } catch(erro) {
//     console.log('a mansagem de erro ');
//     console.log(erro);
// }

function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new  ('x e y precisam ser numeros.');
    }

    return x + y;
}

try {
    console.log(soma("a", 'b'));
} catch (e) {
    console.log(e);
}