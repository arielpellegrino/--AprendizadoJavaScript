const produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'}
];

//MAP
/* const ids = produtos.map(produto => produto.id);
const nomes = produtos.map(produto => produto.nome);
console.log(ids);
console.log(nomes);

const numeros = [1,2,3,4,5];
const duplicados = numeros.map(x => x * 2);
console.log(duplicados) */

//FILTER
const alimentos = produtos.filter(p => p.categoria === 'alimento' );
const alinome = produtos.filter(p => p.nome === "leite")
// console.log(alimentos)
// console.log(alinome)

//REDUCE - recebe 2 argumentos / valor acumulado / item do array
const numeros = [1,2,3,4];
const total = numeros.reduce((acc, numero ) => acc + numero);
// console.log(total)


//10 metodos Array ROCKETSEAT
let latinhas = ["koka-kola", "Esprite"]

//PUSH adiciona um item no array   [INSERT]
latinhas.push("fanta-uva");
console.log('push = ', latinhas)


//FILTER filtra o que você quer [SEARCH]
const latinhasAtualizadas = latinhas.filter(latinha => {
    return latinha !== "Esprite"
})
console.log('filter =', latinhasAtualizadas);

//FIND pega só um valor [SEARCH]
const latinhasKoka = latinhas.find(function(latinha){
    return latinha == "koka-kola";
})
console.log('find', latinhasKoka);

//INCLUDES - retorna true(dado encontrado) ou false(dado não encontrado) [SEARCH]
console.log(latinhas.includes("koka-kola"));

//aqui ele procura o (dado procurado, posição do array "a partir daqui") [SEARCH]
console.log(latinhas.includes("koka-kola", 2));


latinhas = [...latinhas, "Tubaina"];
console.log(latinhas)


//SLICE [CUT]

latinhas.slice(1, 0)
console.log(latinhas)
