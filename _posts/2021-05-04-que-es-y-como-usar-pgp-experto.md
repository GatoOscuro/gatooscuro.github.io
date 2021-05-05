---
layout: post
---

# Qué es y cómo usar PGP | Experto

PD: Dirigido para todos los usuarios especialmente para los sistemas operativos que soporten Kleopatra, en este caso las capturas proceden de Windows porque fue en su momento donde las capte, pero es lo mismo en GNU/Linux. 

Hace un tiempo escribí sobre este mismo tema pero enfocado a un público más principiante (https://write.privacytools.io/gatooscuro/que-es-y-como-usar-pgp-principiante). A continuación mencionaré lo más importante que redacte en el artículo pasado y procederé a iniciar/explicar cómo usar dicha herramienta.

Seguramente el caso más mencionado en el que se haya utilizado PGP, fue: Cuando Edward Snowden y Laura Poitras lograron ponerse en contacto y burlar a las agencia de seguridad estadounidenses y sus aliados gracias a que una de sus primeras comunicaciones fue encriptada. En ese correo electrónico Snowden le pedía a Poitras que aumentara el nivel de seguridad de su correo con una nueva llave más segura ya que la NSA es capaz de generar un trillón de contraseñas por segundo.

No se trata de hacer más difícil a la NSA saber qué dices, se trata de proteger cualquier tipo de información personal de cualquier otra persona, organización o sistema exterior que intenta espiarte.

Sin colocarnos técnicos: PGP (Pretty Good Privacy/privacidad bastante buena), es un programa desarrollado por Phil Zimmermann y cuya finalidad es proteger la información distribuida a través de Internet mediante el uso de criptografía de clave pública, así como facilitar la autenticación de documentos gracias a firmas digitales.

# ¿Cómo funciona?

PGP es un criptosistema que cifra el contenido de un texto comprimiéndolo buscando patrones repetitivos en el texto, de la misma forma que por ejemplo la compresión de un archivo JPEG busca patrones repetitivos en la imagen para hacer más ligero el archivo.
 
# ¿Por qué cifrar tus comunicaciones?

No se trata de que tengas algo que esconder, si no de que tienes comunicaciones que no tienen por qué ser escuchadas o leídas por otras personas.

El cifrado de mensaje hoy por hoy es un poco complicado, pero poco a poco hay más aplicaciones y servicios que ponen la seguridad por delante y más fácil de entender.

Noten que estoy siendo muy resumido en cuanto a las explicaciones, y esto es porque la mayoría de sitios que hablan sobre PGP y sus derivados, complican las cosas a tal punto que un usuario promedio o básico no entenderá un carajo. Además no me puedo meter mucho en datos técnicos porque no soy un profesional en ello (todavía) y no podría darte esa clase de definición.

# ¿Cómo usarlo?

Hay muchas formas de utilizar este tipo de cifrado, pero hoy les vengo a mostrar una forma muy sencilla y segura.

Lo primero que tendrán que hacer es entrar al siguiente sitio (https://www.gpg4win.org/download.html)  y descargar el programa correspondiente. Me salto el proceso de instalación porque es algo relativamente sencillo y además en Windows con cuatro clicks lo tienes listo.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/1.png)
(Sitio oficial)

Luego de descargar e instalar vamos a nuestro escritorio y encontraremos un programa que se llama "Kleopatra", lo ejecutamos y pasamos al siguiente punto.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/2.png)
(Icono del programa)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/3.png)
(Programa en ejecución)

Después de todo lo anterior procederemos a crear nuestro par de llaves (pública y privada):

- Archivo
- Nuevo par de llaves

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/4.png)
(Creación de nuevo par de llaves)

- Crear un par de claves personales OpenPGP

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/5.png)
(Opciones que da el programa)

- Luego colocaremos el nombre y correo del propietario.

