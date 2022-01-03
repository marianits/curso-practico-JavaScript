function calcularPromedioPonderado(arrayPro, arrayPeso){

    const acumulador = arrayPeso.reduce(function(vAnterior, vPosterior){
        return vAnterior + vPosterior;
        }
    );
    let pPonderado = 0;
    let i = 0;
    arrayPro.find(function(elemento){

        pPonderado = pPonderado + (elemento * arrayPeso[i]);
        i+=1;

    });
    pPonderado = pPonderado / acumulador;
    return pPonderado;    
}
