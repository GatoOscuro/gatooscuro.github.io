---
layout: post
---

# GPG portable al rescate | Gpg4usb

**Actualización 2021:** Gpg4usb fue de lo mejor en su momento, pero hay que reconocer que puede ser un gran factor de inseguridad al no ser actualizado desde **Febrero de 2016** eso si, de momento no se ha descubierto vulnerabilidad/leak o desconfianza al respecto, pero si hay que tenerlo bastante en cuenta (bajo tu riesgo). Se recomienda ir a por  Thunderbird+Enigmail.

En el artículo de hoy voy a escribir sobre una de las mejores alternativas para cifrar tus conversaciones de manera segura, esto gracias a una herramienta portable que siempre tendrás a la mano sin importar que sistema operativo estés usando.

Gpg4usb es una herramienta PGP que se puede ejecutar desde una unidad USB y funciona tanto en Windows como en GNU/Linux, con soporte para OS X planificado. Cuenta con una interfaz de usuario muy intuitiva, portabilidad para que pueda ser utilizado en múltiples dispositivos y, por supuesto, es de código abierto. Utiliza GnuPG como la mayoría de los métodos PGP. El sistema operativo utilizado en este tutorial será Linux Mint, pero la interfaz de usuario será la misma en todas las versiones de GNU/Linux y Windows.

