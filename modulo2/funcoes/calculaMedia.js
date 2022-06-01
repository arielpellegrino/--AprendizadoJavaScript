/* 
function calculaMedia(n1, n2, n3) {
    return (n1 * n2) / n3;
}

console.log(calculaMedia(2, 6, 4))

const mediaCalcula = (n4, n5, n6) => {
    return (n4 * n5) / n6;
}

console.log(mediaCalcula(2, 6, 4)); */

///////////////////////////////////////////////
(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length

        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return total / qtd
    }
    let media1 = calcularMedia(2, 4)
    console.log(media1);
})()