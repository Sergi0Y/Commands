# Docker 
## Descargar una imagen
Descarga la imagen en la ultima versión
```
Docker pull <imageName>
```
## Revisar imagenes
Muestra todas las imagenes que se tienen actualmente
```
Docker images
```
## Revisar imagenes
Muestra todas las imagenes que se tienen pero las primeras líneas, por si se tienen muchas imagenes
```
Docker images | head
```
## Revisar imagenes
Muestra todas las imagenes que tengan cierta palabra en su nombre
```
Docker images | grep <Word>
```
### Ejemplo
```
Docker images | grep <alpine>
```

## Eliminar imagenes
Es recomenadle mostrarlas antes de eliminarlas para segurarse de lo que se hace
```
Docker rmi <image>
```

## Revisar Contenedores
Muestra los contenedores que están corriendo
```
Docker ps
```

## Revisar Contenedores
Muestra todos los contenedores que corrieron hace un tiempo
```
Docker ps -a 
```

## Iniciar contenedor
Inicia el contenedor selecionado por la id 
```
Docker start <containerID>
```

## Detener contenedor
Detiene el contenedor selecionado por la id 
```
Docker stop <containerID>
```

## Revisar Logs
Muestra los logs del contenedor seleccionado, puede ser por el id o por el nombre 

```
Docker logs <containerID>/<Name>
```

## Comando dentro de un contenedor
Ejeuta un comando dentro de un contenedor específico
**i** crea una sesion interactiva
**t** abre una terminal
```
Docker exec -it <ContainerID> <Command>
```
### Ejemplo
```
Docker exec -it <d1065c83749s848> <sh>
```

## Correr contenedor en el background
```
Docker run -d <ImageName>
```

