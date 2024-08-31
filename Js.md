## *Es un lenguaje dinámicamente tipado*

````
var persona = {
    nombre: 'Sergio',
    apellido: 'Yanez'
};

persona.nombre = 'Alan';
delete persona.nombre;
persona.hasOwnProperty('nombre');

````

## AOT ( Ahead of time)
 compilar &rarr;  ejecutar

------------

## JIT (Just in time)
#### recompilar
 compilar & ejecutar              &rarr; Informacion


------------

## Engines modernos 
	Optimizador
	DE-Optimizador
***Optimizador &rarr;  DE-Optimizador***

------------
### Optimizador
> ***Funciones HOT***

```javascript
// son números para el motor
function suma (numero1, numero2){
	return parseInt(numero1) + parseInt(numero2);
}
```
como se ejecuta muchas veces se optimiza el código


------------

### DE-Optimizador
```javascript
//son strings para el motor
function suma (numero1, numero2){
	return parseInt(numero1) + parseInt(numero2);
}
```
volver antes de las optimizaciones para volver a empezar

------------

## Flow
[![flow js](https://i.imgur.com/WCfgkno.png "flow js")](http://https://i.imgur.com/WCfgkno.png "flow js")

***muchos cambios &rarr; mala perfomarce***



## Codificación

### Convenciones de nombres
- #### Variables (y funciones)

**Uso de camelCase:** Para variables y funciones, se utiliza la convención camelCase. Esto significa que la primera palabra comienza con una letra minúscula y cada palabra subsiguiente comienza con una letra mayúscula.

```javascript
let nombreCompleto = "Sergio";
function calcularSuma(a, b) {
    return a + b;
}
```

- #### Constantes

**Uso de UPPER_SNAKE_CASE:** Para constantes (especialmente aquellas que son globales o de configuración), se suele utilizar UPPER_SNAKE_CASE. Esto significa que el nombre de la constante está en mayúsculas y las palabras están separadas por guiones bajos.

```javascript
const MAX_INTENSITY = 100;
```

- #### Clases

**Uso de PascalCase:** Las clases en JavaScript suelen seguir la convención PascalCase, donde cada palabra comienza con una letra mayúscula.
```javascript
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}
```
¿Qué debes usar?
**Variables y funciones:** Usa camelCase *(miVariable, miFuncion).*
**Constantes:** Usa UPPER_SNAKE_CASE *(PI, MAX_LENGTH).*



### Scope chain

- Es como una cadena de alcance o niveles donde JavaScript busca variables cuando las necesitas en tu código.

- Imagina que tienes varias cajas (los alcances o **scopes**) apiladas. Cuando JavaScript necesita encontrar una variable, empieza buscando en la caja más cercana (el alcance más cercano). Si no encuentra la variable ahí, busca en la siguiente caja, y así sucesivamente, hasta llegar a la última caja (el alcance más global).
> Ejemplo

```javascript
let globalVar = "Estoy en el alcance global";

function outerFunction() {
    let outerVar = "Estoy en el alcance de outerFunction";

    function innerFunction() {
        let innerVar = "Estoy en el alcance de innerFunction";
        
        console.log(innerVar);        // Encuentra "Estoy en el alcance de innerFunction"
        console.log(outerVar);        // Encuentra "Estoy en el alcance de outerFunction"
        console.log(globalVar);       // Encuentra "Estoy en el alcance global"
    }

    innerFunction();
}

outerFunction();
```
Cuando llamamos a innerFunction():

- Primero, busca la variable innerVar en su propio alcance y la encuentra.
- Luego, busca outerVar y, al no encontrarla en su propio alcance, sube un nivel en la **scope chain** y la encuentra en outerFunction.
- Finalmente, busca globalVar y, al no encontrarla en los alcances anteriores, la busca y la encuentra en el alcance global.
- Este es el **scope chain** en acción: JavaScript busca variables desde el alcance más cercano hasta el más lejano.

### Closure
- Imagina que una función tiene **memoria**. Esta memoria le permite recordar las variables y el entorno donde fue creada, incluso después de que ese entorno haya dejado de existir. Gracias a esto, una clausura puede acceder a esas variables, aunque la función que las definió ya haya terminado de ejecutarse.
- Además las clausuras pueden ser utilizadas para mantener privado el estado o **contenido** de una función. Esto significa que las variables definidas dentro de una función no son accesibles desde fuera de ella, pero las funciones internas (creadas dentro de esa función) pueden acceder a ellas.

```javascript
function crearContador() {
    let contador = 0;

    function incrementar() {
        contador++;
        console.log(contador);
    }

    return incrementar;
}

const miContador = crearContador();

miContador(); // Imprime 1
miContador(); // Imprime 2
miContador(); // Imprime 3
```
- Cada vez que llamas a miContador(), incrementa contador y lo imprime. Aunque la función crearContador ya terminó de ejecutarse, la clausura permite que miContador recuerde y use contador.

##### En resumen:
- Una clausura es una función que recuerda el entorno en el que fue creada, permitiéndole acceder a las variables de ese entorno incluso después de que el contexto original haya desaparecido.

### Relación entre scope chain y closure
- Scope Chain permite a las funciones buscar variables a través de diferentes niveles de alcance.
- Las clausuras usan la **scope chain** para "recordar" el entorno en el que fueron creadas, incluso después de que el contexto original haya desaparecido. Esto le permite a la clausura acceder a las variables que estaban en ese entorno cuando la función fue creada.
- Así, el **scope chain** es fundamental para que las clausuras funcionen, ya que permite que una clausura acceda a las variables correctas a través de los niveles de alcance que ha "recordado".





