---
layout: post
---

# Qué es y cómo usar PGP | Principiante

Seguramente el caso más mencionado en el que se haya utilizado PGP, fue: Cuando Edward Snowden y Laura Poitras lograron ponerse en contacto y burlar a las agencia de seguridad estadounidenses y sus aliados gracias a que una de sus primeras comunicaciones fue encriptada. En ese correo electrónico Snowden le pedía a Poitras (https://www.wired.com/2014/10/snowdens-first-emails-to-poitras/)  que aumentara el nivel de seguridad de su correo con una nueva llave más segura ya que la NSA es capaz de generar un trillón de contraseñas por segundo.

No se trata de hacer más difícil a la NSA saber qué dices, se trata de proteger cualquier tipo de información personal de cualquier otra persona, organización o sistema exterior que intenta espiarte.

Sin colocarnos técnicos: PGP (Pretty Good Privacy/**privacidad bastante buena**), es un programa desarrollado por Phil Zimmermann y cuya finalidad es proteger la información distribuida a través de Internet mediante el uso de criptografía de clave pública, así como facilitar la autenticación de documentos gracias a firmas digitales.

# ¿Cómo funciona?

PGP es un criptosistema que cifra el contenido de un texto comprimiéndolo buscando patrones repetitivos en el texto, de la misma forma que por ejemplo la compresión de un archivo JPEG busca patrones repetitivos en la imagen para hacer más ligero el archivo.

# ¿Por qué cifrar tus comunicaciones?

No se trata de que tengas algo que esconder, si no de que tienes comunicaciones que no tienen por qué ser escuchadas o leídas por otras personas. El cifrado de mensaje hoy por hoy es un poco complicado, pero poco a poco hay más aplicaciones y servicios que ponen la seguridad por delante y más fácil de entender.

Noten que estoy siendo muy resumido en cuanto a las explicaciones, y esto es porque la mayoría de sitios que hablan sobre PGP y sus derivados, complican las cosas a tal punto que un usuario promedio o básico no entenderá un carajo. Además no me puedo meter mucho en datos técnicos porque no soy un profesional en ello (todavía) y no podría darte esa clase de definición.

# ¿Cómo usarlo?

Hay muchas formas de utilizar este tipo de cifrado, pero hoy les vengo a mostrar la más sencilla que conozco para que cualquiera pueda probar y no morir en el intento. Más adelante pueden experimentar por su propia cuenta con alternativas más complicadas, igual al final dejaré una serie de herramientas para tener de guía.

 **Nota:** 20/03/2021

Este artículo data de 2018, pese a su antigüedad y el querer actualizar la guía me encuentro con que el sitio donde originalmente me base para proyectar a los principiantes NO existe ya, pero no todo es malo... de 2018 a 2021 todo se ha vuelto muy sencillo, prácticamente es llenar casillas y guardar la información, ahora todo el tema del cifrado PGP para principiantes lo hace el navegador de forma automática, por lo tanto está guía solo será para referenciar aquellos sitios y enseñarles los conceptos que más arriba explicaba, sólo eso.  

- https://youritmate.us/pgp/
- https://pgptool.org/#
- https://webencrypt.org/openpgpjs/

En esos tres sitios tendrás las herramientas suficientes para generar las claves PGP con los parámetros seleccionados. Además de poder utilizarlas en cualquier tipo de servicio/aplicación sin ningún problema porque puedes migrar tu clave secreta a cualquier lado **¿Aún no entiendes lo de las llaves?** Básicamente la llave pública es la que contiene la información cifrada con base en tu llave secreta que corresponde a los datos ofrecidos en los parámetros para crear dicha clave, por lo tanto la clave secreta solo la tendrás tú y en un lugar seguro porque con ella podrás descifrar todos los mensajes que sean cifrados con tu clave pública la cual es la que proporcionas al público para que te contacte. Espero haber sido bastante claro. 


# Otras aplicaciones de cifrado

No solo existe el método que les mostré, pero es sin duda la más fácil de entender en cuanto a cifrado PGP se refiere. Pero si eres una persona que quiere usar otras aplicaciones o plugins, atento a esta lista.

- GPGTools: Para OS X es la mejor solución, se integra con Apple Mail (https://gpgtools.org/)
- GPG4Win: La aplicación que debes usar si usas Windows (https://gpg4win.org/)
- ProtonMail: correo electrónico creado por científicos del CERN cuya principal misión es ofrecer un correo seguro (https://mail.protonmail.com/login).
- Signal para iOS y Android: Aplicación de mensajería segura de Open WhisperSystems (https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
- Wire: Aplicación segura (https://play.google.com/store/apps/details?id=com.wire).
- GnuPG: viene a ser el reemplazo de PGP, pero con la principal diferencia que es software libre licenciado bajo la GPL. GPG utiliza el estándar del IETF denominado OpenPGP (https://gnupg.org/download/index.html).

Esta es una pequeña selección de aplicaciones que permiten cifrar el contenido de tus comunicaciones. Existen muchas más, recuerda que puedes recomendarlas en los comentarios.

![Cosmic radiation](https://uh.gsstatic.es/sfAttachPlugin/918145.jpg)
