---
layout: post
---

# Errores de principiante | GNU/Linux

**Nota:** artículo escrito en 2015. 

Llevo más o menos un poco dentro de la comunidad GNU/Linux, aunque siguiendo sus pasos desde hacia ya mucho, pero utilizando sus distribuciones si es hace poco y como principiante tuve algunos problemas que gracias al fuerte soporte que tiene por parte de la comunidad logre solucionar y ahora se los comparto con ustedes por si algún día tienen esta clase de errores o para cualquier otro internauta que ande buscando la solución a su molesto error.
Seguramente sean errores bastante estúpidos para los ya experimentados en las distribuciones de GNU/Linux, pero para un principiante que toda la vida perteneció a Windows los errores le han de llegar fácil y estúpidamente.

# Desmontar la USB en vez de formatearla

Este fue un error estúpido, pero que es bastante común para usuarios principiantes en Ubuntu y es que cuando quieres formatear tu USB como normalmente lo haces en Windows, en Ubuntu entras a la aplicación Discos, pero terminas desmontando la USB o cambiándole de formato; esto impide la lectura en Windows o cualquier otra distribución GNU/Linux.
La solución es descargar el programa MiniTool Partition Wizard y leer las opciones que estas aplicaciones trae, es muy fácil porque la aplicación es muy visual; en caso de no saber por donde comenzar, escoge la opción Wipe y luego asignale un formato (FAT32) y listo.

# Eliminar GRUB y/o Dual Botting

Si alguna vez quieres eliminar cualquier distribución GNU/Linux tienes que pasar por este proceso para que el inicio de tu ordenador quede como nuevo y no aparezca algún error por eliminar la distribución desde las particiones o salga nuevamente el Dual Botting que utilizabas para iniciar entre los sistemas operativos GNU/Linux y Windows. Otra razón de la eliminación del GRUB y/o Dual Botting es porque quieres cambiar de distribución y primero tienes que limpiar el arranque para tu nueva distribución.
La solución es descargar EasyBCD 2.3 y hacer los siguientes pasos:

- Ejecutar
- Despliegue de BCD
- Escribir MBR
- Eliminar distribución de tus particiones

Siguiendo estos pasos correctamente no tendrás ningún error, solo tienes que seguir estos pasos sin tocar nada más y listo, tendrás tu arranque de sistema operativo como nuevo e iniciando el único sistema operativo; Windows.

# Problemas con la GRUB

GRUB es un gestor de arranque múltiple para iniciar entre diferentes sistemas operativos al arrancar tu máquina y así poder disponer de ambos cuando quieras (es un pequeño resumen de lo que puede hacer).
Pasa que el GRUB se suele joder por muchas cosas o mala configuración por parte del usuario, también se suele estropear cuando instalas primero Windows y luego alguna distribución GNU/Linux ¿Solución? La solución es descargar SúperGRUB y ejecutarlo en modo live USB y listo, tendrás todas las herramientas para recuperar la GRUB y demás archivos.

Estos son los problemas más frecuentes en principiantes a la hora de iniciar en el mundo de GNU/Linux y aquí he escrito de como solucione dichos problemas, trate de no dar detalles muy técnicos para no confundir a cualquier principiante (tampoco soy técnico), además simplemente descargando los programas mencionados y buscando algún tutorial en YouTube todo estará entendido, por lo tanto solucionado. 

![Cosmic radiation](https://www.dedoimedo.com/images/computers_new_2/grub2-chainload.png)
