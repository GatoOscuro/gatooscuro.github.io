---
layout: post
---

# Proveedores de correo electrónico: ¿cuál elegir? – 3 

# Cotse
(https://cotse.net)

Un lector me ha puesto al tanto de este, y me parece especialmente bueno así que fustigo esta reseña inmediatamente. **Actualización:** lo siento, parece que se me ha escapado una información importante: el servicio es peor de lo que pensaba. Sigue leyendo:

En primer lugar, su página web es refrescantemente sencilla y fácil de navegar. Compárese con algo como Proton o Runbox con sus enormes fuentes, espacios intermedios aleatorios y eslóganes engañosos. O Criptext, que ni siquiera muestra nada sin activar JavaScript (el sitio de Cotse no tiene scripts).

Pero pasemos a lo que realmente importa, que es el funcionamiento interno del servicio. Cotse es un proveedor de pago, y hay que pagar medio año por completo, lo que viene a ser unos 4 USD al mes (similar a CounterMail). No aceptan bitcoin - pero hacen efectivo por correo (https://www.cotse.net/subscribe.html):

> También aceptamos cheques, giros postales y dinero en efectivo enviado por correo ordinario

Esta es la opción preferida desde el punto de vista del anonimato. La política de privacidad (https://cotse.net/privacypolicy.html) dice amablemente a los anunciantes que se jodan, y también admite que lucharán contra cualquier intento de recibir información. Pero, ¿qué es lo que realmente registran?

Y aquí es donde empiezan a aparecer las grietas de Cotse. Su página de registro (https://cotse.net/logging.html) comienza con información sobre cómo funciona el registro y por qué un servicio de correo electrónico no puede funcionar sin él. Cotse incluso muestra amablemente el aspecto de los registros SMTP reales:

> 18 de noviembre 13:25:23 www mta[12345]: AUTH=servidor, relay=dominio.com [127.0.0.1] (puede ser falsificado), authid=cuenta, mech= Nov 18 13:25:23 www mta[12345]: XXXmpe12345: from=, size=405, class=0, nrcpts=1, msgid=, proto=ESMTP, daemon=TLSMTA, relay=domain.com [127.0.0.1] (may be forged) 18 de noviembre 13:25:23 www mta[12346]: XXXmpe12345: to=, delay=00:00:00, xdelay=00:00:00, mailer=esmtp, pri=12345, relay=máquinareceptora.dominio.com. [receivingmachineIP], dsn=2.0.0, stat=Sent (iAIIPOAb089975 Mensaje aceptado para la entrega)

Estos parecen indicar que la dirección IP del cliente no está almacenada - es decir, está configurada en 127.0.0.1 (el localhost) y no puede identificarla. Desgraciadamente, en otra página (https://cotse.net/legal-process.html), admiten que eso es erróneo:

> - Direcciones IP de inicio de sesión y marcas de tiempo asociadas. (Sólo disponible desde los últimos cinco días.)

Esta es la parte que he pasado por alto durante la revisión anterior (¡un recordatorio de siempre indagar en profundidad!), y en cierto modo condena a Cotse. Es una lástima, porque realmente pensé que podría felicitarlos por su honestidad, pero ahora no puedo en buena conciencia (son mejores que la mayoría en este apartado, sin embargo). El servicio sigue siendo bueno, pero ahora no se puede comparar con los que no guardan su IP. Cotse no guarda el contenido de tus mensajes:

> Ninguno de nuestros logs registra el datastream, como en contenido del correo electrónico

>Tampoco hay copias de seguridad: Las copias de seguridad automáticas pueden comprometer tu privacidad porque hay una copia de seguridad que embargar de algo que has borrado. Por eso no hacemos copias de seguridad de ningún dato del usuario, ni del correo electrónico ni del espacio web.

Que en realidad es la única opción que respeta la privacidad; gracias a esto, te aseguras que después de cinco días, no queda ningún registro. Aún así, cinco días es un poco largo comparado con otros servicios (por ejemplo Disroot) que pueden arreglárselas con 24 horas de alguna manera; pero sigue siendo mejor que lo que casi todo el mundo está haciendo. Los clientes de correo electrónico son, por supuesto, compatibles (si no lo fueran, ni siquiera me molestaría en revisar el servicio) - y puedes descargar los correos electrónicos usando POP3, que también los eliminará del servidor. Hay muchos dominios disponibles, incluyendo el uso de los propios. Hay muchas opciones de filtrado de spam (https://cotse.net/services-email.html), pero no estás obligado a usar ninguna de ellas, así que no hay que preocuparse de que los correos electrónicos sean rechazados al azar (como lo que hace a veces Disroot). Cotse también tiene una función de alias similar a la de RiseUp:

> Te damos direcciones ilimitadas en veinte dominios más direcciones ilimitadas en cualquiera de tus propios dominios registrados a medida. Esto es para que puedas dar a cada lugar que solicite una dirección de correo electrónico su propia dirección personalizada.

Sin embargo, no funciona tan bien, porque revela tu cuenta real (https://cotse.net/email-domains.html) en el alias:

> Para gran parte de tus necesidades de correo electrónico, puedes crear alias ilimitados de la forma (alias)@(tunombre).cotse.net, sin los paréntesis. 

Así, si alguien visita el sitio de Cotse y aprende cómo funciona la función de alias, puede averiguar que su dirección de correo electrónico principal es "yourname@cotse.net". Aun así, la función debería funcionar bien contra los bots. No hay Biblia de cosas prohibidas (https://cotse.net/restrictions.html):

> Tenemos tolerancia cero con el fraude, el spam, el acoso, el robo, las amenazas terroristas, el cracking o el ataque DoS a otros servidores, o la pornografía infantil. 

Esto es menos de lo que tiene cualquier otro proveedor. En fin, resumiendo: Cotse es un servicio bastante caro y de buena calidad. Los principales defectos son que almacena tu dirección IP durante cinco días y que no acepta pagos con Bitcoin. Cotse existe desde 1999, así que hay poco peligro de que caiga. Es una buena opción si no te fías de los comunistas - ¡sólo recuerda usar siempre anonimizadores cuando lo utilices!

# CounterMail
(https://countermail.com)

Mi antigua reseña de este servicio fue algo deslucida, así que permítanme intentarlo de nuevo. En primer lugar, CounterMail ahora requiere un código de invitación para registrarse - pero a diferencia de RiseUp, también es un servicio de pago. El precio es de 29 dólares por seis meses - y eso es lo mínimo que se puede pagar; afortunadamente se acepta Bitcoin. Hay que habilitar JavaScript para el registro; no hay captchas ni bloqueo de anonimizadores. Hay un nivel gratuito que es bastante inútil, ya que ni siquiera es compatible con los clientes de correo y tiene un montón de restricciones en términos de destinatarios de correo electrónico.

Al registrarse, CounterMail generará un par de claves PGP, que se utilizarán para encriptar todo el correo electrónico entrante y saliente si es posible. Si su destinatario es otro usuario de CounterMail, los mensajes se cifrarán automáticamente durante todo el trayecto. De lo contrario, serán enviados en claro desde su destinatario hasta que lleguen a los servidores de CounterMail, y luego encriptados de vuelta a usted. El problema con todo esto es, por supuesto, que CounterMail almacena tu clave privada en su servidor. Ellos alegan que sólo se almacena encriptada con tu contraseña, pero podrían robarla fácilmente ya que debes escribirla para iniciar sesión cada vez. Aun así, incluso ese tipo de encriptación es mejor que el texto plano, ya que al menos los intermediarios no pueden acceder a tus mensajes, incluso si no confías en CounterMail. Pero nada se compara con el PGP que usted maneja localmente, siempre y cuando su destinatario sea capaz de hacerlo también.

Política de privacidad (https://countermail.com/?p=privacy) dice que las direcciones IP no se almacenan, pero te mantiene en la oscuridad con respecto a cualquier otra información. Los clientes de correo están soportados en el nivel de pago (que no me molesté en pagar, y por lo tanto no pude probar). Por 15$ adicionales, tienes la opción de usar tu propio dominio. Hay una característica de alias que realmente funciona correctamente , no revela su cuenta real en el alias - algo que sólo RiseUp ha logrado hacer de otra manera. Hay un montón de funciones exclusivas de webmail que no me importan, porque bueno... son sólo de webmail. Los ToS (https://countermail.com/?p=terms) son bastante laxos, sólo prohíben cosas que son ilegales en Suecia, así como el spam. Para ser honesto, tengo problemas para calificar este servicio. Parece que se preocupan mucho por la privacidad y la seguridad, pero por alguna razón no te dicen exactamente qué almacenan y durante cuánto tiempo. El precio también es bastante alto - más de cuatro veces la cantidad de Posteo, por ejemplo. En general, CounterMail está bastante bien diría yo, pero es una especie de caja negra en cuanto a los datos que se recogen. Prefiero algo más transparente, como el ya mencionado Posteo, o RiseUp, aunque carezcan de algunas de las características de CounterMail (como los servidores sin disco).

# Posteo

Su política de privacidad (https://posteo.de/en/site/privacy_policy) comienza de forma muy prometedora:

> no guardamos estrictamente ninguna dirección IP que pueda ser rastreada hasta los clientes. [...] Esto ha sido confirmado de forma independiente en un informe de auditoría realizado por el Comisionado Federal de Protección de Datos de Alemania.

La auditoría está en alemán por lo que no puedo confirmar lo que realmente se comprobó, sin embargo está bien que se hayan molestado en hacerlo.

> Tampoco recogemos ni guardamos tu dirección IP si utilizas un cliente externo para recuperar sus correos electrónicos a través de IMAP o POP3 o para transmitir mensajes vía SMTP para ser entregados por nosotros.

Entonces, si utilizas un cliente de correo, tu IP no se almacena en absoluto. Y qué pasa con el contenido del correo? Posteo no parece decir directamente qué se almacena y durante cuánto tiempo, además de que se puede borrar:

> Cuando borras los datos de contenido, se borran inmediatamente. Si los datos han sido respaldados en una de nuestras copias de seguridad diarias, se permanecerán allí durante 7 días más hasta que se eliminen por completo.

Así que puedes borrar tu correo en cualquier momento, y desaparece salvo la copia de seguridad. No está mal; también puedes encriptar la copia de seguridad:

> Además, ofrecemos la posibilidad de cifrar todos los correos electrónicos, notas, contactos y entradas del calendario que se guardan en Posteo individualmente con la contraseña de la cuenta (cifrado AES).

Posteo es un servicio de pago (1 € al mes), aunque alega que los datos de pago son anónimos (es decir, no están conectados a su cuenta); puede leer más sobre esto aquí (https://posteo.de/en/site/payment). Sin embargo, no está claro lo que realmente se guarda - por un lado, dicen que "A pesar del cambio en la ley, todavía no guardamos ninguna información de usuario de nuestros clientes"; y por otro - "Para los pagos de PayPal: La hora y la fecha de un pago, el importe, y el nombre del pagador". Los datos se almacenan durante 10 años; dicen que no están conectados a la cuenta del usuario, pero tendrás que confiar en su palabra. En efectivo El pago por carta también está disponible. Independientemente de las afirmaciones de Posteo, usted de los datos personales a alguien, ya sea PayPal, su banco o la oficina de correos, su banco, o la oficina de correos - y esta es mi mayor queja con el servicio. Pónganse al día y acepten Bitcoin de una vez... De todos modos, ya que ya que he hecho esto para Disroot, RiseUp y Autistici, vamos a ver qué hace  el ToS de Posteo:

> 5.3 El cliente no utilizará el servicio de correo electrónico para enviar publicidad con fines comerciales por correo electrónico o para enviar correos electrónicos  a una multitud de destinatarios.

Así que no puede hacer publicidad de su servicio comercial, a pesar de que el propio Posteo sea de pago y no siga una política anticapitalista. Raro. Usted tampoco se puede "incumplir las leyes alemanas" y "incumplir la normativa en materia de protección de menores". Bastante suave, supongo.

Desde junio de 2019, las leyes alemanas han cambiado para que la vigilancia selectiva por parte del gobierno sea ahora ilegal (¿quizás deberíamos hablar de "leyes alemanas de privacidad" en lugar de "leyes suizas de privacidad"?):

> En la actualidad, ya no existe ninguna base legal para TKÜ (vigilancia de una cuenta durante un período de tiempo determinado); Posteo ya no está por lo tanto, ya no puede ni va a aplicar este tipo de órdenes.

No hay mierda de seguimiento en su sitio web, a diferencia de StartMail. No hay almacenamiento de IP, correo electrónico eliminado inmediatamente después de su acción y sólo se almacena en una copia de seguridad encriptada con tu contraseña. No se recoge información personal nunca; los datos de pago (supuestamente) anonimizados también, por lo que incluso cuando el gobierno llame a la puerta, no conseguirán nada. Hay dos alias disponibles al  registrarse, y se pueden comprar más. No se pueden utilizar dominios personalizados con Posteo y tampoco tiene un dominio onion disponible. Posteo es ¡alimentado por fuentes de energía renovable! Así que usted está protegiendo el medio ambiente con este proveedor, también. Teniendo todo en cuenta, este servicio es uno de los mejores que hay, aunque tiene algunos defectos.

# Disroot
(https://disroot.org/es)

Empieza con unas bonitas citas. De la primera página:

> Disroot es una plataforma que proporciona servicios en línea basados en principios de libertad, privacidad, federación y descentralización. **Sin seguimiento, sin anuncios, sin perfiles, sin minería de datos!**

La Página de información (https://disroot.org/en/about):

> En las últimas décadas la información se ha vuelto muy valiosa y cada vez más fácil de recopilar y procesar. Estamos acostumbrados a ser analizados, a aceptar ciegamente términos y condiciones por "nuestro propio nuestro propio bien", confiando en que las autoridades y las empresas multimillonarias para proteger nuestros intereses, mientras somos el producto de sus "granjas de personas". "granjas de personas". 

> Muchas redes utilizan tus datos para ganar dinero analizando tus interacciones y utilizando esta información para anunciarte cosas. Disroot no utiliza tus datos para ningún otro fin que no sea el de permitirte conectarse y utilizar el servicio.

> Al ejecutar Disroot esperamos cambiar la forma en que la gente suele interactuar en la web. Queremos animar a la gente a liberarse de los jardines amurallados del software popular y recurrir a alternativas abiertas y éticas alternativas abiertas y éticas

Y la declaración de intenciones (https://disroot.org/en/mission-statement):

> descentralización, democratización e Internet Libre, ha sido dominada por un puñado de gigantes tecnológicos, promoviendo concentración en monopolios, más control gubernamental y más regulaciones restrictivas. Todo lo que, en nuestra opinión, se opone y destruye la verdadera esencia de esta maravillosa herramienta.

> Nuestro lema es "Cuanto menos sepamos de nuestros usuarios, mejor". Implementamos el cifrado de datos siempre que es posible para garantizar que la obtención de datos de los usuarios por parte de terceros no autorizados sea lo más difícil posible y mantenemos sólo el mínimo de registros de usuarios o datos que son esenciales para el funcionamiento del servicio.

> Elegimos un enfoque de trabajo en el que los usuarios (a partir de ahora denominados Disrooters) son la parte más valiosa y los principales beneficiarios del proyecto

Así, tenemos la impresión de que a Disroot no le gusta en lo que se ha convertido Internet: un lugar en el que nos minan los datos, nos controlan, dependemos de entidades poderosas que no tienen en cuenta nuestros intereses. Suena muy bien; pero como siempre - lo más importante es la confirmación de las ideas expuestas anteriormente - después de todo, Mozilla, por ejemplo, dice las mismas cosas. Así que veamos su Política de privacidad (https://disroot.org/en/privacy_policy). Como esto es sólo sobre su servicio de correo electrónico, me centraré en eso:

> Las direcciones IP de los usuarios que han iniciado sesión a través del protocolo IMAP/POP3 se almacenan mientras el dispositivo esté conectado al servidor. (por cada dispositivo conectado)

Entonces no hay almacenamiento persistente de IPs.

> Todos los correos electrónicos, a menos que sean encriptados por el usuario (con gpg por ejemplo) se almacenan en nuestros servidores en texto plano.

Esto significa que Disroot puede leerlo - a diferencia de, por ejemplo, RiseUp o Posteo - que cifran el correo con una clave derivada de tu contraseña. Sin embargo, AFAIK - esos dos podrían seguir haciéndolo si usted fuera un objetivo y decidieran robar su contraseña antes de de hacer el hash (por lo tanto, use PGP de todos modos si puede). Disroot también utiliza la encriptación cifrado de disco. Esto es todo para la política específica de correo electrónico, así que vamos a comprobar la general:

> Guardamos los registros de su actividad durante un periodo no superior a 24 horas (a menos que se especifique lo contrario por servicio). Estos datos se utilizan para ayudar a diagnosticar problemas de software, mantener la seguridad del sistema contra intrusión, y supervisar la salud de la plataforma.

Entonces, para el correo electrónico: La IP no se almacena en absoluto, mientras que el resto de registros se se borran todos los días. Muy bien, no se puede hacer mucho mejor que esto. Ahora vamos a revisar sus Condiciones de servicio (https://disroot.org/en/tos). Las partes relevantes son estas:

> 2. Contribuir a la discriminación, acoso o daño contra cualquier individuo o grupo. Esto incluye la propagación del odio y la intolerancia a través del racismo, la etnofobia, el antisemitismo, el sexismo, la homofobia y otras formas de comportamiento discriminatorio. (suspensión)

Hoy en día, absolutamente todo (incluso las bromas inofensivas) se considera "discriminación" por lo que si lo que haces se califica es una conjetura de cualquiera. Sin embargo - suponiendo que que no lean tu correo, deberías estar a salvo (a no ser que te denuncien). 

> 3. Contribuir al abuso de otros distribuyendo material en el que el proceso de producción crea violencia o agresión sexual contra personas o animales. (suspensión)

De nuevo, aquí hay mucho espacio para la interpretación. ¿Calificaría el hecho de informar sobre un suceso violento que ha sucedido? No sé. El uso de Disroot para actividades comerciales  tampoco está permitido

> Debido a esta estructura vemos el uso de los servicios de Disroot para fines comerciales como un abuso del servicio y será tratado como tal. 

Sin embargo, no matarán inmediatamente tu cuenta cuando se detecte dicha actividad:

> 5. El uso de los servicios de Disroot para cualquier otra actividad comercial se examinará cada caso y la decisión sobre la terminación de tales cuentas se basará en la comunicación con el titular de la cuenta y el tipo de las actividades en cuestión.

Esto puede parecer preocupante, pero sigue siendo mejor que los ToS de casi cualquier otro proveedor de la lista.

Disroot permite registrarse a través de una VPN o de la red Tor (sin embargo, no hay dominio onion). Los clientes de correo son compatibles - pero se puede utilizar el webmail de RainLoop también, el cual soporta encriptación PGP - pero ellos te dicen que no confíes en él y que en su lugar encriptes tu mierda localmente (como he estado diciendo a lo largo de este informe).

> No obstante, te animamos a ser siempre precavido cuando comunicación por correo electrónico, y a hacer uso del cifrado GPG para garantizar su correspondencia sea más segura.

El registro en Disroot requiere rellenar una sección "Tu historia". Anteriormente, han utilizado ReCaptcha para lidiar con los problemas de spam que tenían pero - debido a razones de privacidad - lo desecharon y tuvieron que idear otra cosa, así que ahí está. Si lo haces, también obtienes acceso a algunos otros servicios, incluyendo un foro, donde se puede leer ¿Durará disroot? Ahí se lee por su fundador cosas como: (https://forum.disroot.org/t/will-disroot-last/101/2):

>Así que por lo que a mí respecta disroot no se va a ninguna parte. Es mi dirección de correo electrónico principal, la cuenta xmpp y la cuenta d*.

> Creó que tenemos algo que las grandes corporaciones no tienen y es que nosotros creemos en lo que hacemos, y en el cambio del estado actual. Volviendo a las raíces, a cómo solía ser Internet.

> Empezamos disroot pensando en el "largo plazo". Por mi parte puedo puedo decir, disroot es mi bebé y creo en su éxito (o como quieras llamarlo). Uno no mata a sus bebés.

El administrador también afirma que el servicio NO es exclusivo para activistas (https://forum.disroot.org/t/the-political-philosophies-behind-services-like-disroot-riseup-dismail-de-and-what-are-a-few-other-friendly-email-providers/6773) - a diferencia de RiseUp o Autistici:

> No sé de dónde has sacado la información de que somos de alguna manera para el activismo exlcusivo. En ninguna parte de nuestra página web, ni en nuestra Misión decimos nada al respecto.

Yo y un miembro del chat también hicimos pruebas con él enviando correos electrónicos a mi cuenta desde algunos proveedores poco utilizados (como Paranoid u Onion Mail), y Disroot los bloquea, obligando a la otra persona a reenviar. Esto se llama "greylisting" y es una forma de filtrado de spam - pero aún así, un poco molesto.

En resumen - no hay almacenamiento de IP, otros (posibles) registros sólo durante 24h, no datos personales requeridos para el registro, uso de VPN / Tor permitido. Por lo tanto, la privacidad es muy buena y en su mayoría acabaron confirmando su declaración de misión - a diferencia de Mozilla. Los problemas con Disroot incluyen: no hay dominio cebolla, bloqueo de proveedores desconocidos y un ToS algo restrictivo (no discriminación o violencia, no uso comercial) - sin embargo, todavía mucho menos que casi todos los otros. También hay que pagar por los alias. Junto con RiseUp, Disroot  sigue siendo probablemente la mejor opción gratuita que existe.

# Elude
(eludemailxhnqzfmxehy3bk5guyhlxbunfyhkcksv4gvx6d3wcf6smad.onion)

Curiosamente, las cookies son necesarias sólo para ver el sitio. El registro posible sólo a través de TOR (ahora v3); no se necesitan datos personales - sólo resolver un captcha basado en texto (que a menudo parece ignorar soluciones correctas, por alguna razón) captcha de imagen realmente difícil. La página principal dice "El correo es gratuito. Nunca te pediremos que pagues por usar nuestro servicio de correo electrónico." Sin embargo, el uso del cliente de correo requiere una donación (1 USD al mes, en Bitcoin o Monero) y el nivel gratuito también necesita que el usuario responda a la pregunta "Para demostrar que eres humano, por favor describe por qué la privacidad es importante para ti?". Así que efectivamente es un servicio de pago ya que los clientes de correo son una característica esencial. Buena política de privacidad, no registran IPs ni datos del navegador; no comparten con terceros; FDE habilitado. Lo único que almacenan es la fecha de registro, el último mes de inicio de sesión así como así como los metadatos del remitente y del destinatario (este último se borra después de 24 horas). ToS es similar al de RiseUp:

No podrá realizar las siguientes actividades a través de los servicios prestados por Elude:

> Acosar o abusar de otras personas mediante la participación en amenazas, acoso o envío de spam.
> Mal uso de los servicios mediante la distribución de virus o malware, participando en una denegación de servicio, o intentando obtener acceso no autorizado a cualquier sistema informático, incluido éste.
> Contribuir al abuso de otros distribuyendo material en el que el proceso de producción creó violencia o agresión sexual contra cualquier persona.

Esto sigue siendo muy suave en comparación con todos los demás proveedores - la mayoría de que tienen una Biblia de requisitos a seguir. En comparación con RiseUp a continuación, la lealtad a la ideología anarquista / "comunista" no se requiere. En definitiva, Elude.in es una muy buena opción suponiendo que lo consideres un servicio de pago. Acceso de cebolla, sin datos personales, captcha de primera parte (pero difícil de resolver), gran privacidad, ToS decente y 10 alias para el primer nivel de pago (1 USD / mo). El ToS copiado parece un poco sospechoso, pero da igual. Además, no sabemos quién hizo el servicio y si van a permanecer alrededor. Tenga en cuenta que no lo hice probado realmente este proveedor porque no he pagado (pero podría eventualmente), así que no sé nada sobre los posibles tiempos de inactividad, etc. Sin embargo, por lo que puedo discernir, Elude es una gran opción, sólo superada quizás por el abajo.

# RiseUp
(https://riseup.net/)

> El Colectivo Riseup es un organismo autónomo con sede en Seattle con miembros del colectivo en todo el mundo. Nuestro propósito es ayudar a la creación de una sociedad libre, un mundo sin carencias y con libertad de de expresión, un mundo sin opresión ni jerarquía, donde el poder se compartido de forma equitativa. Lo hacemos proporcionando recursos informáticos y de comunicación recursos informáticos a los aliados que luchan contra el capitalismo y otras formas de opresión.

> Trabajamos para crear una revolución y una sociedad libre en el aquí y ahora construyendo una infraestructura de comunicación alternativa diseñada para oponerse y reemplazar el sistema dominante.

> Promovemos la propiedad social y el control democrático sobre la información, las ideas, la tecnología y los medios de comunicación

Este es exactamente el tipo de cosas de las que he hablado en el evitar "La red de bots" - ¿imposible? artículo. Si RiseUp se da cuenta del origen de la "botnet" y de la necesidad de controlar la infraestructura, entonces seguramente su servicio no espía a usted. Sin embargo, comprobemoslo (https://riseup.net/en/privacy-policy), para estar seguros:

> No se conservan las direcciones IP de ningún usuario para ningún servicio.

Bien, el más importante está fuera del camino.

> Su navegador web comunica información de identificación única información a todos los servidores web que visita [...] No retenemos ninguna de esta información.

Entonces, los agentes de usuario y cosas así no se recogen. Entonces, ¿qué es lo que realmente almacenan?

> Mantenemos un registro de la información "de" o "a" para cada mensaje retransmitido. Estos registros se purgan diariamente

Así que los metadatos del remitente y del destinatario se almacenan pero sólo durante 24 horas como máximo, aparentemente para la prevención del spam. Pero luego viene esto:

> La información anónima y agregada que no puede ser vinculada a un usuario individual puede ponerse a disposición de investigadores experimentados con el único propósito de desarrollar mejores sistemas de comunicación anónima y comunicación anónima y segura. Por ejemplo, podemos agregar información sobre cuántos mensajes envía y recibe un usuario típico, y con qué frecuencia. 

Si he criticado a Mozilla y a DDG por lo mismo, no puedo dejarlo que lo haga aquí. Aunque, por supuesto, es leve comparado con lo que todos los demás están haciendo.

> Puedes optar por eliminar tu cuenta de riseup.net en cualquier momento, al hacerlo, se destruirán todos los datos que conservamos y que están asociados con su cuenta.

De acuerdo, así que independientemente de lo que se almacena, si usted elimina su cuenta - se ha ido para siempre. La única política sensata que lamentablemente no es utilizada por la mayoría de los otros proveedores.

Las cosas más importantes, sin embargo, se dicen en su sección Levántate y Gobierno (https://riseup.net/en/about-us/policy/government-faq)

> Haremos todo lo que esté en nuestra mano para proteger los datos de los movimientos sociales y los activistas, sin llegar al encarcelamiento prolongado. Nosotros preferimos desconectar que someternos a la vigilancia represiva de nuestro gobierno, o de cualquier gobierno.

> Hemos luchado y ganado cada vez que alguien ha intentado que entregáramos información. Nunca hemos entregado ningún dato de los usuarios a ningúna tercera parte, cuarta parte, quinta parte o cualquier parte.

> No consentiríamos la instalación de ningún tipo de hardware o software en nuestra red y acabaríamos con la organización antes que instalar ninguno. 

Así que admiten que lucharán contra el gobierno y que preferirán morir que rendirse. Qué otro proveedor haría eso? Sin embargo, la afirmación de que nunca han entregado datos es falsa:

> Después de agotar nuestras opciones legales, Riseup eligió recientemente cumplir con dos órdenes selladas del FBI, en lugar de enfrentar desacato al tribunal (que habría resultado en tiempo de cárcel para Riseup aves y/o el cese de la organización Riseup). La primera se refería a la dirección de contacto pública de una red internacional de extorsión DDoS internacional de extorsión DDoS. La segunda se refería a una cuenta que utilizaba un ransomware para extorsionar de la gente. 

Aunque esto pueda parecer justificado por la aparente maldad de las acciones, abre una lata de gusanos que no estoy seguro de que deba abrirse. Me refiero a que el propio sistema judicial es un masivo opresor y no deberíamos aliarnos con él sólo porque haga algo que nos gusta de vez en cuando. Después de este fiasco, RiseUp ha tomado medidas para aumentar aún más la privacidad - implementaron la encriptación automática de correo usando tu contraseña (similar a Posteo):

> Además, desde marzo de 2017, el almacenamiento de todas las nuevas cuentas está encriptado personalmente. Riseup no es capaz de leer ninguno de los contenido almacenado para estas cuentas. Cualquier usuario con una cuenta creada antes de marzo de 2017 puede optar por el almacenamiento cifrado personalmente.

Puedes leer más sobre esto (https://0xacab.org/liberate/trees). También hay encriptación de disco - así que sigues estando protegido contra el gobierno mejor que de cualquier otro servicio. Y seamos realistas aquí - en los 21 años de historia de RiseUp (en el momento de escribir este artículo), tal situación (AFAIK) sólo ha ocurrido una vez - mientras que proveedores como Proton han regalado datos cientos de veces. RiseUp eliminará tu cuenta por participar en estas actividades:

> Acosar y abusar de los demás participando en amenazas, acoso o envío de spam.
> Por no hablar de los servicios de RiseUp.
> Mal uso de los servicios mediante la distribución de virus o malware, participando en un ataque de denegación de servicio, o el intento de obtener acceso no autorizado a cualquier sistema informático, incluido éste.
> Por ejemplo, el uso de la red de telefonía móvil.
> Contribuir al abuso de otros distribuyendo material en el que el proceso de producción creó violencia o agresión sexual contra personas.

Muy suave comparado con la letanía de cosas que se supone que no debes hacer que tienen proveedores como FastMail (https://www.fastmail.com/about/tos/) o Mailbox.org (https://mailbox.org/en/t-cs-cancellation-policy) (y pagas por ellos). RiseUp también ofrece la mejor función de alias de correo electrónico de todas, que es gratuita, no revela tu cuenta real en los encabezados, y puedes borrar los alias si ya no son útiles o se han convertido en spam. Aunque otros proveedores, como cock.li o danwin1210, utilizan los dominios seguros v3 para XMPP y el correo electrónico, RiseUp es el único que los proporciona para todo el conjunto de servicios, como contenedores, almohadillas, subida de archivos, etc.

Con todo, para mí sigue siendo un gran proveedor de correo electrónico - teniendo en cuenta la política de registro, la falta de datos personales necesarios para el registro, las direcciones v3 onion, los alias ilimitados, la compatibilidad con los clientes de correo y una gran fiabilidad (creo que nunca se ha caído - a diferencia de su XMPP). También responden a los tickets de soporte. El único posible problema sería el fiasco del FBI - aunque, no podrían haber hecho mucho allí con la orden de mordaza. Recuerde - este servicio es utilizado por miles de activistas - tiene que tomar la privacidad y la seguridad muy en serio. Por supuesto, también también se centra en la lucha contra el racismo, la "homofobia", etc - pero no he visto que afirmen que eliminen cuentas por determinados puntos de vista, a diferencia de Autistici. Otros proveedores -como FastMail o Mailbox.org- tienen una letanía de cosas que se supone que no debes hacer en sus ToS (diez veces más largos que RiseUp) - y pagas por ellas. Sin embargo, es un problema menor y ya que el servicio no tiene otros mayores, tengo que mencionarlos. Para registrarse, RiseUp requiere un código de invitación de una persona que ya tiene una cuenta.

# nauta.cu
(https://webmail.nauta.cu/login.php)

A petición de algunos he agregado este proveedor de correo a la lista, eso si, arriesgándome a no encontrar mucho ¿Por qué? Es un proveedor muy local, de hecho supe de su existencia cuando se propago en el Fediverso el desembarco Cubano.

¿Qué pude encontrar? No mucho, pero si cosas interesantes como la pertenencia y forma legal de "Sociedad anónima" así se identifican por parte de la empresa de Telecomunicaciones en Cuba llamada ETECSA. Bastante llamativo que se dominen como tal "sociedad anónima" cuando no lo es, como tal SON una empresa estatal exclusivamente de servicios de telefonía para Cuba, sin ir lejos, un monopolio que ya se plantea allí al ser el tope y estándar de dicho país. 

En la historia de dicha empresa de telefonía podemos ver que se divide en tres compañías, una entre el Estado de Cuba, otra sobre una empresa Mexicana y la última con el 25% de sus acciones a una Italiana ¿Debería eso ser bueno? Por supuesto que no, tus datos estarán siendo digeridos por 3 organizaciones que ha saber que hacen con ellos o de que forma lo complementan para seguir las leyes de datos de sus países de origen ¡Ah! y se me escapaba, eso de que principalmente se mantenga por el "Estado de Cuba" no es para nada nuevo, por supuesto que no, la peor combinación que da como resultado: sesgos ideológicos, censura, irrupción de datos y un laaargo etc (más en Cuba que la historia nos ha mostrado cómo gestionan sus servicios allí dentro bajo el imperio de los Castros). 

¿Controversias? Por si fuera poco tiene dos grandes controversias por su mal manejo de datos, cosa que le ha costado el cargo de control de la empresa a varios de sus lideres. Además de que no tiene una buena infraestructura para superar las sobrecargas (durante el Coronavirus se vio muchas interrupciones) y pues, es lo que hay... los cubanos no tienen que más servicios elegir, peor aun: caro ¿estás leyendo esto? Servicio monopolizado, caro, sin buena infraestructura y con polémica de tratamiento de datos ¿tú la utilizarías donde tuvieras más opciones? Por supuesto que no, quizás los cubanos les toque por no tener una mejor alternativa o eso pareciera frente a su estándar de facto.

Fuentes: (https://es.wikipedia.org/wiki/Empresa_de_Telecomunicaciones_de_Cuba)

**¿Transparencia? ¡qué va!** Buscando mucho te encuentras con un apartado de "protección al consumidor" da toda la pena (https://www.etecsa.cu/proteccion_al_consumidor/) de verdad que no pareciera un servicio de Telecomunicaciones. No hay más información, por lo tanto ¡evita lo más que puedas los servicios por dicha empresa Estatal! Escapa del sesgo y cuida tus datos.


# Mailo/Netcmail 

Otro proveedor de correo que parece surgido de la nada, muy poca información y comenzamos con un gran dilema ¿cual es cual? Al buscarlo podemos acceder a dos enlaces (https://www.mailo.com/) y (https://www.netcourrier.com/) con esto apenas comenzando se me sube la desconfianza a 200% porque ambas direcciones son totalmente independientes, no es como que si fuera una redirección al sitio original, no, actuan de forma independiente ¡grave! se puede presentar para ejecutar técnicas como el Pishig y demás. Al menos hay algo en lo que se colocan de acuerdo, enlazan al mismo sitio de PlayStore en donde sale su aplicación móvil.

Observando su información leemos promesas como: 

> "Mailo, el servicio de correo que te respeta
Mailo es toda una gama de servicios innovadores que protegen tu privacidad y tus datos personales: el webmail más completo del mercado, una agenda, un espacio de almacenamiento para tus fotos y documentos, herramientas de organización para la familia y los profesionales. Únase a la primera plataforma de comunicación ética alternativa". 

Un lema más repetitivo que cualquier otra cosa.

> "Un compromiso: respetar su privacidad y sus datos personales son sagrados para nosotros: los almacenamos en servidores seguros en Francia, no los utilizamos, no los vendemos, no leemos sus mensajes.

Hmmm ya hemos leído un poco durante el artículo sobre las leyes francesas que aunque parece ser "menos" restrictivas que de algunos otros países, si que maneja una retención de datos durante mucho tiempo.

¿Sus características? Hay un apartado de sólo características haciendo una comparación entre la versión gratuita y la de pago (https://www.mailo.com/mailo/es/caracteristicas.php) hay cosas que de verdad me sorprenden y parecen ser bastantes buenas, como el uso de un cliente parcial, si, parcial porque están habilitados solo unos puertos para uso especial, tiene buen espacio, compatibilidad con PGP nativo, compatibilidad con llavero, webmail HTTPS (bueno, eso lo lleva la mayoría) pero ¡ugh! un golpe demasiado grave y es Webmail CON publicidad en la versión gratuita, ya verémos que te enchuspan anuncios en tu bandeja para lograr recoger lo que invierten ¿qué tan amigables será con el usuario? Ya veremos en profundidad. Además otra cosa que viene bastante mal es que trae Antivirus en tu bandeja por defecto, quizás alguno penséis que es bueno, pero no, se presta para recopilar tu información y anexar información durante la búsqueda, es como "Te invado tu privacidad a costa de la seguridad" muy malo. 

Si bien les comentaba que tenía PGP nativo, me encuentro líneas más abajo con la afirmación:

> "Como tercero de confianza, Mailo se compromete a garantizar la máxima seguridad de las claves PGP de los usuarios".

No, no queremos eso ¡promesas! Inseguro como el resto que promete lo mismo, aunque...  posteriormente nos dan la opción de "Los usuarios que deseen utilizar PGP sin un tercero de confianza deben instalar un software de correo con capacidades criptográficas en cada dispositivo utilizado para acceder a los correos electrónicos cifrados" Suena mucho mejor, gestionar localmente mis claves PGP con un software a mi elección, en eso los veo bastante bien. 


Indagando más en el sitio nos podemos encontrar con una carta (tipo manifiesto) en donde observamos varios compromisos:

**El Mailo carta**

**Compromiso 1 – Respeto por la privacidad del usuario**

- El servicio es explotado enteramente en Francia, y respeta escrupulosamente las leyes europeas y francesas sobre la correspondencia provada y la protección de datos.
-Los datos de los usuarios son confidenciales: no hay manera de acceder a ellos, ni siquiera las autoridades que lo demanden, si no se sigue el proceso legal.

**Compromiso 2 – Direcciones de email no intrusivas**

- No son utilizadas para localizarte en Internet asociándote con un motor de búsqueda, una red de publicidad, una red social ni un navegador de Internet.
- No son utilizadas para crear una base de datos de rastreo y evaluación:
- Los mensajes recibidos y enviados por los usuarios no se leen con propósitos comerciales o promocionales.
- Los datos proporcionados por los usuarios son confidenciales.

**Compromiso 3 – Un servicio de calidad en constante evolución**

- Permanece sostenible durante el tiempo para los usuarios quienes, sean niños, particulares o profesionales, necesiten una dirección de email permanente.
- Mejora constantemente, añadiendo características, ergonomía, capacidad, movilidad y rendimiento.
- Se centra exclusivamente en el correo, y no se dispersa en un portal de mercado masivo.
- Mantiene un control total de sus tecnologías para permanecer innovador, respondiendo a las necesidades y sugerencias de los usuarios sin ningún retraso.

**Compromiso 4 – Consideración a cada usuario**

- Una solución para todos: adultos, niños y seniors.
- Consideración por la seguridad de las familias y los niños.
- Herramientas de rendimiento para profesionales.
- Una estrecha relación con contact@mailo.com las cuales, si se necesita, contactan al usuario por teléfono.

Dicho manifiesto de privacidad suena bastante bien, pero ¿hasta que punto se cumple? No seamos idealistas, creerles a simple vista es como vivir de sueños, entonces vamos a ver que tanto se contradicen en sus "reglas de privacidad" (https://www.mailo.com/mailo/es/privacy-rules.php)

Comenzamos mal porque hacen que la información sea poco accesible, sólo está en Frances y pues, me pregunto, si hay otras partes de su sitio ¿Por qué las reglas y términos de uso están en Frances? ¿acaso quieren minimizar la evidencia? Ya veremos. 

> "En el curso de la prestación de sus servicios, Mailo está obligado a almacenar y procesar sus datos personales. Estas Normas de Privacidad son parte integrante de las Condiciones Generales de Uso de Mailo y tienen por objeto indicar qué datos se almacenan y cómo se utilizan, cómo se puede acceder, actualizar y eliminar sus datos. Por lo tanto, Mailo se compromete a respetar su privacidad y sus datos personales de acuerdo con estas normas".

Comenzamos bien, aclarando que están "obligados" (suena bastante mal) a almacenar y procesar nuestros datos personales para ofrecernos dichos servicios... no te creó.

> "Para acceder a los servicios de Mailo, debe crear una cuenta. Para ello, usted proporciona información personal que rellena explícitamente, como su nombre y apellidos, su dirección de correo electrónico, su fecha de nacimiento o su idioma. El carácter obligatorio o facultativo de los datos se indica en los formularios de recogida. Al crear una cuenta personal, se requiere la fecha de nacimiento para verificar que usted tiene al menos 16 años o tiene el consentimiento de sus padres. Se le pedirá su nombre, apellidos y fecha de nacimiento si quiere recuperar el acceso a su cuenta en caso de perder la contraseña.
Para aprovechar todas las funciones y personalizar su experiencia, es posible que se le pida que complete su perfil, que indique su sexo, su número de teléfono móvil, su dirección postal y que cargue una foto.
Su dirección de correo electrónico puede ser utilizada por Mailo para comunicarse con usted, por ejemplo para darle información sobre su cuenta, los Servicios y las actualizaciones de seguridad o para realizar encuestas de satisfacción. Puede oponerse a este tipo de comunicación en cualquier momento enviando un correo electrónico a contact@mailo.com.
Puedes consultar, modificar o eliminar tus datos personales en cualquier momento en tu cuenta de Mailo yendo a Opciones en el apartado Perfil. En caso de modificación, Mailo no conserva los perfiles previamente modificados y sustituidos.
La información de su perfil puede mostrarse para facilitar la comunicación, la colaboración y el intercambio de archivos con otros usuarios".

De verdad es mucha información para componer un correo electrónico sencillo y más, no se saben justificar ¿para tratar y colaborar? No me jodas. Además de que "expresamente puedes optar por más adelante pedir que se retire dicha información" ¿Ósea, te la doy y luego pido que la elimines? ¿y quieres que confié? Injustificable, para nada confiable; no tiene sentido.  

> "Historial de conexiones
Para ofrecerle una visión general del uso de los servicios de Mailo y comprobar que no se ha producido ninguna conexión anormal en su cuenta, el historial de sus sesiones (fecha de conexión, tipo de conexión y dirección IP) se almacena durante 1 mes. Estos datos se eliminan automáticamente al cabo de un mes. Además, puedes acceder a ellos en cualquier momento en las Opciones, en el apartado Tu cuenta, y eliminarlos tú mismo".

Prácticamente dos meses para que se elimine mi historial de conexiones, no es viable. 

> "Tratamiento de los contenidos
Se recuerda que el correo electrónico está sujeto al secreto de la correspondencia. Mailo no utiliza lo que usted dice en los correos electrónicos o discusiones, ni sus documentos, fotos, libreta de direcciones u otros archivos personales para enviarle publicidad dirigida, ni para enriquecer una base de datos que pueda ser comercializada.
Para garantizar su seguridad (antivirus y antispam) o para mejorar el uso del correo electrónico (filtrado de correo gris), Mailo analiza automáticamente todos los correos electrónicos. Este tratamiento se realiza en los servidores de Mailo. Puede desactivarlas en las Opciones, en el apartado Recepción de correos electrónicos".

Siguen contradiciéndose, es como "lo hago, pero puedes pedir que no lo haga". 

> "En la versión gratuita de Mailo, Mailo Free, se muestran banners publicitarios. Las agencias de publicidad asociadas pueden colocar cookies publicitarias en su navegador para personalizar mejor los banners mostrados".

¡NO! Es bastante claro, cookies publicitarias, de una vez ya me dan ganas de vomitar.

En los apartados de aplicaciones móviles leemos todos los permisos que hay que ceder, cosa que es claro para el buen funcionamiento de la aplicación, pero luego salen con cosas como:

> "- tienen acceso total a la red: sólo se utilizan para comunicarse con los servidores de Mailo".

Se justificaría donde fuera un acceso parcial, pero no. 

> "- Ver el contenido de la tarjeta SD, editar o eliminar el contenido de la tarjeta SD".

Demasiado acceso.

> "- cambiar los ajustes de audio, evitar que el dispositivo entre en modo de suspensión, controlar el vibrador" 

Hmmm justifican cosas qué ya son demasiado ¿para que o que?

Frente a los datos que brindan a las autoridades se limitan a expresar:

> "Mailo puede ser llamado a proporcionar datos a la policía, la gendarmería y las autoridades judiciales dentro de un estricto marco legal con la autorización de un magistrado".

> "El acceso a los datos personales está estrictamente limitado a los empleados responsables del mantenimiento y desarrollo de Mailo. Estas personas están sujetas a estrictas obligaciones de confidencialidad".

Acaban de admitir que tienen acceso, pero son sujetos a estrictas obligaciones de confidencialidad... esto no es muy seguro, nunca lo es y siempre hay filtraciones en empresas por lo mismo.

> "Sus datos personales se conservan durante toda la vida de su cuenta de Mailo".

¡Vaya! Aunque hay algo bueno y es que, según ello después de que purgas tu cuenta todo es eliminado definitivamente de sus servidores ¿en cuanto tiempo? No especifica, pero a decir verdad para estar situados en Francia dudo mucho de ello que sea inmediato.

Leí tanto sobre dicho sitio que ya no quiero saber nada de sus términos y condiciones, al igual ni me interesaría en probarlo ¡evitar! (https://www.mailo.com/mailo/es/privacy-rules.php)

Sigue la ley de Murphy por favor: "cualquier cosa que puede ir mal, saldrá mal" Así evitas utilizar tantos sitios engañosos. 

# Correo electrónico temporal (AirMail y similares)

Sólo para completar - son bastante inútiles. Bloquean en todas partes y sólo permanecen por un tiempo, impidiendo el restablecimiento de la contraseña y demás. Superado por la función de alias de RiseUp.

# Resumen

Es muy preocupante la cantidad de proveedores que pretenden basarse en la privacidad, pero resultan ser cualquier cosa menos eso, incluso intentan activamente comprometerla. No importa, todavía existen algunos buenos como Riseup y Disroot. Si no puedes o no quieres entrar en ellas (quizás por no estar de acuerdo con sus principios) - la segunda mejor opción es pagar por una cuenta de Elude / Posteo / CounterMail. Dismail / Paranoid / Cock también son decentes, no politizados y gratuitos. No debe confiar plenamente en ningún proveedor, (o cualquier servicio de Internet en absoluto). Tome esta cita de RiseUp para el corazón: "Nada en línea es 100% seguro. Si tienes algo muy sensible que decir, hazlo fuera de línea." ¡Encripta con GPG siempre que sea posible! De esta manera, puedes saltarte sus políticas de censura/almacenamiento de datos políticas de almacenamiento de datos, incluso si usted está preocupado por los que se utilizan en su contra.


**NOTA** Este artículo será dividido en varias partes por problemas con WriteFreenly y su capacidad para aceptar artículos extensos, asi que les dejó los enlaces de las partes (disculpas por no poder unificar todo en un sólo lugar):
– 1 Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-1-parte).
– 2 Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-2-parte)
– 3 Parte: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-cual-elegir-3-y-ultima-parte).
– 4 Parte, si la última: (https://write.privacytools.io/gatooscuro/proveedores-de-correo-electronico-4-parte-seguro-la-ultima)

