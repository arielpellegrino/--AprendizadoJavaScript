//função normal
function soma(x, y) {
    const resultado = x + y
    return resultado
}
console.log(soma(2, 2))

//função atraves de variavel    
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9))
console.log(raiz(3))
console.log(raiz(4))


//arrow function
const raizz =  (n) => {
    return n ** 0.5;
};

console.log(raizz(12))
console.log(raizz(6))
console.log(raizz(8))

