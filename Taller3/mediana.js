function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
      function (valorAcumulado, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      },0 //Valor inicial: 0
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
}


function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// El metodo sort: 
// si es 1 pone el primer elemento antes
// si es -1 el segundo elemento
// si es 0 son iguales 

function ordenarLista(lista){
    lista.sort( function( a , b){
        return a - b;
    })
}



function calcularMediana(lista){

    ordenarLista(lista);
    console.log(lista);
    
    let mitadLista = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        mediana = calcularMediaAritmetica([elemento1,elemento2]);
    
    }else{
        mediana = lista[mitadLista];
    }
        return mediana;
}


