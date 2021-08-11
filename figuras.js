// Código del Cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5 ;

console.log("Los lados del cuadrado miden: " 
+ ladoCuadrado
+" cm");

const perimetroCuadrado = 4 * ladoCuadrado;
console.log("El perímetro de mi cuadrado es: "
+ perimetroCuadrado
+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área de mi cuadrado es: "+ perimetroCuadrado+" cm^2")
console.groupEnd();

// Código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 
+ ladoTriangulo2 
+ baseTriangulo;

const areaTriangulo = baseTriangulo + alturaTriangulo;

console.log("La altura del triánguloes : "
+alturaTriangulo
+" cm");

console.log("Los lados del triángulo miden: "
+ ladoTriangulo1
+" cm "
+ladoTriangulo2
+" cm "
+baseTriangulo
+" cm ");
 
console.log("El perímetro del triángulo es: "
+perimetroTriangulo
+" cm");

console.log("El área del triángulo: " 
+ areaTriangulo + " cm^2")
console.groupEnd();

// Código del círculo
console.group("Círculos");
//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " 
+ radioCirculo+" cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " 
+ diametroCirculo+" cm");

//PI
const PI = Math.PI;
console.log("El valor de PI es: " 
+ PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: "
+perimetroCirculo
+" cm");

//Área
const areaCirculo = PI *(radioCirculo * radioCirculo);

console.log("El área del círculo: " 
+ areaCirculo + " cm^2");

console.groupEnd();