//String
let nome = 'Ariel Pellegrino';
console.log(nome);

//Inteiro
let idade = 28;
console.log(idade);

//Decimal
let altura = 1.75;
console.log(altura);

//Bolean
let timePalmeiras = true;
console.log(timePalmeiras); 

let timeSantos = false;
console.log(timeSantos);


//Dados UNDEFINED

//NaN = Not a Number: O JS não consegue interpretar o calculo
let a = "a";
let dois = 2;
console.log( a * dois);

//Null> O valor não foi definido
let numeroDados = null;
console.log(numeroDados);

//Undefinid = O javascript informa que não existe valor atribuída a ela

let estouEmCasa;
console.log(estouEmCasa);


// Objeto Literal 

/*
let objetvoLiteral {
propriedade: valor;
}
*/

let meuCarro = {
    marca: 'Mercedes',
    modelo: 'mercedes gla 200',
    ano: 2027,
    cor: 'preto',
};

//arrays
// Nos arrays a contagem dos indices começam do 0

let meusLivros = [
    'Livro1',
    'Livro2',
    'Livro3',
    'Livro4',
    'Livro5',
]

console.log(meuCarro);

//Criando um objeto
let ariel = {
    nome: "Ariel",
    idade: 27.5,
    Solteiro: false,

}

let arredondando = Math.round(ariel.idade);

console.log(ariel);
console.log(arredondando);

console.log(meusLivros[2]);