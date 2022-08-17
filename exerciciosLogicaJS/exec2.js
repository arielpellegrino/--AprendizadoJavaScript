//Escreva uma função chamada ePaisagem que recebe 2 argumentos, largura e altura
//de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem

// Minha solução
function ePaisagem(largura, altura) {
    if (largura > altura){
        return true;
    } else if (altura > largura) {
        console.log('modo normal');
    }
}
console.log(ePaisagem(200, 100));

//Solução do Video

function ePaisagen(largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagen(1920, 1080));