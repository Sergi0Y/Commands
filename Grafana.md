# GRAFANA
Es una capa de presentación, permite hacer monitorizacion de información guardada en una base de datos. cargada con anterioridad, a modo de resumen es una plataforma de observabilidad.

En grafana es posible generar dashboard basados en otros que nos muestra la misma plataforma, o es posible tambien poder crear dashboard desde cero
Es una capa de presentacion ocmo google analytics monitorizacoin info guardada en una bd, plataforma de observabilidad 

Grafana se compone de varios logs, los cuales son tipos de archivos en los que se pueden detallar los sucesos que ocurren en el sistema, relacionados con los recursos que se utilizan. Loki, que se muestra en la imagen posterior es un sistema de agregación de logs creado por grafana, que a diferencia de los programas anteriores no indexa el contenido del registro, sino que indexa marcas de tiempo y un conjunto de etiquetas para un flujo de registro. 

<!-- Loki es un sistema de agregación de logs creado por GrafanaLabs, es escalable horizontalmente, puede contar con alta disponibilidad es una solución de supervisión líder para las métricas y las alerta, además admite datos con identificadores de clave-valor para las métricas,
 -->
![](https://i.imgur.com/NWXvNxu.png "Grafana Loki/test Recurso")

En esta imagen en la carpeta Loki - Test Recurso, se ve que existe solo un pod que se está monitoreando, del cual se puede ver (en el lado derecho), la cpu que usa, su limite y lo que se espera que use, lo mismo sucede con la ram asignada al pod. En el lado izquierdo se puede ver un promedio de la cpu y la memoria utilizada en un rango de tiempo que se puede ajustar en la parte superior derecha

## Dashboards
![](https://i.imgur.com/cRtBQta.png "Grafana Dashborads")
![](https://i.imgur.com/kxFHcRJ.png "Grafana Dashborads")
Actualmente estos son todos los dashborad que tenemos y que se monitorean