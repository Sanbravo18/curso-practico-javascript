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
    return (lado1 * 1 + lado2 * 1 + base * 1);
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

//Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

//Triángulo
function calcularPerimetroTriangulo(){
    const inputlado1 = document.getElementById("InputTriangulolado1");
    const valuelado1 = inputlado1.value;
    const inputlado2 = document.getElementById("InputTriangulolado2");
    const valuelado2 = inputlado2.value;
    const inputbase = document.getElementById("InputTriangulobase");
    const valuebase = inputbase.value;

    const perimetro = perimetroTriangulo(valuelado1,valuelado2,valuebase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputbase = document.getElementById("InputTriangulobase");
    const valuebase = inputbase.value;
    const inputaltura = document.getElementById("InputTrianguloaltura");
    const valuealtura = inputaltura.value;


    const area = areaTriangulo(valuebase,valuealtura);
    alert(area);
}

//Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}