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
//1. VARIABLES Y TIPOS DE DATOS


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

//2. FUNCIONES EN JAVASCRIPT

//funcion simple
function bienvenida (){
    console.log("Bienvenido a JavaScript!");
}
bienvenida();

//funcion con parámetros
function saludarUsuario(nombre){
    console.log(`Hola ${nombre}`)
}
saludarUsuario("ChatGPT");

//funcion con valor de retorno
function calcularAreaRectangulo(base,altura){
    return base * altura
}
console.log(calcularAreaRectangulo(3,5));

//funcion de flecha
const restar = (x, y) => x - y;
console.log(restar(5,2));


/*test*/
/* 1. Declaración de Variables
Pregunta: Declara una variable llamada pais y asígnale el valor "Chile". Luego, declara una constante llamada PI con el valor 3.14159. */
let pais = "Chile";
const PI = 3.14159;

/* 2. Objetos
Pregunta: Crea un objeto llamado coche con las propiedades marca (valor "Toyota"), modelo (valor "Corolla"), y anio (valor 2022). */

let coche = {
    marca: "Toyota",
    modelo:"Corolla",
    anio: 2022
}

/* 3. Arrays
Pregunta: Declara un array llamado colores que contenga los siguientes colores: "rojo", "verde", "azul". */
let colores = ["rojo", "verde", "azul"]

/* 4. Funciones
Pregunta 4a: Define una función llamada multiplicar que acepte dos parámetros y devuelva el producto de esos dos números. */
function multiplicar (a,b){
    return a * b
}
console.log(multiplicar(3,4));


/* Pregunta 4b: Define una función de flecha llamada dividir que acepte dos parámetros y devuelva el cociente de esos dos números. Asegúrate de manejar la división por cero de manera adecuada. */
const dividir = (x, y) => {
    if ( y === 0 ){
        return "Error division por cero";
    }else{
        return x / y;        
    }
};

console.log(dividir(9,3))

/* 5. Uso del DOM
Pregunta: ¿Cómo seleccionarías un elemento con el id "miElemento" y cambiarías su contenido a "Hola desde JavaScript" usando JavaScript? */
let miElemento = "hola";
miElemento = "Hola desde JavaScript" ;