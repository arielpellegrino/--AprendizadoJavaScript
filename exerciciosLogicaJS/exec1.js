//Escreva uma função que recebe 2 números de retorna o maior deles

// Minha solução
function bigNumber() {
    const a = 434324;
    const b = 342342;

    if (a > b) {
        console.log(a + ' é maior que ' + b);
    } else if (b > a) {
        console.log(b + ' é maior que ' + a)
    }
}

bigNumber();

//Solução do Video
// function max(x, y) {
//     if (x > y){
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(max(1, 2));

//refatoração
function max(x, y) {
    if (x > y){
        return x > y ? x : y;
    }
}

console.log(max(1, 2));