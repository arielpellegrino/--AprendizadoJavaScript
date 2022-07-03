//exibindo uma array
const alunos = ['luiz', 'maria', 'joão'];
console.log(alunos)
console.log('//exibindo uma array')
console.log('-----------------------------')

//metodo SLICE
alunos.slice(0, 2) //fatiando um array
console.log(alunos)
console.log('//metodo SLICE')
console.log('-----------------------------')

//verificar se o objeto é um array = instanceof
console.log(alunos instanceof Array)
console.log('//verificar se o objeto é um array = instanceof')
console.log('-----------------------------')

//acessando dados especifico
console.log(alunos[0])
console.log('//acessando dados especifico')
console.log('-----------------------------')

//inserindo um dado no array sem direcionar a posição, inserção automatica com base no tamanho do array
alunos[alunos.length] = 'andré'
alunos[alunos.length] = 'joribaldo'
console.log(alunos)
alunos[alunos.length] = 'aristoteles'
console.log(alunos)
console.log('inserindo um dado no array sem direcionar a posição, inserção automatica com base no tamanho do array')
console.log('-----------------------------')

//inserindo um dado no array
alunos[0] = 'ariel';
alunos[3] = 'zeze';
console.log(alunos)
console.log('//inserindo um dado no array')
console.log('-----------------------------')


//Metodo PUSH
alunos.push('otavio') //adiciona no final da array
console.log(alunos)
console.log('//Metodo PUSH - adiciona no final da array')
console.log('-----------------------------')

//Metodo unshift
alunos.unshift('ariane')
console.log(alunos) //adiciona no começo do array
console.log('//Metodo unshift - adiciona no começo do array')
console.log('-----------------------------')

//metodo POP
const removidoFim = alunos.pop()
console.log(alunos) //remove o ultimo elemento do indice
//acessando o indice que foi removido
console.log("o indice removido foi com o nome de: ", removidoFim)
console.log('//metodo POP - remove o ultimo elemento do indice')
console.log('-----------------------------')

//metodo shift
const removidoInicio = alunos.shift() // remove o primeiro elemento do indice
console.log(alunos)
console.log("o indice removido foi com o nome de: ", removidoInicio)
console.log('//metodo POP - remove o ultimo elemento do indice')
console.log('-----------------------------')

//deletando um indice especifico
delete alunos[1]
console.log(alunos)
console.log('//deletando um indice especifico')
console.log('-----------------------------')

//saber o tamanho do array
console.log(alunos.length)
console.log('//saber o tamanho do array')
console.log('-----------------------------')

