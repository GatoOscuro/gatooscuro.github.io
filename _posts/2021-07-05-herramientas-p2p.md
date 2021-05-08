# Herramientas P2P

# Indice 

- Definición
- Historia
- Ventajas
- Desventajas 
- Generación P2P
- Servicios
- Legalidad  

Para entrar en este tema por obligación tenemos que entrar en una explicación técnica en donde hacemos referencia a Wikipedia:

> "Una red peer-to-peer, red de pares, red entre iguales o red entre pares (P2P, por sus siglas en inglés) es una red de ordenadores en la que todos o algunos aspectos funcionan sin clientes ni servidores fijos, sino una serie de nodos que se comportan como iguales entre sí. Es más, actúan simultáneamente como clientes y servidores respecto a los demás nodos de la red. Las redes P2P permiten el intercambio directo de información, en cualquier formato, entre los ordenadores interconectados" (https://es.wikipedia.org/wiki/Peer-to-peer).

![Representación](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/200px-P2P-network.svg.png)

Si no tuviste con la explicación técnica, les doy en resumen con mis propias palabras: básicamente Internet no se detuvo con los algoritmos tipo "PageRank" para obtener información/resultado tipo los que utiliza Google, Yahoo, Geocities (de aquella época y demás) sino más bien dando la oportunidad al usuario de tener el control de sus datos/administración, partiendo de aprovechar, administrar y optimizar el uso de su banda ancha que se acumula entre sí (los participantes de la red en de ese momento) obteniendo como resultado mucho más rendimiento en las conexiones para transferencias y demás usos, se notan las mejoras frente a los convencionales métodos centralizados, donde una cantidad relevante pequeña de servidores provee el total de banda ancha y recursos compartidos para un servicio o aplicación. **La comunidad** en sí partiendo de dicho principio puede hacer transferencias y gestionar servicios desde sus propios ordenadores, a esto se le agrega el nuevo concepto de "P4P" o **p2p híbrido** en donde parte como medio para que los proveedores de Internet optimicen el tráfico de las redes p2p de sus usuarios, definiendo en sí los pares más cercanos al usuario perteneciente al mismo proveedor en primer lugar.

# Historia 

En resumen: antes de atraparse en el ritmo homogéneo y vacío de las redes sociales y el marketing digital, internet tuvo una historia. Como todo el desarrollo tecnológico de la segunda mitad del siglo XX, se inicia en el contexto de la guerra fría, cuando en 1962 la RAND Corporation, el laboratorio de investigación y desarrollo de las Fuerza Aérea estadounidense, le pidió a Paul Baran que diseñara una red capaz de soportar un ataque nuclear. Baran elaboró un diagrama con tres tipos redes: **las redes centralizadas (A)**, que dependen de un único nodo o “servidor”, **las redes descentralizadas (B)**, que tiene más de un nodo, y las **redes distribuidas ( C)**, en donde todos los puntos de conexión de la red son también todos los nodos de interconexión de los demás. La idea de Baran era construir una red lo más descentralizada posible en donde hubiese tantos puntos de interconexión que, en caso de pérdida de un punto, un mensaje pudiese llegar a su destino buscando más de una ruta posible.

![Redes](https://colectivodisonancia.net/wp-content/uploads/2020/10/Redes_baran-768x496.png)

Este es un pequeño resumen de una extensa historia en donde se verán nombres demasiados conocidos como lo es el mítico ARPANET, USENET, NAPSTER y demás. Básicamente fueron los resultados de la **lucha por la cooperación** y el mercado los que dieron como resultado lo que tenemos ahora en día, fruto de dichos esfuerzos. 

Fuente: (https://colectivodisonancia.net/autonomia/redes-p2p/).


# Ventajas 

**Seis características deseables de las redes P2P:**

- **Escalabilidad:** Las redes P2P tienen un alcance mundial con cientos de millones de usuarios potenciales. En general, lo deseable es que cuantos más nodos estén conectados a una red P2P, mejor será su funcionamiento. Así, cuando los nodos llegan y comparten sus propios recursos, los recursos totales del sistema aumentan. Esto es diferente en una arquitectura del modo servidor-cliente con un sistema fijo de servidores, en los cuales la adición de clientes podría significar una transferencia de datos más lenta para todos los usuarios. Algunos autores advierten que, si proliferan mucho este tipo de redes, cliente-servidor, podrían llegar a su fin, ya que a cada una de estas redes se conectarán muy pocos usuarios.

- **Robustez:** La naturaleza distribuida de las redes peer-to-peer también incrementa la robustez en caso de haber fallos en la réplica excesiva de los datos hacia múltiples destinos, y —-en sistemas P2P puros—- permitiendo a los peers encontrar la información sin hacer peticiones a ningún servidor centralizado de indexado. En el último caso, no hay ningún punto singular de falla en el sistema.
    
- **Descentralización:** Estas redes por definición son descentralizadas y todos los nodos son iguales. No existen nodos con funciones especiales, y por tanto ningún nodo es imprescindible para el funcionamiento de la red. En realidad, algunas redes comúnmente llamadas P2P no cumplen esta característica, como Napster, eDonkey o BitTorrent.
    
- **Distribución de costes entre los usuarios:** Se comparten o donan recursos a cambio de recursos. Según la aplicación de la red, los recursos pueden ser archivos, ancho de banda, ciclos de proceso o almacenamiento de disco.
    
- **Anonimato:** Es deseable que en estas redes quede anónimo el autor de un contenido, el editor, el lector, el servidor que lo alberga y la petición para encontrarlo, siempre que así lo necesiten los usuarios. Muchas veces el derecho al anonimato y los derechos de autor son incompatibles entre sí, y la industria propone mecanismos como el DRM para limitar ambos.
    
- **Seguridad:** Es una de las características deseables de las redes P2P menos implementada. Los objetivos de un P2P seguro serían identificar y evitar los nodos maliciosos, evitar el contenido infectado, evitar el espionaje de las comunicaciones entre nodos, creación de grupos seguros de nodos dentro de la red, protección de los recursos de la red... La mayor parte de los nodos aún están bajo investigación, pero los mecanismos más prometedores son: cifrado multiclave, cajas de arena, gestión de derechos de autor (la industria define qué puede hacer el usuario; por ejemplo, la segunda vez que se oye la canción se apaga), reputación (permitir acceso sólo a los conocidos), comunicaciones seguras, comentarios sobre los ficheros, etc.

![Redes](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Leech_bittorrent.png/800px-Leech_bittorrent.png)

**Básicamente:** una excelente alternativa para almacenar información que casi se torna ilimitada, esto gracias a que los archivos se dividen, se guardan en fragmentos pequeños en distintos nodos, lo cual hace más fácil la transmisión de los archivos y ficheros ¿y qué? Al mantener esta **información almacenada en distintos nodos** nos facilita la forma en que se descarga, debido a que no hay un solo punto para realizar la descarga sino que se puede obtener la información de diferentes puntos, algo que puede significar más rapidez a la hora de la descarga. Además no se corre el riesgo de cancelarse, en caso de que un nodo falle otro ocuparía el lugar del que ha fallado, **garantizando la conexión para la transferencia efectiva.**


# Desventajas y riesgos

**No todo puede ser color de rosa y aquí lo peor de dicho protocolo**

El más evidente es el del P4P que les mencionaba mucho más arriba y pues, que mejor que una cita de Wikipedia:

> "El **P4P** genera ciertos recelos en la comunidad de internautas ya que gracias a esta tecnología los ISP pueden hacer negocio, no solo de ofrecer la conexión a internet a los usuarios, sino también de los contenidos que viajan por dicha red.
Esta posibilidad puede suponer que las mismas ISPs discriminen a favor del tráfico que les es más rentable". 

- **Actuar como cliente y como servidor:** Si que es cierto que en la mayoría de estos programas elegimos carpetas y demás definiciones de acceso para que se pueda ingresar a dichos directorios, pero ¿acaso no es un problema que se pueda violar dicho acceso? No se estaría muy lejos de corromper la listas de acceso o incluso por descuido le estarías dando la puerta abierta a cualquiera (vamos al siguiente punto con lo dicho más preciso).

- **Su naturaleza:** En si aquí partimos del buen principio de la buena fe para darle acceso a todos los usuarios que hacen parte de dicha red cooperativa, por lo tanto es ofrecer el ordenador libremente y aun peor, cuando se tiene el tema de los puertos de forma deliberada, de forma abiertos, alli es donde se agudiza el problema con programas concretos (los célebres puertos del Emule, Ares y otro más) se puede presentar para demasiadas cosas. Agrego: en la actualidad hay muchos softwares que tratan de evitar ello, pidiendo credenciales y verificación a los mismos (en donde se aprueba manualmente).

- **Virus:** Puede sonar gracioso siendo usuario de GNU/Linux, pero... también puede pasar más de una pabada gracias al acceso, por lo general que te llenen el S.O de software espía y demás ¿Saben que? La mejor muestra de ello fue Windows y Aries, ocasionando que millones de ordenadores de contagiaran con el sida cibernetico (contagiandose entre si, propagando malware y demás).

- **Datos concretos:** Con una buena ingenieria se puede obtener datos demasiados concretos a raíz de nuestra IP, incluso acceder al router, ver una apróximación de la ubicación, tener una lista detallada de descargas y demás (todo dependiendo de la seguridad de la red en cuestión del momento). 

- **Engaño:** Antes de nada, debemos asegurarnos de que lo que hemos descargado es realmente lo que queríamos descargar. Son muchos los casos en los que, bajo nombres de apariencia totalmente inocente, se esconden archivos que nada tienen que ver con dicho nombre. Una vez escaneado dicho archivo en busca de malware, y comprobado que está limpio, debemos revisar su contenido cuidadosamente. 

Esas son las principales, hay más pero toca abundar bastante.


# Generación

**Primera generación P2P**
El gran ejemplo fue Napter que sirvió para intercambiar archivos (no muy grandes) de música a través de una arquitectura centralizada en la que los archivos los almacenaban y los proporcionaban los usuarios. 


**Segunda generación P2P**
Se implementó por primera vez la característica de descentralización, por la cual no existe ningún servidor central y todos los nodos actúan de la misma manera (como cliente y como servidor). Esta característica se ha extendido a la mayoría de las redes P2P actuales. Uno de los ejemplos más conocidos es BitTorrent que entre sus mejoras está el compartir archivos más grandes. 


**Tercera generación P2P**
Son las más recientes. En ellas se ha extendido y estabilizado el concepto de Middleware P2P que se dio a conocer en la segunda generación, descentralizando el proceso indizado (DHT) y estableciendo un enrutamiento más eficiente (routing overlay, tablas de encadenamiento). Implementan una comunicación no directa, cifrada y anónima. 


# Servicios 

- **Freenet:** Freenet es una red de distribución de información descentralizada y resistente a la censura diseñada originalmente por Ian Clarke. Freenet tiene por objeto proporcionar libertad de expresión a través de las redes de pares mediante una fuerte protección del anonimato; como parte del apoyo a la libertad de sus usuarios, Freenet es software libre y gran alternativa a la Red Tor. (https://freenetproject.org/)

![Freenet](https://www.geckoandfly.com/wp-content/uploads/2019/01/freenet.jpg)

- **i2p:** I2P es un software que ofrece una capa de abstracción para comunicaciones entre ordenadores, permitiendo así la creación de herramientas y aplicaciones de red con un fuerte anonimato. Sus usos incluyen páginas webs anónimas, servidores y clientes de chat, blogging, transferencia de archivos, además es una red que se adapta muy bien a las redes p2p. I2P es software libre y utiliza varias licencias libres. (https://geti2p.net/es/)

![i2p](https://geti2p.net/_static/images/routerconsole-light.png)

- **p2p.chat:** El mejor lugar para viodellamadas, sin registros, sin seguimiento y sin tener que depender de nadie de por medio. Además de estar cifradas, lo mejor para sustituir a cualquier aplicación web de viodellamadas. (https://p2p.chat/)

- **Los privativos:** Cuando todo esto del P2P comenzo, en sus inicios Skype, Spotify utilizaban redes P2P de base para mantener sus flujos y asi sustentar la actividad del usuario, sorprendente ¿no? Al día de hoy Spotify elimino dicho modelo, se hizo con muchos servidores propios con los cuales mantener su propia red cerrada sin problemas. 

- **Binance P2P:** Si tienes conocimiento acerca del rollo de las criptomonedas, pues... Binance es un excelente sitio para gestionar vustras monedas locales (https://p2p.binance.com/).

![Cosmic radiation](https://public.bnbstatic.com/image/cms/article/body/202102/7eb6785503e9080dfe3ecd13faa1439b.png)

- **Bittorent:** BitTorrent es un protocolo diseñado para el intercambio de archivos entre iguales en Internet. Es uno de los protocolos más comunes para la transferencia de archivos grandes. El programador Bram Cohen diseñó el protocolo en abril de 2001 y publicó su primera implementación el 2 de julio de 2001.​ Actualmente es propiedad de Justin Sun, fundador de Tron Foundation, el cual adquirió BitTorrent, Inc (https://www.qbittorrent.org/)  o (https://github.com/transmission/transmission). 

![Qbittorent](https://1.bp.blogspot.com/-eDADjuY_uWg/VVMaH_b2tcI/AAAAAAAAWXY/Sas4CqX3UkA/s1600/qbittorrent.png)

- **Utopia P2P:** Es una red que se mantiene entre la comunidad con multitud de servicios, tanto lo normal para navegar como para transfarencias de archivos, chats seguros, alojamiento y demás (https://u.is/en/).

![Utopia](https://techiejerry.com/wp-content/uploads/2019/10/dark-theme.png)

- **Retroshare:** RetroShare es un software que proporciona comunicaciones de red cifradas P2P, un sistema de correo electrónico no centralizado, mensajería instantánea, un BBS y un sistema de compartición de ficheros basado en una red amigo-a-amigo, haciendo uso para todo ello de la herramienta de cifrado GPG. No es estrictamente un cliente para una red oscura dado que los pares pueden opcionalmente comunicar certificados y direcciones IP de/a sus amigos. (https://retroshare.cc/) 

![Retroshare](https://static.filehorse.com/screenshots/file-transfer-and-networking/retroshare-screenshot-01.jpg)

- **Surge**: Su lema lo dice "P2P con esteroides" y pues es P2P con esteroides una aplicación de intercambio de archivos p2p diseñada para utilizar tecnologías de cadena de bloques para permitir transferencias de archivos 100% anónimas. Surge está encriptada de extremo a extremo, descentralizada y es de código abierto. (https://getsurge.io/)

![Surge](https://getsurge.io/images/saas/home.png)

Estos son algunos de los servicios más conocidos de las redes P2P, puedes contribuir solicitando que se agregue una conocida y demás, estoy al tanto al Feedback.


# Legalidad

**Ética y polémica alrededor de los programas P2P**

> "Los programas P2P ganaron popularidad gracias a su capacidad de intercambiar archivos o contenido protegidos por derechos de autor, como lo son música, vídeo o software. Para las productoras discográficas y cinematográficas este intercambio es considerado como ilícito, punto en el que muchos usuarios no concuerdan o del que no están conscientes. De este modo, al hacerse populares los programas P2P, se originó una lucha entre los partidarios de la idea de que la propiedad intelectual es un medio para incentivar la creación e innovación y los que creen que el derecho de autor es demasiado rígido e impone una barrera a la creatividad artística" (https://www.aboutespanol.com/que-son-los-programas-p2p-y-como-funcionan-157981) 


**Declaración de la ONU**

En relación con el intercambio de archivos el informe de la ONU Reporte Especial sobre la promoción y la protección del derecho a la libertad de expresión y opinión, analiza la legislación de distintos gobiernos que castiga y considera muy grave que pueda llegar a negarse a los ciudadanos el acceso a Internet. El informe dice así:

> "Si bien las propuestas en marcha bloquean y filtran a los usuarios de contenido específico en la red, los Estados también han adoptado medidas para cortar el acceso a Internet por completo. Cortar a los usuarios este acceso, independientemente de la justificación que se presente, ya sea por derechos de autor u otras causas similares, es una medida desproporcionada y por lo tanto una violación del artículo 19, apartado 3, del pacto internacional sobre los derechos civiles y políticos". (https://web.archive.org/web/20110728095241/http://www.nuevatribuna.es/articulo/sociedad/2011-06-04/onu-leyes-intercambio-archivos-violan-derechos-humanos/2011060415332600907.html).


![P2P](https://www.researchgate.net/profile/Andrea-De-Mauro-2/publication/34684930/figure/fig1/AS:309958307532800@1450911227309/A-pure-P2P-network.png)






























