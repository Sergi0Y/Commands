#  **COMANDOS ÚTILES PARA GIT :**

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

------------

### Cómo saber en que repositorio estoy trabajando
------------
>`git remote -v`


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
