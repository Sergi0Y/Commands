## * Es un lenguaje dinámicamente tipado*

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
##Flow
[![flow js](https://i.imgur.com/WCfgkno.png "flow js")](http://https://i.imgur.com/WCfgkno.png "flow js")

#### *** muchos cambios &rarr; mala perfomarce ***


