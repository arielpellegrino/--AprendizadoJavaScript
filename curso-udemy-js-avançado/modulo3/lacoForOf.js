const nome = 'Ariel Pellegrino';
const nomes = ['Luiz', 'Otavio', 'Euller'];

for (let i = 0 ; i < nomes.length; i++ ) {
    console.log(nomes[i])
}
console.log('---------------------');

for (let i in nomes) {
    console.log(nomes[i])
}
console.log('---------------------');
for (let valor in nomes) {
    console.log(nomes[valor])
}
console.log('---------------------');
for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function (valor, indice, arrayCompleto){
    console.log(valor, indice, arrayCompleto);

})

nomes.forEach(elemento => {
    console.log(elemento)
})