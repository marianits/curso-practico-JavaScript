//Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
  }

//console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
  }
//console.log("El área del cuadrado es : " + areaCuadrado + "cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function isosceles(lado1, lado2, lado3){
    var altura;
    if(lado1 === lado2 && lado1 !== lado3){
        altura = alturaTriangulo(lado1,lado3);
    }else if(lado1 === lado3 && lado1 !== lado2){
        altura = alturaTriangulo (lado1,lado2);
    }else if(lado2 === lado3 && lado1 !== lado2){
        altura = alturaTriangulo(lado2,lado1);
    }else{
        console.error("El triangulo no es isosceles")
    }
return altura;
}

function alturaTriangulo(a,b){
    var alturat = Math.sqrt((a*a)-((b*b)/4));
    return alturat;
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
  
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("InputT1");
    const lado2 = document.getElementById("InputT2");
    const lado3 = document.getElementById("InputT3");

    const iso = isosceles(Number(lado1.value),Number(lado2.value),Number(lado3.value));
    alert("La altura es: " + iso);

    // const alturat = alturaTrianguloIsosceles(Number(lado1.value),Number(lado2.value),Number(lado3.value))
    // alert("La altura es: " + alturat);


}

