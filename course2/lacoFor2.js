//FOR classico - geralmente com interaveis (array ou strings)
//FOR IN - retorna o indice ou chave(STRING, ARRAY OU objetos)
//FOR OF - Retorna o valor em si (interaveis, arrays ou strings)

const nome = 'Ariel Pellegrino';
const multiplosValores = ['banana', 'beringela', 'azul', 'teste']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}

for ( let valor of nome) {
    console.log(valor);
}

for ( let valor of multiplosValores) {
    console.log(valor);
}

for (let i in multiplosValores) {
    console.log(multiplosValores[i])
}

multiplosValores.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
});