// Array de objetos

const nomes = ["Daniel", "Maria", ""];
const pessoa = {
    nome: "Daniel",
    idade: 10,
    email: "ariel@ariel"
};
const pessoa1 = {};

const pessoas = [{
        nome: "Ariel",
        idade: 29,
    },
    {
        nome: "Danyelle",
        idade: 26,
    },
    {
        nome: "joão",
        idade: 25
    }
];

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`);
}