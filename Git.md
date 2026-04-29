#  **COMANDOS ÚTILES PARA GIT :**

## Conventional Commits

&bull;**feat:** → para nuevas funciones o funcionalidades

&bull;**fix:** → para correcciones de errores

&bull;**chore:** → para tareas de mantenimiento

&bull;**refactor:** → para reestructurar código sin cambiar su funcionalidad

&bull;**docs:** → para documentación

&bull;**style:** → cambios de formato, indentación, etc.

&bull;**test:** → para pruebas


## Clonar repositorio de GitHub a tu pc

#### 1. Copiar la URL del repositorio
- Ve a GitHub y abre el repositorio que quieres clonar.
-  Haz clic en el botón verde "Code".
-  Copia la URL del repositorio (HTTPS o SSH, según prefieras).
		https://github.com/usuario/repositorio.git

#### 2. Ejecutar el comando de clonación en la terminal
		git clone URL_DEL_REPOSITORIO
***ejemplo:***

		git clone https://github.com/usuario/repositorio.git

## Modificación del repositorio

### git add .

------------

&bull; Es importante que esté el espacio y después el punto para que lo tome bien.
&bull; Sirve para agregar todo lo que se ha hecho hasta el momento de escribir  el comando, se escribe así:
>`git add .`




### git commit -m

------------
&bull; Sirve para comentar, el comando original es git commit a secas pero con el -m (después de la "m", va un espacio y luego las comillas) sirve para poner una descripción del comentario entre comillas ("") ejemplo:
&bull; Agregué una imagen en la carpeta, ejemplo:
>` git commit -m "Add: img.png"`

### git push

------------
 &bull; Este comando sirve para subir los datos al github y que podamos verlos todos, es el paso final, sin este no se sube nada, va solito el git push, así:
>` git push`

### git pull

------------
 &bull; Sirve para actualizar los datos del github y que podamos ver lo que está actualmente en el, en caso de que se tenga una versión anterior al de la nube
>` git push`

### Cómo saber en que repositorio estoy trabajando
------------
>`git remote -v`


## Branches

### git branch newBranch
&bull; Sirve para crear una rama nueva, reemplazando "branchName" por el nombre que quieras ponerle
> `git branch branchName`

### git checkout
------------
  &bull; Este sirve para cambiar de ramas, las ramas son "subcarpetas" por decirlo de una manera simple, en la cual podemos trabajar teniendo como base la rama Main que es la prinicpal, luego nosotros evaluamos los cambios y se ve que se sube a la main que sería la prinicpal, ejemplo:
> `git checkout sergio`
> `git checkout main `

### git fetch    

------------
&bull; Sirve para actualizar las ramas, en caso de que se haya creado una y no te aparezca en el visual studio, es similar al git pull pero no actualiza de forma automatica, sino que trae lo nuevo nomas
> `git fetch`


### git branch

------------
 &bull; Estas sirven prar saber en qué rama estás dentro del repositorio
> `git branch`
> `git status`



### git branch --v

------------
 &bull; Este sirve para ver todas las ramas que hay, en caso de que se te olvide algun nombre o que solo quieras revisar
> `git branch --v`


 ### git branch -a
 ------------
 &bull; Este comando sive para mostrar todas las ramas, ya sean las remotas o las locales
 ` git branch -a`

## Merge
- Este comando me sirve para combinar dos ramas, por ejemplo si yo estoy trabajando en mi rama 1 con mi proyecto y lo termino, entonces debo subirlo a la rama principal, pero para no mover los archivos manualmente uno por uno lo que hacemos es mezclar o combinar las ramas.

⚠️ Advertencia: Nunca hagas un merge si tienes cambios sin guardar (sin hacer **commit**) en tu rama actual, ya que Git podría bloquear la operación.

1. Lo primero que debemos hacer es movernos a nuestra rama que recibirá los cambios. Por ejemplo nos moveremos de nuestra `testing` al `main.`
   ```git 
	git checkout main
   ```
2. Vamos a actualizar la rama `main.` para estar al día con el repositorio
   ```git 
	git pull origin main
   ```
3. Ejecutamos el merge con la rama de la que queremos extraer la información
   ```git 
    git merge desarrollo-portafolio
   ```
4. Subimos los cambios a la nube de Github
   ```git 
    git push origin main
   ```


