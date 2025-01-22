let umaString = "o rato roeu a roupa do rei de roma.";

//Maneira 1
console.log(umaString.charAt(5));
//Maneira 2
console.log(umaString[5]);

//concatenação
console.log(umaString.concat(' ', 'em', ' ', 'um', ' alo romora'));

//indice da palavra texto - No caso o "3", voce esta indicando de qual posição ele começára a busca
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o', 3));

//expressão regular -> usando a letra /g ee traz os caracteres
console.log(umaString.match(/[a-z]/g))

//replace - subistitui uma palavra 
console.log(umaString.replace("um", "outra"))
console.log(umaString.replace(/um/, "outra"))

//tamanho da string
console.log(umaString.length)

//fatiar uma string
console.log(umaString.slice(2, 6))
console.log(umaString.slice(-3))

//dividir string atraves de caracter: 'r' a letra a ser tirada e 2 a quantidade de vezes
console.log(umaString.split('r', 2))

//string em maiuscula, minuscula
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase())
