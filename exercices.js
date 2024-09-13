/*Ejercicio 1: Contar números impares en un array

    Crea un array de números enteros.
    Usa un bucle for para contar cuántos de esos números son impares.
    Imprime el total de números impares.
 */

let numeros = [1,2,3,4,5,6,7,8,9];
let impares = [];

for (let i=0 ; i < numeros.length; i++){
    if(numeros[i] % 2 !== 0){
        impares.push(numeros[i]);        
        console.log(numeros[i]);
    }    
}
console.log(`La cantidad de impares es: ${impares.length}`);

//------------------------------------------------------------

/*Ejercicio 2: Encontrar el número máximo en un array

    Crea un array de números enteros.
    Usa un bucle for para encontrar y devolver el número máximo en el array.
    Imprime el número máximo
*/

var arr = [1,2,3,4,5,6,7,8,9];
var max = Math.max(...arr);
console.log(max);


max= arr[0]; // Asumimos que el primer número es el máximo al inicio

for (let i = 1; i < arr.length; i++){ // comenzamos con el segundo elemento
    if(arr[i] > max){ // comparamos el término siguiente con el primero que tomamos
        max = arr[i]; // si es mayor se reasigna la variable con el número actual
    }
}

console.log(max);
 
//------------------------------------------------------------


/*Ejercicio 3: Reversar un string 

    Crea una función que tome un string como argumento.
    Usa un bucle for para invertir el string (es decir, “hola” debería convertirse en “aloh”).
    Imprime el string invertido.
*/

function revstring (string){
    let invertir = "";
    for(let i = cad.length -1 ; i>=0; i--){
        invertir += cad[i];
    }
    return invertir;
}

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}
invertirCadena("hola");

console.log(invertirCadena("hola"));

/* Ejercicio 4: Filtrar números mayores a 10
    Crea un array de números enteros.

    Usa un bucle for o for...of para crear un nuevo array que contenga solo los números mayores a 10.
    Imprime el nuevo array.
*/

let nums = [2,3,6,10,15,20,244,240,24,53,64];
let mayorTen = [];

for (let i = 0; i < nums.length ; i++){
    if(nums[i] > 10){
        mayorTen.push(nums[i]);             
    }

}
console.log(mayorTen);


/*Ejercicio 5: Sumar números pares hasta 100 

    Usa un bucle while para sumar todos los números pares entre 1 y 100.
    Imprime la suma total. 
*/
let suma = 0;
let i = 1;
while(i<100){
    if(i % 2 === 0){                      
        suma+= i;
    }   
    i++;
}
console.log(suma);



// 1.4: Arrays y Objetos: Cómo manipular arrays y objetos, métodos útiles (map, filter, reduce).

/* Usar map():
    Crea un array de números y usa map() para obtener un array de sus cuadrados.*/

let numerosA = [1,2,3,4,5,6];

let cuadrados = numerosA.map(x => x * x);
console.log(cuadrados);


/* Usar filter():
    Crea un array de números y usa filter() para obtener solo los números pares. */

//let numeros = [1, 2, 3, 4, 5];
let pares = numerosA.filter(x => x % 2 === 0);
console.log(pares);



/* Usar reduce():
    Crea un array de números y usa reduce() para obtener la suma de todos los números. */

let sumacion = numerosA.reduce((acumulador,valor) => acumulador + valor, 0);
console.log(sumacion);



/*Manipular Objetos:
    Crea un objeto con propiedades y usa Object.keys(), Object.values(), y Object.entries() para explorar el objeto. */

let persona = {nombre:`Juan`, edad: 30};
let tipos = Object.keys(persona);
let valores = Object.values(persona);
let total = Object.entries(persona);


console.log(tipos,valores,total);