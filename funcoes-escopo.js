let n = "global";

function mostraN() {
    let n1 = "n1 local"

    if (true) {
        let n1 = "n1 dentro de if com let";
    }

    console.log('valor de n1: ' + n1);

}

mostraN();

console.log("valor de n no escopo global: " + n);

    function fnExt(){
        let n = "n local na funcao externa"

        function fnInt(){
            let n = "n local na funcao interna"
            console.log(n)
        }

        console.log(n)

        fnInt();
    }

    fnExt();
