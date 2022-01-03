
//Primer paso: Contar el número de veces 
//que se repite cada elemento

function contar(lista){

    let arrayCount = {};
    lista.find(
        function(elemento){
            if(arrayCount[elemento]){
                arrayCount[elemento] += 1;
            }else{
                arrayCount[elemento] = 1;
            }
        }
    );

return arrayCount;
}

//object entries convierte el objeto en un array de arrays



function calcularModa(lista){

 let arrayCount = contar(lista);

 // Paso 2: convertir ArrayCount a un array 
 // y ordenar de menor a mayor el numero de repeticiones

const lista1Array = Object.entries(arrayCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );

//Paso 3: modal es el numero de veces que mas se repite un elemento
// luego, se verifica si hay mas de dos elementos que tienen este numero

const modal = lista1Array[lista1Array.length - 1][1];

const moda = lista1Array.filter(
function(arrayModa){
    return arrayModa[1] === modal;
});

return moda;
}