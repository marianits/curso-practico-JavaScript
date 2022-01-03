function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
      function (valorAcumulado, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      },0 //Valor inicial: 0
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;

  }