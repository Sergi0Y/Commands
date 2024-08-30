/* /* function greeting(name = "user") {
    console.log(`Hola ${name}`)
}

greeting("Sergio")
greeting("Se")
greeting()


 
class Inventario {
    constructor (nombre){
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre(){
        return this.nombre;
    }
    add(articulo,cantidad){
        this.articulos[articulo] = cantidad;
    }
    cantidad (articulo){
        return this.articulos[articulo];
    }
}

let libros = new Inventario ("libros");
libros.getNombre()
    console.log(libros.getNombre());

libros.add("Aprendiendo js, 5");

libros.cantidad("Aprendiendo js");

console.log(libros.cantidad); */


//let:  variables que pueden cambiar su valor.
//const:  constantes, variables cuyo valor no cambia después de ser asignado.
//var: Es la forma antigua de declarar variables, pero hoy en día let y const son preferidos.


///CHAT GTP CLASS

/*1. VARIABLES Y TIPOS DE DATOS*/


//variables
let name = "Sergio";
let age = 24;
let city = "La Serena";

//constante
const euler = 2.718

//objeto
let person = {
    name: "Miguel",
    age: 20,
    city: "Madrid"
}

//array
let myfruits = ["banana", "apple", "strawberry"];

//----------------------------------------------------------------------

/*2. FUNCIONES EN JAVASCRIPT*/

//funcion simple
function bienvenida() {
    console.log("Bienvenido a JavaScript!");
}
bienvenida();

//funcion con parámetros
function saludarUsuario(nombre) {
    console.log(`Hola ${nombre}`)
}
saludarUsuario("ChatGPT");

//funcion con valor de retorno
function calcularAreaRectangulo(base, altura) {
    return base * altura
}
console.log(calcularAreaRectangulo(3, 5));

//funcion de flecha
const restar = (x, y) => x - y;
console.log(restar(5, 2));


/* 3. Condicionales y Bucles*/

//Condicionales
//if
let edad = 18;

if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad === 18) {
    console.log("Tienes 18 años.");
} else {
    console.log("Eres mayor de edad.");
}

//switch
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Hoy es lunes.");
        break;
    case "martes":
        console.log("Hoy es martes.");
        break;
    default:
        console.log("No es ni lunes ni martes.");
}

//Bucles
//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

//for of
let frutas = ["manzana", "plátano", "cereza"];

for (let fruta of frutas) {
    console.log(fruta);
}

//exercises

/*Condicionales:
Escribe un código que reciba una nota (del 1 al 10) y devuelva una calificación:
1-3: "Muy Insuficiente"
4-5: "Insuficiente"
6: "Suficiente"
7-8: "Bien"
9-10: "Sobresaliente"*/

//if
let score = 10

if (score >= 1 && score <= 3) {
    console.log("Muy Insuficiente")
} else if (4 === score || 5 === score) {
    console.log("Insuficiente")
}
else if (score === 6) {
    console.log("Suficiente")
}
else if (7 === score || 8 === score) {
    console.log("Bien")
}
else if (9 === score || 10 === score) {
    console.log("Sobresaliente")
}
else {
    console.log("Nota fuera de rango")
}

//switch
let scores = 1;
switch (true) {

    case (scores >= 1 && scores <= 3):
        console.log("Muy Insuficiente");
        break;

    case (4 === scores || 5 === scores):
        console.log("Muy Insuficiente");
        break;

    case (6 === scores):
        console.log("Suficiente");
        break;

    case (7 === scores || 8 === scores):
        console.log("Bien");
        break;

    case (9 === scores || 10 === scores):
        console.log("Sobresaliente");
        break;

    default:
        console.log("Nota fuera de rango");
}

/*Bucles:*/

//1.-Crea un array de números y usa un bucle for para calcular la suma de todos los números.
let suma = 0;

for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i]
}
console.log(suma);

//Promedio

let numbers = [1, 2, 3, 4, 5, 6];
let x = 0;
for (let i = 0; i < numbers.length; i++) {
    x += numbers[i];
}
x = x / numbers.length;
console.log(x);

/* Usa un bucle while para encontrar el primer número impar en un array. */

let numeros = [4, 2, 3, 4, 5, 6];
let indice = 0;
let impar = null;

while (indice < numeros.length) {
    if (numeros[indice] % 2 !== 0) {
        impar = numeros[indice]
        break;
    }
    indice++;

}
console.log(impar)

//Bucle for: Crea un bucle que imprima los números del 10 al 1 (en orden descendente).

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Bucle while: Usa un bucle while para sumar los números de un array hasta que la suma sea mayor a 100.
let numbs = [1, 5, 7, 9, 11, 13, 17, 19, 23, 29];
let add = 0;
let ia = 0;


while (add > 100) {
    for (let i = 0; i < numbs.length; i++) {
        add += numbs[i]
    }
    break;

}
console.log(add)

while (add <= 100 && ia < numbs.length) {
    add += numbs[ia];
    ia++;
}

console.log(add);




/* 
let numbers = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let i = 0; i<numbers.lenght; i++){
    suma += numbers[i]
}
console.log(suma); 
*/
