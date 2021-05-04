---
layout: post
---

# GNU/Linux y un poco de todo

Desde hace mucho tiempo he querido escribir un artículo sobre GNU/Linux y muchas cosas que sucedieron/suceden a su alrededor, pero no sabía concretamente por donde comenzar y estuve con esa duda por mucho tiempo (creo que al momento de escribir esto sigo con la misma duda) es un tema bastante extenso y equivocarse en algo sería fatal, se estaría irrespetando a la historia… antes de comenzar les recomiendo que se lean el libro escrito por Richard M. Stallman «Software libre para una sociedad libre» (https://www.gnu.org/philosophy/fsfs/free_software.es.pdf) libro el cual me ha servido como base para escribir acerca de este tema.

Primero que todo comencemos con lo más básico **¿Qué es GNU/Linux?** GNU/Linux, también conocido erróneamente como Linux, es un sistema operativo libre tipo Unix; multiplataforma, multiusuario y multitarea. El sistema es la combinación de varios proyectos, entre los cuales destacan GNU (encabezado por Richard Stallman y la Free Software Foundation) y el núcleo Linux (encabezado por Linus Torvalds). Su desarrollo es uno de los ejemplos más prominentes de software libre: todo su código fuente puede ser utilizado, modificado y redistribuido libremente por cualquiera, bajo los términos de la GPL (Licencia Pública General de GNU) y otra serie de licencias libres.

# ¿Por qué es GNU/Linux y no solo Linux?

A pesar de que cotidianamente se le dice «Linux» al sistema operativo es este en realidad tan solo el Kernel (núcleo) del sistema. La idea de montar un sistema completo se remonta a la década de 1980 con el proyecto GNU, así como una gran cantidad de los componentes que se usan hoy en día (además del núcleo). Sin embargo con todos estos componentes de dicho proyecto en 1990 una parte significativa de los medios empezó a denominar todo como «Linux» y obviamente esto ha sido motivo de polémicas. De hecho hay más GNU qué Linux pero aun así la ignorancia de muchos continúa y así sucesivamente con su denominación de «Linux» a todo.

**En resumen:** El objetivo de la mayoría de los proyectos de software libre era desarrollar un programa particular para cubrir una necesidad particular. Por ejemplo, Linus Torvalds se propuso escribir un kernel de tipo Unix (Linux), Donald Knuth se propuso escribir un editor de textos (TeX), Bob Scheifler se propuso desarrollar un sistema de ventanas (el X Window System) y asi sucesivamente.

Siempre es importante llamar las cosas por su nombre para no quitarle mérito/importancia al mismo y además GNU fue un proyecto de larga trayectoria para desarrollar un sistema operativo libre, del cual el núcleo solo fue una pieza. Simplemente los defensores del término «Linux» argumentan que su acogida es por ser más corto, aunque reconocen que GNU es el más grande contribuyente.

Dos grandes argumentos de por qué se debería llamar GNU/Linux (Además de respetar la historia):

- «Si vamos a escoger un nombre para el sistema sobre la base de quién escribió los programas en el sistema, la elección más apropiada sería GNU. Pero no creemos que sea la forma correcta de considerar la pregunta. El Proyecto GNU no fue, y no es, un proyecto para desarrollar paquetes de software específicos. […] Muchas personas han hecho contribuciones enormes al software libre en el sistema y todos merecen crédito. Pero la razón por la cual es un sistema integrado – y no sólo una colección de programas útiles – es porque el Proyecto GNU estableció que así lo fuera. Hicimos una lista de los programas necesarios para crear un sistema libre completo, y todo lo que había en esa lista fuimos escribiéndolo sistemáticamente, o encontramos gente para escribirlo». Richard Stallman

- «Llamar GNU/Linux al sistema reconoce el rol que nuestro idealismo jugó en la construcción de nuestra comunidad, y ayuda al público a reconocer la importancia práctica de estos ideales».

Cabe señalar que existen derivados de Linux que no tienen componentes GNU (por ejemplo Android), así como distribuciones de GNU donde Linux está ausente (por ejemplo Debian GNU/Hurd). 

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/1024px-evolucic3b3n_unix.png)

# Etimología

No sé me podía olvidar el mítico acrónimo recursivo GNU: **GNU’s Not Unix (GNU no es Unix).**

