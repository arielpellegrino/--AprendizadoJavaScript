// IIFE - Immediately invoked function expression
//Essa função não interfere nas declarações globais

(function(nome){
    const sobrenome = 'Pellegrino';
    return console.log(nome + ' ' + sobrenome);

})('ariel');