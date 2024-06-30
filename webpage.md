# Tamaños variables
```css
:root{
    /* REM */
    background-color: black;
    font-size: 20px;
}
.wrapper {
  padding: 5px;
  font-size: 15px;
  background-color: green;
}

.box {
  padding: 5px;
  margin: 5px;
  font-size: 20px; /* EM -> CLASE PADRE*/
}
.px {
  width: 200px;
  background-color: rebeccapurple;
}

.vw {
  /*relacion tamaño pantalla */
  width: 20vw;
  background-color: palegreen;
}

/* REM & EM son 16px por defecto */

.em { /*letra del elemento padre*/
  width: 10em;
  background-color: firebrick;
}

.rem { /*  letra del elemento raíz. */
  width: 10rem;
  background-color: chocolate;
}

```