function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDoInterval(){
    setInterval(mostraHora());

}

console.log("a");
setInterval(funcaoDoInterval, 1000);

const time = setInterval(function() {
    console.log(mostraHora());
}, 1000);