Antes de iniciar con este «Tutorial» debo dejar claro que hay muchos términos técnicos y demás cosas que pueden alejar a cualquier persona que no tenga mucha experiencia en ello así que si no tienes ni idea que es PGP/GPG y todo lo otro (acá https://write.privacytools.io/gatooscuro/que-es-y-como-usar-pgp-experto) Allí explico todo esto de manera clara y sencilla, ahora si al tutorial:

**Nota importante:** Este programa va para casos muy específicos y hay que tener en cuenta que la versión oficial no se actualiza desde hace algunos años (2016) y esto podría significar un problema de seguridad bastante grande. Yo personalmente lo uso por su portabilidad aun así viendo el gran problema de seguridad (soy arriesgado) lastima que todos los forks de este mismo programa no han sido actualizados ni mantenidos. Por otro lado, si quieres algo con los protocolos de seguridad al día prueba: Kleopatra, GnuPG, Kgpg.

Tenga en cuenta que no todas las versiones de PGP se crean por igual, algunos programas PGP utilizan una versión insegura de PGP que podría comprimir el mensaje cifrado. Muchos utilizan versiones depreciadas de GnuPG. Esto significa que no están al día con la última versión de GnuPG o no cumplen con los estándares modernos de PGP. Esto puede ser peligroso. También debe tener en cuenta que no debe utilizar métodos PGP en línea como iGolder. Usted no es el propietario de las claves, por lo que no puede estar 100% seguro de que no se trata de mensajes cifrados/descifrados que están destinados únicamente a sus ojos.

# ¿Por qué usar gpg4usb sobre otros métodos PGP?

- gpg4usb crea claves RSA con una subclave de encriptación y una clave maestra. La clave maestra se utiliza para firmar otras claves, crear subclaves y revocarlas. Tener subclaves es muy importante ya que si se ve comprometido, puede revocarlo con la llave maestra y crear una nueva subclave segura.

- Como se ha indicado anteriormente, gpg4usb es multiplataforma. Si decide cambiar de Windows a GNU/Linux puede seguir teniendo las mismas claves y una interfaz familiar con la que trabajar. Con el soporte de OS X planeado, esto sólo da otra razón por la que debería usar gpg4usb sobre otros programas.

- gpg4usb es portátil. Esto significa que puede llevar sus llaves y el programa PGP con usted a donde quiera que vaya sin necesidad de importar sus llaves a otro programa. Si usted planea hacer esto, sin embargo, es una buena idea encriptar su unidad USB. (https://wiki.archlinux.org/index.php/Disk_encryption#Preparation) en el wiki de ArchLinux explica cómo puede hacer esto en GNU/Linux y por qué debería encriptar su unidad USB, o lea esta página si está usando un ordenador con Windows (https://docs.microsoft.com/en-us/previous-versions/technet-magazine/ff404223(v=msdn.10)?redirectedfrom=MSDN).

- La interfaz para gpg4usb es una de las más intuitiva de todas las interfaces PGP. La interfaz de usuario se presenta de una manera fácil de entender y las opciones están claramente definidas.

- Puede cifrar los mensajes creados en gpg4usb con varias claves. Esto significa que puede tener varios destinatarios para un mensaje, e incluso puede encriptarlo con su propia clave. Nadie que descifre un mensaje cifrado con varias claves puede ver que estaba destinado a otra persona. Esto es bueno si usted es estafado en el DNM ya que ahora puede tener pruebas para respaldar cualquier reclamo que tenga.

# Parte 1 – Instalación del software

Dado que gpg4usb es un programa portátil, no está realmente instalado. Se trata de un grupo de archivos que se extraerán de un archivo.zip y se copiarán en la unidad USB. Vaya a la página web de gpg4usb (https://www.gpg4usb.org/development.html) y haga clic en el botón verde de descarga y guarde el archivo. Si quieres ver el código fuente puedes visitar su página de desarrollo (https://github.com/gpg4usb/gpg4usb).

**Nota:** gpg4usb no se ejecutará en distribuciones GNU/Linux en unidades USB formateadas como FAT. Si sólo lo está usando en sistemas operativos GNU/Linux, lo mejor sería ext4, de lo contrario formatearlo a NTFS.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb1.png)

Una vez finalizada la descarga, abra el archivo.zip con el gestor de archivos de su elección y haga doble clic sobre él. Debería ver una carpeta llamada «gpg4win», con todos los archivos necesarios contenidos en esa carpeta. Copie esa carpeta a su unidad USB, ábrala, y debería verse similar a la imagen de abajo.

Eso fue muy simple, ¿verdad? Revisa el archivo README si quieres saber más sobre gpg4usb. Para abrirlo, todo lo que tiene que hacer es hacer doble clic en «start_windows.exe» si está en Windows o «start_linux_xxbit» donde «xx» es la arquitectura de su CPU. Para la mayoría de los usuarios esta será la versión de 64 bits.

# Parte 2 – Generación del par de claves

Esto es lo primero que debe hacer. Sin su propio par de claves, será imposible recibir y descifrar mensajes. Abra gpg4usb y será recibido por el «Asistente de primer inicio». Esto le guiará a través de los pasos para crear su par de llaves.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb2.png)

Seleccione su idioma y luego haga clic en «Siguiente». Ahora le preguntará si desea crear un nuevo par de claves, importar claves desde GnuPG o importar configuraciones/claves desde una versión anterior de gng4usb. Haga clic en «crear un nuevo par de claves», luego haga clic en el botón que dice «Crear nueva clave». Debería ver una ventana con el título «Generar clave». Rellene la información, rellene un correo electrónico falso si no desea utilizarlo, seleccione si desea que caduque o no, elija el tamaño de la clave y, a continuación, cree una contraseña segura. Un par de llaves de 2048 bits funcionará bien hasta 2030, pero se recomienda utilizar una de 4096 bits (https://danielpocock.com/rsa-key-sizes-2048-or-4096-bits/). Si desea saber más sobre cómo el tamaño de la clave afecta a su seguridad, consulte este enlace en el sitio web de GnuPG (https://www.gnupg.org/(en)/faq/gnupg-faq.html#advanced_topics).

Si se llena correctamente, su ventana debe tener un aspecto similar al de abajo.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb3.png)

Ahora puede hacer clic en «Aceptar» y se generará su par de llaves. Esto puede tomar algún tiempo dependiendo de lo que esté haciendo en su computadora. Ver algo de porno, torrentar algunos ISOs de GNU/Linux, escribir ese ensayo que se suponía que tenías que haber hecho la semana pasada. Si todo ha ido bien, aparecerá una ventana diciendo que su par de llaves ha sido creado.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb4.png)

Ahora puede cerrar el asistente y seleccionar si desea ver la ayuda fuera de línea o mostrar el asistente de nuevo la próxima vez que lo inicie. Se le llevará a la ventana principal de gpg4usb y verá su par de llaves a la derecha, junto con el par de llaves de gpg4usb.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb5.png)


