---
layout: post
---


# ¿Por qué no voy a recomendar Signal nunca más?

Una de las cosas que hago es criptografía y capacitación en infoseguridad para periodistas de investigación que necesitan mantener la confidencialidad de sus fuentes y comunicaciones para que puedan hacer su trabajo en el interés público de manera más segura. A menudo trabajan en lugares muy vigilados, como Europa o los Estados Unidos. Los documentos de Ed Snowden explican una o dos cosas sobre cómo el aparato de inteligencia estadounidense lleva a cabo su trabajo diario. A veces también trabajan en lugares del mundo donde el criptoanálisis con mangueras de goma es más común que en Estados Unidos o Europa. Por lo que las herramientas de cripto por sí solas no son el Alfa y el Omega de la seguridad (personal). Esto requiere una cuidadosa consideración de qué utilizar cuando y en qué situación. Una de las cosas que he recomendado en el pasado para varios casos es la aplicación de OpenWhisperSystems llamada Signal, disponible para Android e iOS. En este artículo, quiero explicar mis razones por las que no recomendaré Signal en el futuro.

Para ser claros: la razón de esto no es la seguridad. A mi leal saber y entender, el protocolo Signal es criptográficamente sólido, y sus comunicaciones deben seguir siendo seguras. La razón tiene mucho más que ver con la forma en que se ejecuta el proyecto, el enfoque y ciertas dependencias de la aplicación oficial de Signal (Android), así como el futuro de Internet, y en qué futuro nos gustaría construir y vivir. Este post fue provocado principalmente por el experimento Giphy de Signal (https://signal.org/blog/giphy-experiment/ ) que muestra una dirección para el proyecto que yo no habría tomado. Hay otras cuestiones más importantes que merecen nuestra atención.

**¿Qué es Signal?**

Signal es una aplicación publicada por OpenWhisperSystems, una empresa dirigida por Moxie Marlinspike. Ha publicado una aplicación oficial de Signal para Google Android y Apple iOS. Signal ha sido fundamental para proporcionar una aplicación de mensajes de texto y llamadas fácil de usar y segura criptográficamente. Es una combinación de las aplicaciones previamente separadas TextSecure y Redphone, que se combinaron en una aplicación llamada Signal.

Una de las principales razones por las que lo recomendé antes a la gente fue que era fácil de usar, además de la seguridad criptográfica. Esto es algo bueno que Signal ha hecho. La gente podría instalarlo y comunicarse de forma segura. El software criptográfico necesita ser mucho más sencillo de usar  de forma segura  y Signal está haciendo lo suyo en las plataformas móviles para crear una plataforma de mensajería segura y fácil de usar. Los aprecio por eso. Quería quitarme eso del camino.

**Múltiples problemas con Signal**

- Falta de federación.
- Dependencia de Google.  
- Cloud Messaging.
- Su lista de contactos no es privada.
- El servidor de RedPhone no es de código abierto.

Me meteré en estos de uno en uno.

**Falta de federación**

Existe una versión modificada de Sigal llamada LibreSignal, que eliminó la dependencia de Google de la aplicación Signal, permitiendo que este se ejecute en otros dispositivos (Android), como teléfonos GrapheneOS o Jolla (con capa de compatibilidad Android). En mayo de este año 2017, sin embargo, Moxie dejó claro que no quiere que LibreSignal utilice los servidores Signal y que no aprueba el nombre (  https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165 ). El nombre es algo que puede cambiar, eso no es un problema. Lo que es un problema, sin embargo, es el hecho de que no quiere que LibreSignal utilice los servidores de Señal. Lo que estaría bien si permitiera a LibreSignal federarse usando sus propios servidores. Esto fue probado una vez (Cyanogenmod, y también ofrecido a Telegram, de todas las personas) pero posteriormente abandonado, porque Moxie cree que ralentiza los cambios en la aplicación y / o protocolo. Sin embargo, todo el problema con su posición es que no veo el sentido de hacer ninguna de estas cosas de mensajería segura, sin tener federación. El Internet fue construido por la federación. Múltiples proveedores de correo electrónico y servidores, por ejemplo, pueden comunicarse sin esfuerzo entre sí, así que puedo enviar un correo electrónico a alguien que tenga una dirección de Gmail o una dirección corporativa, etc. sin esfuerzo y todo funciona. Esto funciona por razones de federación, porque los protocolos son todos estándares abiertos y hay múltiples implementaciones de los estándares que pueden cooperar y comunicarse entre sí. Otro ejemplo sería el protocolo Jabber/XMPP, que también tiene varios clientes en múltiples plataformas que pueden comunicarse de forma segura entre sí, a pesar de que uno tiene una cuenta Jabber en otro servidor que el otro.

Si no estamos federados, si no cooperamos, ¿qué es lo que impide que Internet se convierta de nuevo en un montón de jardines amurallados propietarios? Entonces, ¿ Internet no es más que una plataforma en la que podemos utilizar ciertos servicios propietarios? Signal entonces, resulta ser un sitio (parcialmente propietario) en el que sus mensajes se transmiten de forma segura.

**Dependencia de Google Cloud Messaging**

Actualmente, el cliente oficial de Signal depende de Google Cloud Messaging para que funcione correctamente. La alternativa que ha sido desarrollada por la gente de LibreSignal ha eliminado esa dependencia, por lo que las personas que ejecutan otro software, como Jolla o GrapheneOS (Aporte de GrapheneOS gracias a C3PO) pueden ejecutar Signal. Desafortunadamente, las decisiones políticas de OpenWhisperSystems y Moxie Marlinspike hacen que sea imposible ejecutar de forma fiable clientes de Señal no oficiales que utilicen la misma infraestructura de servidor, para que las personas puedan comunicarse. Además, la federación, como se explicó en la sección anterior, está expresamente obstaculizada y prohibida por OpenWhisperSystems, por lo que no es una opción para LibreSignal simplemente correr sus propios servidores y luego federarse dentro de la red de Señal más amplia, permitiendo que las personas se contacten entre sí a través de los clientes.

¿Qué es Google Cloud Messaging?

**Actualización** 1 de marzo de 2021: Resulta que es opcional utilizar dicho microg o firebase en su defecto, en el S.O móvil LinageOS dan la opción de elegir entre utilizarlo o utilizar la notificación background tipo Telegram.

Agradecimientos al usuario Waltercool por la correción; saludos. (https://pl.slash.cl/notice/A4ltSuIeyGRTauAdWq) 

Captura:

![Captura](https://cdn.mastodon.la/cache/media_attachments/files/105/815/439/077/811/524/original/9f0ff1760291c7e1.png)

El servicio Google Cloud Messaging es utilizado por Signal con mensajes vacíos para despertar el dispositivo antes de que los mensajes reales sean introducidos al dispositivo por los servidores de Signal. Hay una forma de usar Signal sin depender de GCM, pero que usa microg (https://github.com/microg) y que pide a la gente que básicamente vuelva a compilar su kernel (al menos tuve que hacerlo en mi caso). Esto no es algo que se pueda pedir a usuarios no técnicos. Me gustaría poder ejecutar un cliente de Señal oficial (o cualquier cliente de mensajería seguro) en hardware que ejecute GrapheneOS por ejemplo.

Sin relación directa con GCM, pero como en los dispositivos Android, Google suele tener acceso root al teléfono, existe el problema de la integridad. Google sigue cooperando con la NSA y otras agencias de inteligencia. El PRISM también sigue siendo una cosa. Estoy bastante seguro de que Google podría servir una actualización o versión especialmente modificada de Signal a objetivos específicos para la vigilancia, y no serían más sabios que instalaron malware en sus teléfonos. Por esta razón, también sería muy preferible ejecutar un cliente de mensajería seguro en una plataforma más segura. Actualmente cuando se trata de Señal esto no se puede hacer de ninguna manera oficial, y ayudaría a las personas que realmente necesitan servicios de mensajería segura (en lugar de las personas que simplemente la usan como un reemplazo de “WhatsApp”), si el software se ejecuta en otras distribuciones de Android, como Copperhead.

**Su lista de contactos (gráfico social) no es privada**

Aquí está la lista de permisos de Señal
(https://support.signal.org/hc/en-us/articles/360007062172), incluyendo la explicación de OpenWhisperSystems para la necesidad de ellos. Como puedes ver claramente, Signal está permitido (si lo instalas), para leer y modificar tus contactos. Señal asocia números de teléfono con nombres de una manera similar a lo que está haciendo Whatsapp, y esta es una gran razón por la que sienten que necesitan leer su lista de contactos. Además, hay algo de usabilidad donde se muestran los nombres y las imágenes de los contactos en la aplicación Signal. Los tiene antes de enviarlos al servidor, pero como el espacio de posibles hashes es tan pequeño para los números de teléfono, esto no proporciona mucha seguridad. Moxie ha declarado anteriormente (en 2014) (https://signal.org/blog/contact-discovery/
)que el problema del descubrimiento de contactos privados es difícil, establece diferentes estrategias que no funcionan o no dan un rendimiento satisfactorio, y luego admite que sigue siendo un problema sin resolver. La discusión sobre esto parece haber pasado de un tema de Github a una lista de correo, y no conozco ninguna mejora en este frente.

Por supuesto, todo esto podría hacerse de forma diferente, utilizando los nombres de usuario para conectar a los usuarios en lugar de sus números de teléfono (incidentemente, esto también permitiría a las personas que usan múltiples números de teléfono en el mismo dispositivo utilizar Señal de forma fiable). Y la última vez que lo comprobé, si usa el mismo número de teléfono en un dispositivo diferente, Signal se dará de baja en el dispositivo antiguo.

Otro problema, y un plus por usar los nombres de usuario, es que usted puede querer usar Signal con personas a las que no necesariamente quiere dar su número de teléfono. Y la federación también sería más fácil con nombres de usuario y servidores, separados por un símbolo, como el @. Como en el caso de Jabber/XMPP. Tampoco veo aquí ningún problema de usabilidad, ya que incluso las personas muy no técnicas generalmente consiguen el concepto de una dirección, o una dirección de correo electrónico, y esto sería muy similar.

**RedPhone no es de código abierto**

El componente telefónico de Señal se llama RedPhone. Desafortunadamente, el componente de servidor de esto no es de código abierto (por lo que se impide a las personas ejecutar sus propios servidores de teléfono, y esta es también probablemente la razón por la que las llamadas telefónicas seguras cifradas no funcionan en, por ejemplo. LibreSignal.)

No sé exactamente qué es lo que impide que se libere el código del servidor de RedPhone (ya sea por cuestiones legales o por simple falta de voluntad), pero creo que es extraño que no haya movimiento alguno para pasar a una solución diferente/alternativa, que respete los derechos de los usuarios.

**Avanzando**

La gran pregunta ahora, como también dijo @shiromarieke en Twitter, es ¿qué herramienta post-Signalqueremos usar? Todavía no sé la respuesta a esa pregunta, más o menos porque hubo un fork de Signal que ahora es muy independiente y me tramo bastante y es Session, es descentralizado y demás, pero se me cayo su gloriosa imagen después de su base en criptomonedas y sus clientes llenos de bugs que para sincronizar mensajes de dispositivo a dispositivo te vas a encontrar más de un error y ni querras que te cuente de los grupos.

Lo más cercano y superior es la red Matrix (cliente Element anteriormente Riot) el cual proporciona cifrado de extremo a extremo de manera robusta pero que aun asi posee fallas que deja mucho que desear y otros tantos detalles como su abrumante cantidad de recursos que necesita en servidor para estar operativo, básicamente consume 15 veces lo que hace su rival más prometedor y si, es XMPP el vijo protocolo de 199X, aun sigue vivo y robusto con su protocolo de cifrado OMEMO (gran alternativa de mensajeria segura).

Aun asi mis requisitos mínimos de este tipo de software es que como comunidad necesitamos idear una solución viable y alternativa a la Signal/Telegram que sea fácil de usar y que de hecho respete las elecciones de la gente, tanto en el hardware como en el software que ellos eligen ejecutar…

En mi opinión, debería existir una herramienta que sea software totalmente libre (según la definición de la GPL de GNU), que respete la libertad de los usuarios para inspeccionar, utilizar, modificar y distribuir libremente copias modificadas del software. Asimismo, esta herramienta no debe tener dependencias de infraestructura corporativa como la de Google (básicamente cualquier socio de PRISM), que permita a estas partes controlar el correcto funcionamiento del software. El hecho de que la señal depende de Google Cloud Messaging, y la tecnología de Google en general es algo que debe evitarse.

Al final, creo que necesitamos pasar a una Internet en la que haya más servicios federados, no menos, en la que la información se comparta abiertamente, y los servicios gestionados públicamente por múltiples personas de todo el mundo. De lo contrario, corremos el riesgo de terminar en un Internet neo-90s, con jardines amurallados y paredes de pago por todas partes. Ya se ve esta tendencia en el periodismo.

Debemos recordar que estamos luchando no sólo contra la vigilancia gubernamental, sino también contra la vigilancia corporativa. Necesitamos medios para defendernos de esto, y utilizar soluciones corporativas que creen una dependencia de estas soluciones, aunque las comunicaciones mismas no sean legibles para ellos, sigue existiendo el problema de los metadatos, y por supuesto la disponibilidad general de los servicios de Google para Señalización.

Es realmente desafortunado que OpenWhisperSystems no sea más amigable con iniciativas como LibreSignal, ya que estas personas hicieron mucho trabajo que ahora básicamente va a ser desechado porque la persona que ejecuta Signal no es amigable con estas iniciativas.

Necesitamos cooperar más como comunidad en lugar de crear estas pequeñas islas, de lo contrario no vamos a tener éxito en derrotar o incluso defender significativamente contra el Gran Hermano. Recuerda, nuestro enemigo sabe cómo dividir y conquistar. Divide et impere. Ha sido una táctica básica de subyugación del gobierno desde la época romana. No debemos permitir que nuestros propios egoísmos mezquinos y nuestra búsqueda de la fama eterna de hackers se interpongan en el camino de nuestro objetivo real: desmantelar los estados de vigilancia a nivel mundial.

**Solución** XMPP o Matrix.

Notas:

[1]: una versión anterior de este artículo indicaba incorrectamente que GCM se usaba para transportar mensajes de señal. Si bien es correcto para una versión anterior de TextSecure, esto ya no es correcto para Signal. Lo he actualizado, en respuesta a este comentario HN: https://news.ycombinator.com/item?id=12882815.

[2]: Aclaré un poco mi posición sobre Google y GCM y sobre la lista de contactos / descubrimiento de contactos privados.


Enlace extra: https://www.reddit.com/r/linux/comments/5bfwws/why_i_wont_recommend_signal_anymore/


![Cosmic radiation](https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/01/31/Recortada/img_abarredo_20180131-125245_imagenes_lv_terceros_signal-k6pD-U44427574352n6G-992x558@LaVanguardia-Web.jpg)
