function contador() {
    let count = 0; // Variável "privada"
    return {
        incrementar: () => count++,
        getValor: () => count
    };
}

const meuContador = contador();
meuContador.incrementar();
console.log(meuContador.getValor()); // 1