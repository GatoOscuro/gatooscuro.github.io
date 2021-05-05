---
layout: post
---

# Tails la distribución GNU/Linux sin memoria

Hoy en día estamos siendo vigilados constantemente, es el día a día de la gran red supervisada por el Gran Hermano de diferentes potencias mundiales (no directamente) apoyados por el GAFAM. 

Agrego: tan sólo es ver el transcurso de uso del navegador Google Chrome y la red social Facebook, en una temporada fácilmente dichas máquinas de observación podrán crear un perfil no muy vago de ti, con datos tan especificos como la ubicación reciente, fechas de conexión, páginas visitadas, conexiones y demás actos que realizas por encima de su ingeniera de supervisión. 

Vamos al grano (siempre suelo extenderme más de la cuenta) gracias a que día a día "somos" más conscientes de esta problemática que crece con el tiempo y parece no parar nunca existen gran infinidad de proyectos que nos crean una puerta (quizás una ventana) para escapar de allí o darnos una posibilidad de la nula supervisión, aquí es donde entra la ultra conocida distribución GNU/Linux Tails. 

                                      ¿Qué es Tails?
Básicamente es un sistema operativo portátil que te protege de la vigilancia y la censura. Originalmente basada en Gentoo para posteriormente basarse en Debian GNU/Linux en donde fuerza todas las conexiones entrantes/salientes a pasar por la red TOR.  El sistema está diseñado para ser arrancado como un Live CD o USB sin dejar ningún rastro en el almacenamiento local (por lo general, disco duro) a menos que se indique explícitamente. 

               ¿Qué hace Tails para ser efectiva? 
![Tails](https://tails.boum.org/index/city.svg)
>Evita la vigilancia, la censura, la publicidad, y los virus
Tails usa la red Tor para proteger tu privacidad en línea y ayudarte a evitar la censura. Disfruta de Internet como debería ser.

![Tails](https://tails.boum.org/index/camping.svg)
>Tu computadora segura en cualquier lugar
Apaga tu computadora e inicia en tu memoria USB con Tails en lugar de iniciarla con Windows, macOS o Linux. Tails no deja rastros en la computadora cuando la apagas.

![Tails](https://tails.boum.org/index/toolbox.svg)
>Caja de herramientas de seguridad digital
Tails incluye una selección de aplicaciones para trabajar en documentos confidenciales y para comunicarse de forma segura. Todo en Tails está listo para usar y tiene una configuración segura por defecto.

![Tails](https://tails.boum.org/index/gift.svg)
>Software Libre
Puedes descargar Tails de forma gratuita e investigadores de seguridad independientes pueden verificar nuestro trabajo. Tails está basado en Debian GNU/Linux.
 
Más información en: https://tails.boum.org/

                         
## Mi experiencia
En brevedad fue bastante buena, la descarga y portarlo a la USB de destino fue demasiado sencillo, después de ello es sólo conectar, encender y ver la grandeza de dicha conexión... alucinante ver esa gran colaboración entre Debian, Gnome y Tor (tanto su circuito como el navegador) todo cumple una misión especifica allí. Sustancialmente tiene una buena apertura de herramientas para utilizar en un plano real de utilización, al estilo espía... el caso es ¿lo utilizaste de dicha forma? Podría ser, mientras estaba en mi ciclo operacional dentro de Ejército estuvo adscrito a una comisión de comunicaciones y allí claramente todo era supervisado (el control de las máquinas) yo como he sido bien paranoico me dio por probar dicho sistema a lo que sirvió de forma efectiva y pues... al día de hoy no tuve ningún problema con ello, eso si, háganlo de forma muy discreta (en esos casos puntuales) agradezco no haber sido descubierto y ser puesto en tela de juicio por la agencia de inteligencia de mi Ejército. 

En fin... ¿qué tiene de herramientas? Las siguientes. 

En el apartado de redes:

-Tor con: aislamiento del flujo, regular, obfs2, obfs3, obfs4, y soporte para ScrambleSuit bridges, el frontend gráfico de Vidalia .
-NetworkManager para una configuración sencilla de la red.
-Tor Browser un navegador web basado en Mozilla Firefox y modificado para mantener el anonimato con: Torbutton para anonimato y protección contra JavaScript, todas las cookies son tratadas como cookies de sesión por defecto; HTTPS Everywhere habilita de manera transparente las conexiones encriptadas a la SSL a un mayor número de webs, NoScript para tener aún más control sobre Javascript y AdBlock Plus para eliminar anuncios.
-Pidgin preconfigurado con OTR para Off-the-Record Messaging
-Claws Mail un cliente de e-mail, con soporte de GnuPG
-El cliente e-mail Icedove (Thunderbird) con Enigmail con soporte para OpenPGP
-Liferea para feed RSS
-Gobby para escritura colaborativa de textos
-Aircrack-ng para redes Wi-Fi de Auditoría de seguridad de sistemas de información. 
-I2P, una conexión anónima.
-Electrum, un cliente de uso fácil de bitcoin.

Cifrado y privacidad

-LUKS y GNOME Disks para instalar y usar dispositivos de almacenado encriptados, e.g. para Memoria USB
-GnuPG, la implementación GNU de OpenPGP para e-mail, datos encriptados y loging anónimo.
-Monkeysign, una herramienta para OpenPGP de administración de contraseñas.
-PWGen, un potente generador aleatorio de contraseñas
-Esquema de Shamir usando gfshare y ssss
-Teclado virtual Florence como un countermeasure contra hardware keylogger
-MAT para anonimizar los metadatos de los ficheros.
-KeePassX, gestor de contraseñas
-GtkHash para calcular checksums
-Keyringer, una herramienta de línea de comando para encriptar de manera compartida a través de Git
-Paperkey, una herramienta de línea de comando para recuperar las claves secretas de OpenPGP en texto plano.

En fin, esto y más... al fin y al cabo no deja de ser Debian GNU/Linux con toda su paquetería, solo que está se diseña de forma que pueda ser utilizada de manera no persistente, temporal; saludos Snowden. 
