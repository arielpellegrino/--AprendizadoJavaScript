//Crie um Array Iterator e, em seguida, itere sobre os pares de chave/valor:
//O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.
//Não possui parametros
//sintaxe: arr.entries()

// O método entry() retorna um objeto Array Iterator com pares chave/valor:
// [0, "Banana"]
// [1, "Laranja"]
// [2, "Maçã"]
// [3, "Manga"]
// O método entry() não altera o array original.

const frutas = ['banana', 'laranja', 'maçã', 'manga', 'kiwi'];
const f = frutas.entries();

const arr = ['a', 'b', 'c'];
const eArr = arr.entries();

console.log(eArr);
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);

//Esse for é a mesma coisa que os consoles acima
for(let x of eArr) {
    console.log(x);
}