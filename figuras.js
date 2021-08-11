// Código del Cuadrado
console.group("Cuadrados")


function perimetroCuadrado(lado){ 
    return lado *4;
}

function areaCuadrado(lado){ 
    return lado *lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1,lado2,base){
    return (lado1 + lado2 + base);
}

function areaTriangulo(base,altura){
    return (base * altura)/2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: "+ PI)

//Perímetro círculo
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//Área circulo
function areaCirculo(radio){
    return radio * radio * PI;
}



console.groupEnd();