# Parte 3 – Obtención de su clave pública

Para recibir mensajes necesitarás tu clave pública en algún lugar. Esto es realmente fácil en gpg4usb ya que no necesitas guardarlo en un archivo primero.

Con gpg4usb abierto, haga clic en «Administrar claves» en la parte superior. Aparecerá una ventana con el título «Gestión de claves». Marque la casilla junto al nombre de su par de teclas y haga clic en “Exportar al portapapeles” en la parte superior. Ahora puede pegar su clave pública en un lugar donde la gente pueda acceder a ella para que puedan enviarle mensajes. Si desea una copia de seguridad de su clave pública, también puede hacer clic en «Exportar a archivo» y guardarla en algún lugar.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb6.png)

# Parte 4 – Obtención de su clave privada

Es una buena idea hacer una copia de seguridad de su clave privada en un lugar seguro en caso de fallo del ordenador. Aunque son raras, las cosas suceden y no quieres quedarte estancado sin poder descifrar ese mensaje tan importante que tu madre te envió.

Desde la ventana principal, haga clic con el botón derecho del ratón en la tecla de la derecha y haga clic en «Mostrar detalles de la llave».

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb7.png)

Desde aquí puedes ver los detalles de tu clave, su huella dactilar y exportar tu clave privada. Haga clic en el botón que dice «Exportar clave privada» y le advertirá de que se trata de información confidencial que no debe compartirse. Seleccione un lugar para guardarlo y guarde el nombre de archivo que le da. Una buena idea es guardarlo en una tarjeta microSD y esconderlo en algún lugar. No quieres que nadie más que tú consiga tu clave privada.

Una vez más, es muy importante que mantenga este archivo en un lugar seguro.

# Parte 5 – Importación de una clave pública

gpg4win hace esto tan fácil como exportar su clave pública. Resalte todo en la clave pública, incluyendo «– BEGIN PGP PUBLIC KEY BLOCK–» y «– END PGP PUBLIC KEY BLOCK», y cópielo. En la ventana principal de gpg4usb haga clic en «Importar Clave» en la parte superior, luego «Portapapeles». Verá una ventana emergente con los detalles de la llave importada.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb8.png)

Cierra la ventana y verás que la clave pública ha sido importada.

# Parte 6 – Importación de una clave privada

Esto es tan fácil como importar una clave pública. En la ventana principal de gpg4usb haga clic en «Clave de importación», luego en «Archivo». Busque el lugar donde guardó su clave privada y ábrala. Aparecerá una ventana confirmando que se ha importado. Haga clic en «Aceptar» y verá su par de llaves en la parte derecha de gpg4win.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb9.png)

# Parte 7 – Encriptación de un mensaje

Encriptar un mensaje en gpg4usb es súper simple. En la ventana principal de gpg4usb habrá un cuadro de texto. Escriba su mensaje, haga clic en la casilla de verificación del destinatario a la derecha y haga clic en «Cifrar» en la parte superior. Su mensaje encriptado tomará ahora el lugar del no encriptado. Copia y pega esto y envíalo al destinatario.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb10.png)

# Parte 8 – Descifrar un mensaje

Una vez más, gpg4usb lo hace realmente fácil. Sólo tienes que pegar el mensaje que has recibido en el cuadro de texto y hacer clic en «Descifrar» en la parte superior. Ingrese su contraseña y su mensaje descifrado tomará el lugar del cifrado.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb11.png)

# Parte 9 – Conclusión

Si has seguido los pasos anteriores y has comprendido cada uno de ellos estás en camino a una mayor privacidad en un mundo que quiere invadirlo. PGP/GPG puede parecer complicado al principio, pero una vez que lo aprendas te reirás de ti mismo por pensar que fue tan difícil. Incluso si usted todavía piensa que es complicado o una pérdida de tiempo, sólo tenga en cuenta que tomar 60 segundos extras de su día podría salvarlo de cumplir 5 años o más en prisión.

![Cosmic radiation](https://raw.githubusercontent.com/GatoOscuro/fotos/main/usb12.png)