También podremos darle en "configuración avanzada" y definir ciertos valores

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/6.png)
(Detalles de llave)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/7.png)
(Detalles extras y configuración avanzada)

- Luego siguiente y siguiente; nos saldrá un recuadro para rellenarlo con la contraseña segura que utilizaras para cifrar y descifrar cualquier mensaje/archivo (importante no perder).

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/8.png)

- Finalmente tendremos las llaves creadas y con varios pasos a seguir (es opcional).

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/9.png)
(Pasos opcionales y final de creación de par de llaves)

Llegando a este punto ya tendríamos el par de llaves creado, pero ¿Qué es lo que sigue? Pues, les mostraré como se cifra/descifra un mensaje y cómo exportar/importar tu clave pública.

Supongamos que alguien me va a enviar su llave para empezar a intercambiar mensajes cifrados con el, entonces tendría que hacer lo siguiente:

- Seleccionar su llave
- Exportar
- Seleccionar el lugar donde vas a guardar la llave
- Enviar el archivo a tu amigo

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/11.png)
(Exportar.)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/21.png)
(Exportada a la nube de Telegram )

Listo, ahora pasamos al siguiente punto donde voy a importar esa clave a mis llaves de confianza para empezar a intercambiar dichos mensajes, entonces tengo que hacer lo siguiente:

- Descargar la llave
- Importarlo a mis llaves de confianza
- Cumplir con lo que nos pide el formulario de confianza y verificación
- Colocar su contraseña maestra para terminar la importación de la llave

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/31.png)
(Archivo descargado)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/42.png)
(Importar.)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/51.png)
(Verificando)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/61.png)
(Verificando2)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/71.png)
(Contraseña maestra)

Ahora tienes dos llaves en tu programa; la tuya y la de tu amigo. Ahora proseguiremos con la cifrada de mensaje:

- Bloc  de notas
- Escribimos el mensaje a cifrar
- Pasamos a "Destinatario".
- Agregamos los valores como en la imagen
- Cifrar (nos pide nuestra contraseña maestra).
- Enviar mensaje ya cifrado a tu amigo para que lo descifre

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/81.png)
(Llaves mía y de mi amigo)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/10.png)
(Destinatario)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/111.png)
(Configuración)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/12.png)
(Firmar y confirmación)

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/13.png)
(Mensaje encriptado listo para enviar)

Luego mi amigo descifro el mensaje (lo descifra en el bloc y con su contraseña maestra) y el resultado fue este:

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/20.png)

Esta es la finalización del tutorial, pero creo que todo el proceso quedo muy claro y así mismo como se cifra el mensaje se puede descifrar sin ningún problema. Durante el proceso hay varios cambios e incoherencias como el texto de ejemplo o la llave censurada ¿La razón? Esto lo escribí en el transcurso de varios días y se me olvidaba en que había quedado así que modificaba el contenido, pero siguiendo el proceso de dicho programa y además deje de usar la llave de prueba y empecé a usar mi llave personal (por ello la censura en las capturas), aunque estos pequeños detalles deben ser ignorados porque no afectan en nada al proceso.

# ¿Qué pienso acerca de la supuesta vulnerabilidad de PGP?

Hace un tiempo empezó a circular noticias sobre una vulnerabilidad que había sobre PGP y en resumen esto es lo que opino/y paso: La vulnerabilidad consistía en el cifrado automatizado y con uso en HTML, simplemente no lo usen  y listo; hagan todo manual.

Por último:  Esta es una de las formas más seguras para proteger tus comunicaciones en la actualidad. Seguro algunos se estén preguntando **¿Y los usuarios de GNU/Linux?** Yo que uso aquel sistema operativo no hice el tutorial con la terminal simplemente porque no la controlo aun, prefiero la forma visual... más adelante haré un tutorial para nosotros, lo de GNU/Linux

PD:  Si se me olvido mencionar algo por favor escríbelo en los comentarios.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/snowden-pgp.jpg)





















