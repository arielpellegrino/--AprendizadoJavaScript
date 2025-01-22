// Entre 0 - 11 = Bom dia
// Entre 12 - 17 = Boa tarde
// Entre 18 - 23 = Boa noite

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde')
} else if (hora >= 18 && hora <= 23 ) {
    console.log('boa noite')
} else {
    console.log('chegou no else')
}


const valorTrue = true;

if (valorTrue) {
    console.log('resultado: true')
} else {
    console.log('resultado false')
}


const numero = 10;
if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 6 e 8')
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero está entre 9 e 11')
} else {
    console.log('o numero não está entre 0 e 11')
}
