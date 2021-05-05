---
layout: post
---

# Proveedores de correo electrónico: ¿cuál elegir? - 2 PARTE

# Neomailbox
(https://www.neomailbox.com/)

Sólo de pago - 50$ al año; se aceptan bitcoins. Soporte para clientes de correo. TOS prohíbe hablar mal del servicio (lol) - "no publicar o enviar comentarios falsos, maliciosos, difamatorios o calumniosos sobre Neomailbox o el servicio de atención al cliente de Neomailbox en cualquier forma online u offline". ¿Qué pasa con la privacidad? No se menciona mucho excepto:

> Guardamos registros del tráfico SMTP durante 6 meses para análisis de rendimiento y prevención de abusos. Los registros de navegación anónima se borrados cada 10 minutos.

Antes eran 2 meses, así que multiplicaron la duración por 3. Y los detalles del "tráfico SMTP" no se mencionan, por lo que debes asumir que es absolutamente todo. Y en otra parte de la web:

> No guardamos registros ni datos de clientes más allá de lo que es absolutamente necesario para el ajuste del rendimiento y la supervisión de la seguridad de nuestros servidores. Su dirección IP no se guarda en nuestros registros. Todos los registros se borran cada 7 días.

**Actualización:** la parte de la IP ya no está en las FAQ, lo que confirma que sí almacenan tu IP. Pero espera, eso contradice la cita anterior. Así que no se explicaron claramente - eso es una como si no quisieran que supieras qué es lo que almacenan exactamente. Deberías asumir lo peor - es decir, que todo el contenido de tu correo y los metadatos se guardan durante 180 días. También está esto:

> La siguiente declaración es cierta el 1 de enero de 2020: Neomailbox nunca ha cedido datos de clientes a ninguna agencia gubernamental u otra entidad.

Eso está muy bien. Sin embargo, el hecho es - no sólo tienes que pagar por tener tus datos almacenados durante medio año, sino que no puedes decir ni una mala palabra sobre ellos. Por algo positivo, Neomailbox tiene encriptación de disco y alias ilimitadas. Aun así, son de pago, guardan tus datos sin especificar durante 6 meses, y tienen cosas raras en sus ToS. Mi amigo también ha comprobado que uno de sus servidores de correo falla la prueba TLS - lo que significa que tu correo se envía sin cifrar. Podrías hacerlo mucho peor que Neomailbox - pero también mucho, mucho mejor.

# Mailbox.org
(https://mailbox.org)

Desde el primer momento, se te aplica el recaptcha de Google; esto es una injusticia absoluta, ya que Google es el epítome de las empresas de software espía. El servicio servicio también exige su nombre completo y el país. Permiten el registro y el uso a través de Tor. Se me pidió la verificación por SMS o correo electrónico para con el fin de restablecer la contraseña, esto fue sin embargo, opcional.

La política de privacidad establece que utilizan el software espía Matomo; es auto alojado, sin embargo, esto no los redime. Todavía es posible que que estos datos se filtren o se entreguen a las fuerzas del orden. Recogen una plétora de datos:

- Los tipos y versiones de navegador utilizados
- El sistema operativo utilizado por el sistema que accede
- El sitio web desde el que un sistema de acceso llega a nuestro sitio web (el llamado referrer)
- Las subpáginas a las que se accede a través de un sistema de acceso en nuestra página web
- La fecha y hora de acceso al sitio web
- Una dirección de protocolo de Internet (dirección IP)
- El sistema de acceso del proveedor de servicios de Internet
- Y "otros datos e información similares" con "fines de seguridad"; no debería haber absolutamente ninguna ambigüedad en una política de privacidad.

Dicen que recogen estos datos expresamente para proporcionárselos a las fuerzas de seguridad de la ley. Borrarán los datos si se les solicita; también detallan el período de borrado de datos concretos:

- WEBMAIL: La dirección IP y la hora de acceso se conservan durante 4 días, y luego se borran.
- SMTP: los metadatos de los mensajes (remitente, destinatario, ID del mensaje y tamaño de un correo electrónico enviado o recibido) se conservan durante 7 días y luego se borran
- POP3/IMAP: Cuenta, dirección IP, ID y tamaño de los mensajes borrados, ID y el tamaño y las ubicaciones de los correos electrónicos movidos; todo ello se conserva durante 4 días, y luego borrado
- Servidor POP3 remoto, inicio de sesión, contraseña, registro de recuperaciones POP3 recientes; se conserva durante 7 días y luego se borra
- WEBSITE: datos de registro con inicios de sesión + direcciones IP de origen en las últimas horas; conservados durante 4 días, luego borrados

La fiscalía y la policía alemanas tienen un acceso "fácil" a su base de datos. Las solicitudes "simples" no necesitan una orden judicial. No están no están legalmente autorizados a informar al cliente a cualquier solicitud de información. Tampoco se les permite impugnar la solicitud, y como tal, usted tiene ninguna protección.

El acceso a los datos de registro de los servidores de correo o web o al contenido del correo electrónico de un buzón requiere la decisión de un juez, a menos que las autoridades investigadoras puedan establecer directamente establecer un "peligro inminente", en otras palabras, la policía puede simplemente gritar terrorista y pueden obtener cualquiera de tus datos.

Afirman que sólo revelarán los datos a las solicitudes obligatorias, "Tales solicitudes de información de la policía sin una orden judicial serán sin una orden judicial serán rechazadas por nosotros".

Jugando con la interfaz web, no hay ni una sola solicitud de terceros.

En general mailbox.org es absolutamente pésimo para la privacidad. No sólo retienen una cantidad exorbitante de datos, sino que hacen todo lo posible para las autoridades y no intentan (o legalmente no pueden) protegerte en absoluto. NOTA: esta entrada ha sido enviada por Oreamnos; yo sólo he hecho mejoras gramaticales / de estructura. Gracias, Oreamnos

# Secmail.pro
(secmail.pro)

Proveedor sólo de correo electrónico accesible a través de http://secmailw453j7piv.onion. No hay soporte para clientes de correo. El registro es libre de problemas con un simple captcha y no se requiere información personal. Tenga en cuenta que -aunque conexión a través de la cebolla significa que su dirección IP probablemente no será IP, secmail podría leer el contenido del correo. a menos que estén encriptados con PGP. Dado que la red Tor es un objetivo muy apetecible para varios espías, hace que la fiabilidad de secmail sea aún más importante más importante - y desafortunadamente, no pasan la prueba. El servicio no contiene política de privacidad - aunque tiene algunas afirmaciones vagas de que realmente se preocupan por su seguridad, hay cero información sobre lo que almacenan y por cuánto tiempo. Su dominio clearnet contiene sólo un enlace a la cebolla - sin embargo, no tiene SSL por lo que un atacante podría reescribir el enlace a su sitio de phishing y robar credenciales. De hecho, así es como SIGAINT, otro proveedor de correo electrónico, fue hackeado hace algún tiempo (https://securityaffairs.co/wordpress/36292/hacking/sigaint-hacked-by-intelligence.html):

> "Estamos seguros de que no han entrado", afirma la alerta. "Parece que han recurrido a reescribir la URL .onion ubicada en sigaint.org a una de las suyas para poder hacer MITM [man-in-the-middle] logins y espiar en tiempo real"

Otro investigador les escribió un correo electrónico (https://web.archive.org/web/20200201012905/https://geneticabhorrence.neocities.org/secmail.html)  hace unos días en el que decían que no tienen tiempo para implementar SSL (están confiando en la detección automática de relés malos de la red Tor, que no es perfecta(https://web.archive.org/web/20150705184539/https:/chloe.re/2015/06/20/a-month-with-badonions/) - "En 32 días he encontrado 15 casos en los que un nodo está husmeando y usando mis credenciales"). Han tenido dos putos años para soportar SSL pero no lo hacen - y desde que saben sobre el hack de SIGAINT, haciéndose intencionalmente vulnerables a lo mismo significa que son ser muy incompetentes o un honeypot. Secmail también se ha negado a comentar sobre la falta de un dominio v3 (más seguro) más seguro; ¿tampoco tienen tiempo para eso? Todo lo que se necesita es una línea adicional en el archivo de configuración (https://2019.www.torproject.org/docs/tor-onion-service.html.en).

Cuando secmail empezó, se anunciaron en reddit (https://old.reddit.com/r/onions/comments/5tzjxx/secmail_secure_mail_service_in_the_deep_web/), donde recibieron muchas críticas. Por ejemplo, la configuración de su primer servidor usaba para revelar las versiones del sistema operativo y de PHP, lo que facilita mucho la entrada de los hackers -y en ese momento, ya llevaban más de seis meses "operando". - ¿se puede decir incompetente? Así que, a pesar de las alianzas de seguridad y el encanto de la darknet, yo me mantendría alejado de esta. No tiene nada en nada sobre RiseUp, que también soporta dominios onion (¡también v3!). Lea una investigación más profunda de secmail aquí si está interesado (https://web.archive.org/web/20200201012905/https://geneticabhorrence.neocities.org/secmail.html).

# CTemplar
(https://ctemplar.com)

Yo tenía una reseña de éste, y no era tan buena. Sin embargo, después de leer mi crítica, CTemplar me escribió un correo electrónico para decir que han cambiado la mayoría de los problemas (¡felicitaciones!). Como no quería información errónea, retiré la antigua reseña y ahora, por fin, he podido reescribirla. ahora por fin he podido reescribirla. Entonces, ¿merece la pena usar CTemplar usar ahora?

Yo seguiría diciendo - no realmente. En primer lugar, carece de soporte para clientes de correo que para mí es la cuestión más importante. No me interesa el webmail cuando nunca tendrá la cantidad de funciones que tiene mi cliente de correo y requiere habilitar JavaScript potencialmente malicioso en el navegador. Pero espera, CTemplar afirma que no pueden hacer eso (https://blog.ctemplar.com/ctemplar-checksum-implementation/) debido a las sumas de comprobación:

> Actualmente todos los servicios de correo electrónico cifrado de extremo a extremo pueden hackear sus propios usuarios y descifrar todos sus datos excepto nosotros. Nosotros somos capaces de proporcionar este nivel de protección utilizando una implementación de sumas de comprobación que no se ha utilizado antes.

Hay dos problemas con esta afirmación. En primer lugar, la comparación de sumas de comprobación no requiere ninguna implementación especial - se puede hacer con cualquier servicio que comparta su código externamente (por ejemplo, en GitHub). Luego, sólo tienes que comparar ese código con el de tu navegador "Ver fuente" de tu navegador. Sin embargo, todos los proveedores de correo electrónico que he visto no comparten realmente el código que se ejecuta en el sitio - sólo los archivos para construirlo / generarlo. Afortunadamente, uno de los habituales de nuestro chat habituales emprendió el trabajo de construir CTemplar y después de varios intentos, no pudo. Incluso si lo consiguiera, tendrá que comparar las sumas de comprobación cada vez que utilice el sitio y para cada uno de los scripts que cargue. Claramente, esto es imposible en práctica, y por lo tanto inútil. Si realmente se preocuparan por esto, simplemente pondrían el código real en GitHub para que pudieras comparar directamente.

Por supuesto, incluso si consiguieras realizar la hercúlea hazaña anterior, esto no haría nada para garantizar que el código no es malicioso. Todavía tendrías que ir a inspeccionarlo para ver lo que hace, y se hace mucho más difícil si está ofuscado - que el de CTemplar resulta ser. Aunque no puedan dirigirse a ti específicamente sin ser expuestos a través de las sumas de comprobación (es decir, si usted pasó a compararlas en ese momento) - pueden simplemente atacar a todos, y luego incluso eliminar el código infractor al día siguiente antes de que nadie lo detecte que nadie lo detecte. ¿Ves? Las sumas de comprobación no hacen nada para proteger contra el código malicioso. Bien, basta de sumas de comprobación, veamos su política de privacidad (https://ctemplar.com/privacy):

> Cuando usted visita nuestro sitio web, su navegador nos envía su agente de usuario y la dirección IP. Cuando abandona nuestro sitio no se guardan registros de su dirección IP con asociación a su cuenta. Almacenamos su IP de forma anónima durante 7 días.

Los "datos anonimizados" vuelven a asomar su fea cabeza. Lo que se almacena exactamente no lo sabe nadie.

> Si decides eliminar tu cuenta, se borra todo y no se guardan registros ni copias de seguridad. 

Ahora esa es una gran política que lamentablemente la mayoría de los proveedores no siguen. Por cierto, esto es aparentemente gracias a las "leyes de privacidad islandesas" - que son realmente una cosa a diferencia de, por ejemplo, las leyes de privacidad Suizas (un meme en este punto) que hacen cumplir 6 meses de almacenamiento de datos.

> No revelaremos nada a terceros, excepto tu información de pago si decides comprar una cuenta de pago.

De nuevo, esta es la única forma de ser privado. CTemplar, por cierto, también permite los pagos en bitcoin, así que incluso si quieres una cuenta de pago, puedes evitar que tus datos se almacenen en cualquier lugar que no sea CTemplar.

Bien, me he saltado algunos apartados porque quiero abarcar la parte más importante en profundidad. Fíjate en esta cita:

> Utilizamos un servicio CDN porque su uso es necesario para proporcionar una mejor experiencia sirviendo el contenido de nuestro sitio web estático rápidamente en todo el mundo. Nuestro servicio CDN también proporciona la protección necesaria contra los ataques DDOS contra ataques DDOS. Los CDN's pueden teóricamente servir código malicioso a nuestros usuarios. Nuestro SRI & La implementación de Checksum ofrece protección contra el código malicioso servido por CDN's.

Lo de las sumas de comprobación lo he analizado más arriba, así que déjame que te cuente brevemente qué es el SRI. Cada vez que un sitio incluye un recurso de un tercero (digamos, una biblioteca JavaScript o un estilo) - ese tercero podría en teóricamente modificar el archivo que se envía en cualquier momento. Para protegerse a sí mismo (y a los espectadores), el sitio podría adjuntar un parámetro de "integridad" al recurso con un hash que el navegador compararía con el archivo recibido compararía con el archivo recibido para asegurarse de que es lo que el sitio pretendía enviar. Si el hash no coincide, significa que el sitio que sirve el recurso, o algún otro tercero, manipuló el archivo. Sin embargo, esto funciona sólo para los recursos para los que el sitio añadió la etiqueta de integridad - el tercero entrometido podría seguir modificando cualquier otra cosa. El mayor problema, sin embargo, es qué tipo de CDN tenía CTemplar en mente (archivo):

Por ejemplo, si CTemplar recibe un ataque DDOS que no seamos capaces de manejar, pasaremos a usar Cloudflare.

Así que pondrán su sitio detrás del malvado Cloudflare en caso de un DDOS. Qué significa eso para sus afirmaciones sobre la ISR? Brevemente, lo que hace Cloudflare es proxy de toda la página (en lugar de un archivo específico o varios) - de modo que puede modificarla antes de servirla, incluyendo eliminar las comprobaciones de integridad si quisiera. Verás, SRI sólo puede proteger contra que un tercero modifique un archivo si no tiene acceso a la página que establece las comprobaciones de integridad - pero Cloudflare sí. Que CTemplar pretenda lo contrario significa que están que te están mintiendo o que no han investigado, lo cual es una mala noticia para su fiabilidad.

Con esto fuera del camino, vamos a los aspectos positivos de CTemplar. El registro no requiere datos personales ni ReCaptcha. La página principal afirma que ellos "nunca rastrean tu dirección IP, guardan registros de tu uso o registran cualquier información de identificación en cualquier momento"; lo cual es genial pero de nuevo -ya que han especificado "información de identificación", debe haber recolección de algunos datos supuestamente no identificables - y estamos en la oscuridad en cuanto a lo que es. CTemplar proporciona un dominio de cebolla pero redirige a su clearnet one:

¡Vaya! Y yo que pensaba ser un buen chico y enumerar algunos aspectos positivos, pero parece que CTemplar no se lo merece. Podría indagar más, pero me parece infructuoso a estas alturas. CTemplar parece parece preocuparse por ti al menos un poco - ya que me enviaron un correo electrónico hace algunos meses y cambiaron algunos de los temas ofensivos. Pero pero siguen sin dar soporte a los clientes de correo (la característica más importante para un proveedor) y tienen otras fallas evidentes como la totalmente insegura e irrespetuoso del dominio onion a la clearnet. También también han hecho afirmaciones erróneas sobre las sumas de comprobación y la integridad de los subrecursos. llamarlo fraude o incompetencia, no me importa. Incluso si cambiaron cosas de nuevo, la reputación ha sido dañada irreversiblemente. Por mucho que me duela decirlo - porque realmente hay muchos proveedores mucho peores por ahí - evita CTemplar.

# KolabNow
(https://kolabnow.com/)

De pago, requiere un nombre real y una dirección de correo electrónico existente para activar. Acepta bitcoin. Lleno de posturas de privacidad, completo con la afirmación de estar protegido por fuertes leyes suizas de privacidad. Como ésta (https://www.fedlex.admin.ch/eli/cc/54/757_781_799/en#a144bis), por la que han recibido una solicitud de datos del gobierno que han cumplido:

> Perjuicio a los datos 1. Toda persona que sin autorización altere, borre o inutilice datos almacenados o transmitidos electrónicamente o de alguna otra forma de manera similar, podrá ser condenado, previa denuncia, a una pena privativa de libertad no superior a tres años o a una sanción pecuniaria. tres años o a una pena pecuniaria. Si el infractor ha causado un daño importante, puede imponerse una pena privativa de libertad de de uno a cinco años. El delito se persigue de oficio. 2. Toda persona que fabrique, importe, comercialice, anuncie, ofrezca o haga accesibles de otro modo programas que sabe o debe suponer que serán para los fines descritos en el apartado 1 anterior, o proporcione instrucciones para la fabricación de dichos programas será castigado con una pena privativa de libertad no superior a tres años o a una sanción pecuniaria. Si el delincuente actúa con fines comerciales, podrá imponerse una pena privativa de libertad de uno a cinco años.

No entiendo exactamente lo que significa lo anterior -suena a hacking pero podría interpretarse de muchas maneras (incluso borrar tu propio correo podría encajar "borrar o inutilizar"). Exploro el tema de las "leyes" en profundidad en el final de este artículo, así que pasemos a la política de privacidad de KolabNow (https://kolabnow.com/privacy). No dice literalmente nada sobre qué datos almacenan realmente aparte de "Nosotros [...] le garantizamos que no hay acceso de terceros a sus datos." No hay información sobre la duración de la recogida de datos o la posibilidad de eliminar tu cuenta y qué hace realmente. Tal vez podamos encontrar algo en sus TOS (https://kolabnow.com/tos) entonces:

> Sólo guardaremos el mínimo de registros e información de depuración necesaria para asegurar que podemos mejorar el servicio y resolver los problemas que puedan haber ocurrido. 

Mínimo de registros - sí, eso nos dice mucho. Umm... quizás su Marco Legal (https://kolabnow.com/privacy/legal-framework) página tenga algo más concreto?

> Son solicitudes de datos retenidos. Suiza tiene una requisito legal de seis meses de retención de datos por parte del proveedor. Los datos Los datos que se conservan son los metadatos de comunicación, es decir, la información sobre quién comunicación, es decir, información sobre quién se comunicó con quién, desde dónde y cuándo, pero no el contenido real de la comunicación. la comunicación.

Las leyes suizas de privacidad en acción - pero al menos ahora sabemos algo sobre la recopilación de datos de KolabNow. Por cierto, su informe de transparencia ha sido actualizado por última vez en 2017, por lo que podrían haber recibido más solicitudes desde entonces. De hecho, todo el sitio parece estar muerto (incluso su Twitter). En resumen, no veo una razón para usar este - pagado, pide nombre real, almacena 6 meses de metadatos y no revela nada útil en su política de privacidad. ¿Por qué el RiseUp gratuito puede almacenar los metadatos durante sólo un día - a pesar de estar alojado en los supuestamente Estados Unidos, mientras que el servicio con leyes de privacidad suizas súper estrictas no puede hacerlo el servicio con leyes de privacidad súper fuertes de Suiza? La compatibilidad con los clientes de correo es lo único positivo de KolabNow parece. Eso, y supongo que aceptar bitcoins - pero ya que puedes encontrar mejores proveedores que son gratuitos, ¿por qué molestarse?

# Teknik
(https://teknik.io)

Requiere un código de invitación para registrarse. Soporta clientes de correo. Tiene una tiene una buena característica de (supongo) mostrar su clave PGP pública a los demás si si la proporcionas. La política de privacidad no dice mucho, sin embargo:

> Usamos Piwik para rastrear la interacción de los usuarios con el sitio. Nosotros mantenemos alojado en el servidor de forma local, por lo que ningún dato analítico sale del servidor. 

Piwik ha cambiado su nombre por el de Matomo recientemente, así que sólo tienes que leer la sección de ProtonMail para saber más sobre él.

> Fechas - Cuando realices una acción (por ejemplo: registrar una cuenta), se registrará la fecha de la acción.

Supongo que esto va para todas las acciones. Entonces es absolutamente terrible. ¿Qué viene después?

> Correos electrónicos - Cualquier correo electrónico que envíe o reciba con su dirección de correo electrónico de Teknik.io se almacena localmente en el servidor. Estos correos electrónicos no son leídos.

Gracias por no leer mi correo...y eso es todo para la política de privacidad de Teknik. No se menciona si el correo electrónico eliminado se borra realmente, si hay copias de seguridad, qué tipo de datos se comparten y bajo qué condiciones. Nada en absoluto. Bastante sospechoso, en mi opinión. EN MI OPINIÓN, ni siquiera vale la pena molestarse en obtener un código de invitación para esto, cuando existen mejores alternativas que no lo requieren. NOTA: El webmail puede conflicto con la extensión LinkBot si la utiliza, así que desactívela para este sitio web.

# Tutanota
(https://tutanota.com/)

Actualización febrero 2020: Todo está como estaba pero se ha añadido información sobre el bloqueo de anonimizadores por parte de Tutanota. Con eso, la falta de de PGP y soporte de clientes de correo, es absolutamente inútil a pesar de su privacidad.

Este fue mi primer proveedor después de preocuparme por la privacidad y me deshice de Gmail y sus amigos. Eso fue antes de "profundizar" - no hace falta decir que ya no lo recomiendo. No es compatible con los clientes de correo; yo se que es algo que usan los dinosaurios, pero ahora no puedo vivir sin él. El cifrado funciona sólo si compartes previamente una contraseña con tus destinatarios (a menos que ellos también usen Tutanota, entonces es automático) - y eso, por supuesto, viene con sus propios problemas (¿cómo compartir la contraseña de forma segura) que PGP ya ha resuelto. Y como Tutanota sólo es accesible a través de webmail o su mierda de cliente de escritorio de escritorio (que es el mismo que el webmail parece), podrían fácilmente modificar el código para enviarse tu contraseña y poder descifrar tu mierda. Tutanota no soporta el uso de otro tipo de encriptación, como PGP (y de hecho se caga en él en su página web [https://tutanota.com/blog/posts/innovative-encryption/], a pesar de que es el único cifrado real de correo electrónico que puedes tener). A diferencia de lo que ocurre con ProtonMail, no ha habido ninguna auditoría de terceros sobre el cifrado de Tutanota. También hay esta política preocupante en lo que respecta al registro:

> Para mantener el funcionamiento del servidor de correo electrónico, para el diagnóstico de errores y para la prevención de abusos, los registros del servidor de correo se almacenan un máximo de 7 días. Estos registros contienen las direcciones de correo electrónico del remitente y del destinatario y la hora de la conexión, pero no las direcciones IP de los clientes. 

¿No hay direcciones IP? ¡¡¡Genial!!! Excepto si usas una VPN o Tor - "El almacenamiento sólo tiene lugar para las direcciones IP convertidas en anónimas que, por tanto, ya no son datos personales." Es una excusa genial, ¿no? Has ocultado tu IP por lo que no es personal... excepto si Tor o la VPN se vieran comprometidos. Además, más tarde aprenderás cómo sólo los metadatos (que Tutanota almacena) pueden revelar mucho más acerca de usted de lo que nunca imaginó. Todo esto asumiendo que que puedas usar una VPN o Tor, pero Tutanota no ofrece esa opción:

El mensaje anterior aparece tanto con la VPN Snopyta como con Tor Browser - por lo tanto, no hay anonimato con el uber-privado Tutanota. Registrarse es gratis, pero estás limitado a una sola cuenta si no pagas. Si lo haces, prepárate para esto:

> Para la ejecución de los pagos con tarjeta de crédito sus datos serán compartidos con nuestro proveedor de servicios de pago Braintree. Este incluye la transferencia de datos personales a un tercer país (EEUU)

Después dicen que tienen un "acuerdo" con esta empresa de que sólo utilizarán sus datos para la tramitación del pago - pero el valor de estos "acuerdos" es dudoso, en mi opinión. Su pago datos de pago se almacenan también durante quién sabe cuánto tiempo:

> Los datos relacionados con el pedido y las direcciones asociadas al pedido se almacenan con respecto a los períodos de retención del derecho fiscal, contractual y comercial períodos de retención y se borran al final de esos períodos.

Resumen: bloquea los anonimizadores, no admite cliente de correo ni PGP soporte, almacena tu IP anonimizada y metadatos, almacenamiento indefinido (?) de datos de pago. Otro gigante de la privacidad que muerde el polvo.

# Autistici
(https://www.autistici.org/)

Un servicio para "activistas" que comienza con unas bonitas citas:

> Creemos que este mundo está lejos de ser el mejor mundo posible. Respondemos a esto proporcionando a los activistas, grupos y colectivos plataformas para una comunicación más libre y herramientas digitales para la autodefensa de la privacidad.

> Nuestros principios son bastante sencillos: el mundo no debe no debería funcionar con dinero, sino que debería estar arraigado en la solidaridad, la comunidad la ayuda mutua, la igualdad de derechos y libertades y la justicia social.

> Creemos que la comunicación debe ser libre -y gratuita- y, por tanto, universalmente accesible.

Pero luego se va por las ramas con una política extremadamente restrictiva (https://www.inventati.org/who/policy.en) requerida para utilizarla - prohibiendo, en particular:

> La discriminación por razón de género, raza, religión u orientación sexual

Lo cual está muy bien, salvo que históricamente se ha utilizado para, por ejemplo, prohibir el cosplay (https://www.sankakucomplex.com/2019/04/16/twitch-streamer-banned-for-blackface-cosplay/), memes (https://archive.vn/rKi7U), o gestos de manos (https://nekomimimo.de/archive/rambling/2019.04.06-white-power-symbol.html). Vayamos más allá:

> Utilizar los Servicios con el fin de promocionar institucionalmente partidos políticos o cualquier otra organización que ya cuenta con los recursos financieros para difundir ampliamente sus propios contenidos e ideas

Hablar a favor de un político es un pecado según Autistici.

> Utilizar los Servicios para cualquier fin militar, incluyendo información o material de formación sobre armas de fuego y técnicas de combate técnicas de combate, ciberguerra, desarrollo y fabricación de armas.

Olvídate también de los contenidos relacionados con la defensa personal. Y lo más divertido:

> Utilizar los servicios para actividades relacionadas con la criptomoneda;


¿Qué tiene de malo la criptodivisa? Se podría pensar que se considera una alternativa (relativamente) anónima e incontrolada a las cuentas bancarias. De todas formas, no sabemos a qué se refieren exactamente con "promover partidos políticos", por ejemplo, por lo que se desconoce la gravedad de lo aceptado por el ToS. De cualquier manera, si detectan que violas las políticas, estás fuera:

> Si vemos que estás violando nuestros principios públicamente mientras usas nuestros servicios, no dudaremos en eliminar tu cuenta sin previo aviso.

Así que más vale que les des la razón o que te vuelvas bueno mintiendo/ocultando. Puedes leer más sobre las creencias de Autistici en Un breve cuento sobre por qué somos quienes somos y por qué hacemos lo que hacemos (https://www.autistici.org/who/telltale) Pasemos ahora a la recién redactada política de privacidad (https://www.inventati.org/who/privacy-policy.en) (de la que el Autistici ha desaparecido durante las dos últimas décadas). Empezando por lo malo:

> Para detectar el abuso de nuestros servicios de correo electrónico, mantenemos seguimiento de los metadatos del correo electrónico (sólo el remitente y el destinatario del mensaje) para cada mensaje que pasa por nuestros sistemas. Estos registros se conservan durante 15 días.

Los metadatos son extremadamente reveladores - lo suficiente como para matar a gente (archivo) por ello. Y por qué es necesario almacenarlo durante 15 días cuando otros servicios de privacidad como Disroot se las arreglan con sólo 24 horas? Ahora bien, ya que este es el informe de correo electrónico, sólo cubriré brevemente su política para otros servicios que prestan:

> Cuando interactúas con nuestra plataforma o Servicios, tanto si tiene una cuenta o no, el intercambio automático de información entre su cliente y nuestros servidores nos proporcionará algunos datos no personales, incluyendo, sin limitación, datos relativos al navegador que está utilizando (tipo de navegador, si es un dispositivo móvil/de escritorio móvil/de escritorio, versión del sistema operativo, idioma preferido), la fecha y la hora de su visita y el sitio web de referencia, pero no su dirección IP.

Ya he escrito antes sobre los peligros de los "datos anónimos", así que sólo responderé brevemente. Todos los datos que recoge Autistici son ciertamente vulnerables a la huella digital del navegador, y no sabemos en qué su supuesta anonimización. "Los sitios web de referencia" podrían también utilizarse para crear un perfil de los intereses de alguien para posiblemente conectarlo con su identidad en la vida real. Qué tal lo bueno?

Autistici controla sus servidores y utiliza la encriptación del disco. Cuando borras tu cuenta, ésta desaparece por completo en 3 días. No hay terceros de datos de terceros. La información personal no es necesaria para registrarse, pero usted pero tienes que rellenar una solicitud - que ellos comprobarán si está de acuerdo con sus creencias, como por ejemplo:

> Apoyamos a individuos, colectivos, comunidades, grupos y etcétera cuyas actividades políticas y sociales encajan en esta cosmovisión y que comparten con nosotros algunos principios fundamentales: antifascismo, antirracismo, antisexismo, antimilitarismo. Y además, hay que compartir nuestra actitud básica hacia el dinero y el mundo capitalista: un profundo sentimiento de malestar e inquietud.

Se lo toman realmente en serio, tanto que me pidieron dos veces que estuviera realmente de acuerdo con su ideología antes de dejarme pasar. Como se ha dicho antes, Autistici borrará tu cuenta si te encuentra haciendo algo contrario. En otras partes de su sitio (https://www.autistici.org/who/manifesto), afirman que no guardan ningún tipo de registro - pero supongo que eso ha sido superado por la reciente política de privacidad.

Autistici tiene un dominio de la cebolla que no parece funcionar muy bien. Cuando les escribí un correo electrónico notificándoles el fallo de su cebolla, lo han ignorado. Recientemente, el El servicio de correo electrónico de Autistici también ha estado descontento durante varios meses seguidos. Claro, lo entiendo: se financian enteramente con donaciones, lo que sea. Sin embargo, seguro que podríais haber conseguido que alguien arreglara las cosas en un plazo mucho más corto tiempo. En definitiva, para una cuenta principal, yo no recomiendo Autistici aunque por supuesto sigue siendo superior a los grandes violadores de la privacidad. privacidad. Pero con servicios como este, siempre existe el peligro de que alguien te delate por violar su ideología, o que ellos mismos lo descubran de alguna manera. Así que, a menos que seas un activista SJW, tendrás que preocuparte por la autocensura. Sin embargo, con lo incompetente que parece ser Autistici (estando caído durante medio año, y teniendo información incorrecta en su política de privacidad antes de que yo les informara, a pesar de haber sido supuestamente redactada con la ayuda de varios abogados), podría no ser un problema real. Recuerde, también, que incluso los servicios no centrados en la ideología tienen restrictivos, sólo que tal vez en otros aspectos. Así que es un caso de elige tu veneno la mayor parte del tiempo. Autistici ha existido desde 2001 y tiene una misión, por lo que seguramente se mantendrá, al menos.

# StartMail
(https://www.startmail.com/en/)

De pago (5 dólares / mes, 5 veces más que los mejores Posteo y Elude) con una prueba gratuita de 30 días. Curiosamente, el webmail te dice que no puede enviar correo - pero sí funciona con el cliente. Se requiere JavaScript para iniciar sesión iniciar sesión. Se permite el uso de Tor, pero no proporciona ningún dominio onion. La versión de pago tiene direcciones de correo electrónico desechables (a'la airmail) y cifrado OpenPGP. Pero como siempre, lo más importante es su política de recogida de datos. En realmente siguen su "Privacidad. No es sólo nuestra política. Es nuestra misión." ¿Eslogan? Vamos a averiguarlo. Primero, su página web:

Los datos que se recogen y procesan en su página web incluyen: tu dirección IP, tipo y versión de navegador y sistema operativo, configuración de configuración del idioma, país, fecha y hora, origen de su visita, así como así como los enlaces que has pulsado y las páginas visitadas de su sitio web. Hmm, esto último suena sospechoso. Me pregunto cómo lo justifican. " para ayudarnos a hacernos una idea de cuáles de nuestras páginas parecen ser eficaces para informar a nuestros visitantes". ¿Y el origen de su visita? "para evaluar el éxito de nuestros esfuerzos de optimización de motores de búsqueda y de difusión de información". ¿Y el país? "para saber en qué países y en qué momentos nuestros esfuerzos de marketing parecen ser efectivos." Suena a buen seguimiento para mí. Afirman que estos datos son luego "eliminados o anonimizados", pero lo que sea. No sé tú, pero yo no quiero ser parte de su experimentos de "marketing" y "difusión de información" - anonimizados o no. ¿Qué tal el servicio de correo?

El gran problema: la política de privacidad de StartMail (https://www.startmail.com/en/privacy/) es extremadamente larga, y sin embargo se las arregla para no decir lo que realmente almacena o la duración. Lo único que se nos dice es lo que ocurre cuando se borran los datos:

> Cuando se elimina un correo electrónico, se borra inmediatamente de nuestros servidores de producción, a diferencia de lo que ocurre con muchos otros proveedores de proveedores de correo web. Sólo en las copias de seguridad externas (que están totalmente encriptadas, por supuesto) permanecerá una copia durante el periodo máximo de conservación de tres años. por supuesto) una copia permanecerá durante el período máximo de retención de tres días. Su cuenta se conservará mientras nuestro contrato siga vigente. vigente. Cuando un Acuerdo se resuelva por completo, todos los datos contenidos en la Cuenta, incluidos todos los correos electrónicos, se eliminarán de forma permanente.

Así como su política de atención a las solicitudes:

> No atenderemos las solicitudes de otras autoridades que no sean que no sean las autoridades holandesas. Si recibimos una solicitud de cualquier gobierno gobierno extranjero, nos negaremos a cumplir y en su lugar remitiremos al solicitud a las autoridades neerlandesas para que se preste asistencia mutua. asistencia mutua.

> StartMail nunca cooperará con ningún programa de programas de vigilancia. En virtud de las sólidas leyes actuales que protegen el derecho a la privacidad en Europa, los gobiernos europeos no pueden obligar legalmente a proveedores de servicios como StartMail a implementar un programa de espionaje general a sus usuarios. Si esto cambiara, utilizaremos todos los métodos a nuestro alcance para resistirnos.

> No accederemos a ninguna solicitud de terceros privados privados para proporcionar información sobre nuestros usuarios, a menos que recibamos una orden judicial holandesa válida a tal efecto.

Aunque está bien que no compartan tus cosas con los fisgones sin una orden judicial válida, además de tener una política de borrado sana - no nos no nos dejemos engañar. No se dice ni una palabra sobre el almacenamiento de su contenido de correo electrónico y los metadatos, que es la parte más importante parte de una política de privacidad - y sin embargo no existe aquí. Hay una cosa más que quizás quieras saber. Como el servicio es de pago, y no aceptan bitcoins, no serás anónimo. Y guardan la información de los pagos durante 7 años - "Guardamos las facturas durante 7 años, o el periodo que pueda prescribir la legislación fiscal aplicable." Y, según la Wikipedia, las facturas contienen datos personales, como tu nombre. A pesar de mucho postureo, no puedo recomendar StartMail mientras nos mientras nos mantengan en la oscuridad en cuanto a la información más importante. Además, recuerde que hace algún tiempo, StartPage fue comprado por una gran corporación recolectora de datos (https://web.archive.org/web/20200202053815/http://techrights.org/2019/10/16/startpage-is-surveillance/)- y aunque ellos alegan que StartMail es una entidad separada, sería ingenuo pensar que esas cosas no se derramarán.

# Dismail
(https://dismail.de/)

Requiere enviarles un mensaje XMPP antes de obtener acceso a su cuenta de correo electrónico, pero la activación parece automática. El registro no requiere información personal y es posible a través de TOR (no hay dominios dominios). Soporta clientes de correo. La política de privacidad en inglés (https://dismail.de/privacy.html) ha sido sustituida por la política en alemán (https://dismail.de/datenschutz.html) que un miembro de nuestro chat me ha traducido amablemente. Todos sus correos contenido, archivos adjuntos, asuntos, remitentes, destinatarios, tamaño de los mensajes, la última fecha de acceso y las direcciones IP se almacenan durante 7 días como mínimo. Esto es mucho peor que lo que tenía la versión anterior y hace que Dismail sea un infractor. El ToS (https://dismail.de/tos.html) también es bastante restrictivo:

> El envío de mensajes con el objetivo de dañar o destruir, violar la intimidad, infringir la propiedad intelectual, para emitir declaraciones ofensivas, fraudulentas, obscenas, racistas, xenófobas discriminatorias, o cualquier otra forma de contenido prohibido por la ley.

En otras palabras, más o menos la lista de temas de victimización favoritos de SJW. Además, nada de porno, nada de violaciones de derechos de autor, nada de "abusar de otros" y nada de "software para eludir la protección anticopia". lo que podría incluir incluso a los clientes de torrents según una definición imprecisa. Al parecer, sólo un tipo dirige Dismail, por lo que podría caer si se se aburre. No es que quieras usarlo cuando hay alternativas mucho mejores alternativas. Aunque - en un apuro - permite el registro de TOR sin datos personales o recaptcha, así como soporte de cliente de correo, por lo que es decente, por lo menos.

# Migadu
(https://www.migadu.com/)

Un amigo me ha dado a conocer este y lo ha calificado como su favorito, pero no me gusta por varias razones:

- Es de pago - eso por sí solo no lo mata, pero lo gratuito debería ser preferible
- Hay que pagar todo el año (19 dólares) por adelantado si se quiere el plan Micro, que es el más barato. Los otros planes son extremadamente caros y yo diría que no vale la pena para un simple proveedor de correo electrónico.
- Tienes que contactar con ellos personalmente si quieres pagar con Bitcoin, pero al menos admiten la opción
- No proporcionan un dominio, por lo que debes comprar el tuyo propio que supone un coste adicional
- El plan Micro permite sólo 20 mensajes salientes al día, lo cual es algo bajo. Para ser honesto, nunca llego a ello con mi propio uso del correo electrónico, pero dependiendo de lo que hagas, 20 puede ser fácilmente demasiado poco.
- Exigen que les des tu nombre real para registrarte
- Exigen una cuenta de correo electrónico existente; las temporales están prohibidas
- Guardan tus mensajes salientes hasta 30 días
- Almacenan sus direcciones IP, pero afirman que están "anonimizadas"; sin embargo, no se le informa de cómo se logra esto.
- Los datos del inventario se almacenan hasta dos años, y posiblemente más si se aplican algunas cosas legales no especificadas.

Así que Migadu es un proveedor de pago que necesita un dominio y cuya privacidad no es tan grande. Al menos permiten pagos con Bitcoin y admiten clientes de correo. En general, no me impresiona y preferiría ir por Disroot, RiseUp o Posteo / CounterMail si el dinero no es un problema.

# Cock.li
(https://cock.li/)

Suena bien a primera vista - soporta clientes de correo (aunque Claws Mail no pudo detectar automáticamente la configuración y requirió una configuración manual), no pide información personal, "permite el registro y el uso usando Tor y otros servicios de privacidad," y "está dirigido por "algún tío", no por una empresa". Entonces, ¿es este el servicio a utilizar? Para ello, habrá que ver qué datos recoge, como siempre:

> Los registros IMAP y SMTP incluyen: Cuando se envía un correo electrónico, el nombre de usuario, la dirección de correo electrónico de destino y información sobre la conexión (como la dirección IP, información sobre la cuota) Cuando se conecta a IMAP, la dirección IP y el nombre de usuario (si lo hay) con los que se está con el que se ha iniciado la sesión, y si el inicio de sesión ha sido satisfactorio

Estos, según la política de privacidad de cock.li (https://cock.li/privacy), se almacenan entre 48 y 72 horas. Cuando visitas su página web, cock.li almacena esta información: "Los registros de acceso HTTP que contienen tu dirección IP, el agente de usuario y el tipo/ubicación de tus peticiones". Dicen que no está relacionado con tu cuenta, pero sería trivial conectarlos.

La política de privacidad de Cock.li es un poco confusa en ese punto, pero parece que puedes borrar todos tus datos manualmente -aparte de la la información de registro- y desaparecerán inmediatamente. La eliminación de los últimos requiere borrar tu cuenta, pero incluso así, esos datos se conservarán durante 30 días.

Hay que felicitar a Cock.li por su honestidad. La política de privacidad y los ToS son cortas y directas al grano. Admite que puede leer tu correo y que coopera plenamente con las fuerzas del orden; la transparencia y los transparencia y los informes de donaciones. Sin embargo, hay otra cosa que que te interese saber...
(https://arstechnica.com/tech-policy/2015/12/cock-li-e-mail-server-seized-by-german-authorities-admin-announces/).

> "Eso significa que las claves SSL y las claves privadas y el contenido completo del correo de todos 64.500 de mis usuarios, así como las contraseñas con hash, el tiempo de registro y los últimos siete días de registros fueron confiscados y ahora están en manos de las autoridades alemanas, 

Sí... quiero decir, ¿podría haber ido peor? Las víctimas de esta violación probablemente estaban deseando que nunca les importara esto de la "privacidad" y seguir usando Gmail, jaja. Además, olvídate de tener un nombre de dominio nombre de dominio con este tipo - son todos chistes de mierda sobre pollas, violaciones memes como blazeit y otros que preferiría no mostrar a la mayoría de la gente. Otro tema realmente significativo es la frecuencia con la que se bloquea el dominio cock.li en varios sitios. Teniendo esto en cuenta, ya no puedo decir que sea una buena opción en absoluto. Al menos tiene un dominio cebolla en http://mail.cockmailwwfvrtqj.onion/; sin embargo, esto no impide que lean tu correo o que almacenen los metadatos.

# Paranoid
(https://paranoid.email/)

Se autoproclama como una empresa extremadamente basada en la privacidad, con citas como Nuestra misión es devolver la sensación de privacidad a las personas. y Devolver la privacidad a la comunicación diaria por correo electrónico y hacerla lo más popular posible. Sin embargo, el servicio no tiene política de privacidad, por lo que no se puede saber qué es lo que realmente almacenan. Dicen que son "PROBABLEMENTE LA ÚNICA CAJA DE CORREO ENCRITADA CON OPENPGP", pero eso no es realmente cierto - incluso los temidos ProtonMail y MailFence tienen eso (aunque la implementación es peor). Soporta clientes de correo y tiene un dominio de cebolla. Aquí está la gran cosa sin embargo - Paranoid requiere una invitación, que intenté conseguir hace unos días. Primero, me dijo que mi cock.li es "desechable" y no será aceptado. Entonces me registré con una cuenta real de cuenta disroot y -aunque el mensaje sobre los servicios desechables no apareció- seguí sin recibir respuesta en 5 días más o menos. Uno de mis contactos dice que sus amigos enviaron solicitudes hace meses que aún no son aceptadas. Así, independientemente de su privacidad, Paranoid parece ser bastante inútil.

Actualización febrero 2020: Lo anterior es lo que escribí hace muy tiempo atrás. Luego, el servicio se cayó al poco tiempo por lo que asumí que está muerto. Ahora ha vuelto y uno de mis contactos estaba impresionado con él, así que he investigue de nuevo. Todo lo que escribí arriba sigue siendo cierto, excepto que también intenté registrarme con mi alias de correo electrónico de RiseUp, y me rechazaron rechazado por usar una "dirección desechable". Sin embargo, el contacto logró pasar el proceso así que hicimos algunas pruebas. El paranoico afirma que:

> Si un remitente no puede cifrar el eMail que se enviará a su 
casilla de @PARANOID - lo cifraremos por usted usando su clave pública - la única clave que almacenamos. 

Esto es cierto. Cualquier correo electrónico enviado a una dirección de Paranoid será encriptado por ellos con tu clave pública (que tendrás que generar y subir). Sin embargo, ya que el cifrado es realizado por Paranoid - ellos (al igual que el servidor del remitente) como el servidor del remitente) pueden ver el contenido; y como no tienen política de privacidad, no sabemos qué hacen con eso. Veamos otra cita:

> @2048.email & @4096.email los alias pueden recibir eMails encriptados eMails encriptados. Comprobaremos para usted, si un eMail, que ha sido enviado a a usted, está encriptado. 

A menos que lo hayamos entendido mal - lo anterior es falso. Yo he enviado un E-mail sin encriptar a esas dos direcciones, y mi amigo los ha recibido, donde según la reclamación - deberían haber sido "rebotados" de vuelta a a mí. Sin embargo, recibí un mensaje que implicaba que los correos electrónicos no codificados no fueron enviados:

> Estimado propietario de la dirección de correo electrónico gatooscuro@protonmail.com, recientemente ha enviado un correo electrónico a la dirección email_redacted@4096.email que se encuentra en el dominio 4096.email proporcionado por el servicio Paranoid.EMAIL. Este usuario no acepta correos electrónicos sin cifrar. Por favor, cifre el correo electrónico utilizando PGP y envíelo de nuevo. Si no conoces la clave puedes pedirla usando este email email_redacted@paranoid.email Para evitar volver a ver este mensaje de "rebote" en el futuro, puede empezar a enviar mensajes de correo electrónico cifrados con OpenPGP al destinatario (si ya está familiarizado con OpenPGP/GnuPG) o, alternativamente, puede convertirse en un probador de nuestro nuevo servicio de correo electrónico cifrado...

Por supuesto, incluso si no los recibiera, todavía habrían viajado sin cifrar desde mi máquina, a través de mi proveedor, terminando en Paranoid (con muchos otros puntos intermedios). Por lo tanto, el no ser capaz de leerlos no proporcionaría ninguna seguridad. ¿Qué logra el "rebote" ¿entonces? Posiblemente (en algún mundo alternativo...) conseguir que el otro tipo para cifrar usando PGP - sin embargo, para tener el extremo real a cifrado de extremo a extremo, esa persona tendría que generar también sus propias claves, lo cual - para la gran mayoría de la gente- es insuperable. También hay que recordar que lo anterior se aplica sólo a los alias 4096 y 2048 - se puede seguir dando el normal "paranoid.email" para evitar el rebote.

Lo anterior, sin embargo, sigue siendo la mejor implementación de PGP que puedes tener sin PGP propiamente dicho. Por lo menos no están haciendo el descifrado en el navegador, o peor - almacenar su clave privada como ProtonMail. De hecho, están específicamente advirtiendo contra esos enfoques. No sólo hay ninguna seguridad u otras desventajas en lo que hace Paranoid, sino que incluso existen algunas ventajas. Los mensajes que reciben estarán encriptados durante al menos una parte del trayecto sin que la otra persona (de nuevo, debes subir tu clave PGP pública pública), y puede que "conviertas" a algunas personas a la encriptación real de extremo a extremo en PGP (a costa de molestar a algunos otros).

A pesar de todo lo anterior, Paranoid es realmente un buen servicio de correo electrónico. Es una mierda que consideren tantas direcciones de correo electrónico reales como "desechables", pero ¿qué se puede hacer? Si superas eso, puedes registrarte de forma gratuita a través de anonimizadores y sin proporcionar ningún dato personal - lo que ya está muy por encima de lo que hacen muchos otros. También se dan cuenta de los peligros del webmail y ni siquiera lo proporcionan - por lo tanto, hay que utilizarlos a través de un cliente de correo. Un dominio onion también está disponible. Los mayores problemas (aparte de los de de registrarse) es que no tienen una política de privacidad y que hacen algunas declaraciones extrañas  en su página principal - sin embargo, el idioma es claramente una barrera aquí. En resumen, no puedo recomendar éste con los problemas de registro, así como no tener una política de privacidad - pero es mejor que la mayoría de los otros supuestamente privados que se enumeran aquí.

**NOTA** Este artículo será dividido en varias partes por problemas con WriteFreenly y su capacidad para aceptar artículos extensos, asi que les dejó los enlaces de las partes (disculpas por no poder unificar todo en un sólo lugar):
– 1 Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-1-parte).
– 2 Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-2-parte)
– 3 y Última Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-3-y-ultima-parte)
- 4 Parte, si la última: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-4-parte-seguro-la-ultima)