Hasta el momento he escrito sobre qué es GNU/Linux y el por qué GNU/Linux y no «Linux» todo esto sin entrar mucho en su historia (con detalles) ¿Por qué? Porque es bastante larga y además ya está altamente documentada en cualquier idioma, de hecho a continuación voy a dejar fuentes y vídeos para dejar este artículo bien completo sin saltarme nada.

Acerca de GNU: https://www.gnu.org/gnu/thegnuproject.html

Historia y además datos de GNU/Linux: https://es.wikipedia.org/wiki/GNU/Linux

<iframe width="588" height="480" src="https://www.youtube.com/embed/pDtRCIgbtLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
(https://www.youtube.com/embed/pDtRCIgbtLk)

<iframe width="760" height="332" src="https://www.youtube.com/embed/9ip3UA_04LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
(https://www.youtube.com/embed/9ip3UA_04LM)

Ya mencione un montón de información extensa que comprimí en unos cuantos párrafos ¿Ahora que queda por hacer? Por cierto, ya he hecho un artículo sobre Richard Stallman, Fundador del Movimiento del software libre, de la FSF y del Proyecto GNU: https://write.privacytools.io/gatooscuro/richard-stallman-un-ejemplo-de-vida

# HURD

Más arriba mencione la distro Debian GNU/Hurd donde Linux está ausente y claro, tenía que profundizar en él porque es parte importante en aquella historia, aunque la verdad no voy a profundizar en él porque prefiero pasar fuentes verídicas donde todo queda bastante claro (a mi de seguro se me escape algo).

**En resumen:** Hurd era el núcleo que estaba desarrollando los mismo encargados del proyecto GNU pero la idea se hizo un poco ambiciosa y su desarrollo fue bastante lento, tan lento que se desarrollo el núcleo Linux primero y eso que se llevaban 1 año de diferencia (más o menos). El desarrollo de Hurd empezó en el año 1990, aunque fue anunciado para el año 2002, esto no fue conseguido porque se comenzó a utilizar el núcleo Linux que se lanzó en 1991.

<iframe width="760" height="428" src="https://www.youtube.com/embed/JQUAMFHLsc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
(https://www.youtube.com/embed/JQUAMFHLsc8)

Más sobre GNU/HURD: https://es.wikipedia.org/wiki/GNU_Hurd

Actualmente el proyecto GNU y Alexandre Oliva mantienen un «Linux-Libre»: Linux-libre es un proyecto que publica y mantiene versiones modificadas del núcleo Linux a las que se les ha quitado todo el software que no incluye código fuente, así como el código fuente ofuscado o el que esté publicado mediante licencias privativas. Las partes que no tienen código fuente son llamadas blobs binarios y corresponden a firmware privativo. 

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/freedo.png) Freedo el Tux limpio.

# Distribuciones

Una distribución de GNU/Linux es una distribución de software basada en el núcleo Linux que incluye determinados paquetes de software para satisfacer las necesidades de un grupo específico de usuarios, dando así origen a ediciones domésticas, empresariales y para servidores. La distribución más famosa es Ubuntu, la cual ha sido una de las que han hecho famoso a GNU/Linux en el mundo y equiparable a otros sistemas como Windows o macOS, pero Ubuntu no existiría sin Debian, una de las más antiguas y grandes distribuciones de la cual se basó Canonical para desarrollar Ubuntu.

Hasta el momento he usado las siguientes distribuciones:

- Debian 
- Ubuntu
- Trisquel
- PureOS
- Tails
- Kali Linux
- Manjaro
- Puppy Linux
- Lubuntu

Y actualmente estoy en Min GNU/Linux (llevo más de un año en esta).

Rama de todas las distribuciones GNU/Linux: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Linux_Distribution_Timeline.svg/320px-Linux_Distribution_Timeline.svg.png

Para finalizar un dato curioso: De acuerdo con TOP500.oorg, que lleva estadísticas sobre las 500 principales supercomputadoras del mundo, a noviembre de 2017: las 500 usaban una distribución basada en GNU/Linux.

Hasta pronto, ¡No dudéis en criticar, corregir o sugerir!, así aprendemos todos.

Fuentes en su respectiva mención.

Artículos de interés y con respecto a software libre:https://write.privacytools.io/gatooscuro/alternativas-para-todo-en-internet

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/gnu-and-penguin-color.png)


