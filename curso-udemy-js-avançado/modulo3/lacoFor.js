// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par)
// }

// console.log('---------------------------------------');
// //Perconrrendo um array
// const frutas = ['Maçã', 'Pera', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//ExercicioFor

const elemntos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < elemntos.length; i++) {
    let { tag, texto } = elemntos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
};
container.appendChild(div);