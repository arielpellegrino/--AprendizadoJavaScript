//FOR classico - geralmente com interaveis (array ou strings)
//FOR IN - retorna o indice ou chave(STRING, ARRAY OU objetos)
//FOR OF - Retorna o valor em si (interaveis, arrays ou strings)

const nome = 'Ariel Pellegrino';
const cores = ['vermelho', 'azul', 'amarelo', 'verde'];
const pessoa = {
    nome: 'Ariel',
    idade: '30',
    time: 'Palmeiras'
}

console.log('------------------------------------------')
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log('------------------------------------------')

for (let i in pessoa) {
    console.log(pessoa['nome'])
}
console.log('------------------------------------------')
