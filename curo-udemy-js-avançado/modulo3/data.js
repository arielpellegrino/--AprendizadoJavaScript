//date
// const tresHoras = 60 * 60 * 3 * 1000
const data = new Date();
console.log(data.toString());
console.log('------------------------------')

                    // ano, mes, dia, hora, minuto, segunro, milisegundo  / Para date é necessário 2 parametros
const data1 = new Date(2019, 11, 20, 15, 14, 27, 500);
console.log(data1.toString());
console.log('------------------------------')

                    // parametro por string
const data2 = new Date('2019-04-20 20:20:05');
console.log(data2.toString());
console.log('------------------------------')

                    // parametro por string
const data3 = new Date('2019-04-20 20:20:05');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data3.toString());
console.log('------------------------------')

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda( data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundos}`
}
const dataBrasil = formataData(data);
console.log(dataBrasil);