

//function hoisting
/*
function falaOI(){
    console.log('Oie');
}
falaOI();
*/

//function expression
const souUmdado = function () {
    console.log('sou um dado');
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmdado);

const arrow = () => {
    console.log('arrowFunction');
}

setInterval(function() {

}, 1000)