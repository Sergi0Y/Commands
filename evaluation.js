//Test 1 y 2 (Variables y funciones)

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

