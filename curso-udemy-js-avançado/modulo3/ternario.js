// condição ? valor TRUE : valor FALSE

//Maneira normal de fazer
const pontuacaoUsuario = 100;
const nivelUsuario =  pontuacaoUsuario >= 1000 ? 'usuário vip' : 'usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(corPadrao)
console.log(nivelUsuario);
// if(pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }