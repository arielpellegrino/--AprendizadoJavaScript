function criaPessoa(nome, sobrenome,a,p) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${this.nome} está ${this.assunto}.`;
        },
        altura: a,
        peso: p,
        imc(){
            const
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p1 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
/*console.log(p1)
console.log('</br>')*/
console.log(p1.pergunta('JavaScript'))