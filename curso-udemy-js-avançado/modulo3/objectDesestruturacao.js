const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: 'Av Toscana',
        numero: 320
    }
};

//Atribuição via desestruturaçao, extrai do objeto o dado e ja cria uma variavel
const { nome, idade, ...resto} = pessoa;

console.log(nome, idade, resto);