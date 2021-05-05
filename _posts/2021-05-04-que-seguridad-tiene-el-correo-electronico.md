---
layout: post
---

# ¿Qué seguridad tiene el correo electrónico?

No mucho, pero para entender por qué hay que desentrañar los distintos puntos en los que el correo electrónico podría ser interceptado.

Imagina que envías un correo electrónico a alguien. En primer lugar, el correo electrónico tiene que viajar desde su ordenador hasta su proveedor de correo electrónico (Gmail, por ejemplo). El hecho de que pueda ser interceptado aquí por tu ISP o por un hacker en una red WiFi pública depende de si tu proveedor de correo electrónico permite el cifrado. Si utilizas el correo electrónico en el propio navegador, comprueba si aparece el candado verde en la barra de URL. Si está ahí, está encriptado. Si utilizas IMAP/POP3, mira en la configuración de tu cliente de correo (Thunderbird, por ejemplo) y comprueba si está configurado con SSL/TLS, STARTTLS o Ninguno. Si es este último, no está cifrado.

Una vez que el correo electrónico llega a tu proveedor de correo electrónico, se guarda en sus servidores. A menos que utilices Protonmail o Tutanota, que están especialmente diseñados para protegerte de esto, tu proveedor de correo electrónico puede leer todo tu correo. Por lo general, confiamos en nuestros proveedores de correo electrónico, pero basta con que un empleado sin escrúpulos, un pirata informático o una orden judicial hagan que tus correos electrónicos queden expuestos a personas no deseadas.

Ahora, el correo electrónico se envía desde tu proveedor de correo electrónico al proveedor de correo electrónico del destinatario, momento en el que se repiten la primera y la segunda áreas de riesgo (si el correo electrónico está cifrado en tránsito y si el proveedor de correo electrónico es de confianza y seguro). Este es un problema difícil de resolver en lo que respecta a la seguridad del correo electrónico; no importa lo seguras que sean tus propias prácticas de correo electrónico, la persona con la que te comunicas puede violar tu privacidad con prácticas de seguridad más laxas.

Otro problema de privacidad del correo electrónico que vale la pena mencionar es que, por defecto, tu dirección IP (ubicación) se estampa en cada correo electrónico que envías. Aunque la mayoría de los proveedores de correo electrónico lo eliminan, no todos lo hacen, así que asegúrate de que tu proveedor lo haga si te preocupa esto.
Mejorar la seguridad del correo electrónico

Sin entrar en demasiados detalles, hay varias maneras de mejorar la seguridad de tu correo electrónico. En primer lugar, activa la autenticación de dos factores, que hará que tu cuenta sea mucho más difícil de piratear.

En segundo lugar, prueba el cifrado PGP. Aunque es un poco difícil de usar, PGP encriptará todos tus correos electrónicos de extremo a extremo, lo que significa que no necesitas confiar en tu proveedor de correo electrónico en absoluto. Ten en cuenta que PGP no protege a quién y cuándo envías un correo electrónico, ni tampoco el asunto. Además, la persona con la que te comunicas también tendrá que usar PGP, lo que hace que esta opción sea menos factible para muchos.

Por último, si quieres ir al grano y no sólo obtener un cifrado de extremo a extremo, sino también ofuscar significativamente todos los metadatos (con quién estás hablando, desde dónde y cuándo), entonces echa un vistazo a mi tutorial sobre I2P e I2P-Bote. Al igual que PGP, requiere que la persona con la que te estás comunicando también utilice I2P-Bote, pero esta compensación es un poco más fácil de manejar dado el importante anonimato y seguridad que proporciona.
