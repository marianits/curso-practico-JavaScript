const coupons = [
    {
        name:"popeIsARockstar",
        discount: 30,
    },

    {
        name: "deNadie",
        discount: 20,
    },

    {
        name: "diaEnero",
        discount: 10,
    },
];  

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function verificarCupon(cupon){
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    return cupon.name ===  cuponValue;
}


function onClickButtonPriceDiscount(){
    
    const descuento = coupons.find(verificarCupon).discount;
    console.log(descuento);
  
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    //para mostrar el resultado dentro de un parrafo en JS

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}


// console.log({precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });