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




