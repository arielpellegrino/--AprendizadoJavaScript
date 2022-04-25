let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;




/* let msgMaiorIdade = "";
if (idade >= 18) {
    msgMaiorIdade = "É maior de 18 anos"
} else {
    msgMaiorIdade = "É menor de 18 anos"
}

*/

//OPERADOR TERNARIO
    let msgMaiorIdade = (idade >= 18) ? "true" : "false";

    console.log(msgMaiorIdade);