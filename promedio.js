
//([1,14,151,1000000])

function calcularMediaAricmetica(lista){
    /* let sumaList = 0;
    for (let i = 0; i < lista.length; i++) {
    sumaList = sumaList + lista[i];
    } */
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista

}