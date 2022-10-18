//objetos

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    Fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log('----------')
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.Fala();


//função

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

//const pessoa1 = criaPessoa('luiz', 'otavio', 25 )
const pessoa2 = criaPessoa('Ariel', 'pellegrino', 29)

console.table(pessoa1.nome)
console.table(pessoa1.sobrenome)
console.table(pessoa1.idade)

console.table(pessoa2.nome)
console.table(pessoa2.sobrenome)
console.table(pessoa2.idade)

//