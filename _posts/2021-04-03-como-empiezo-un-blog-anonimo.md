---
layout: post
---

# ¿Cómo empiezo un blog anónimo?

Llevar un blog anónimo puede ser increíblemente fácil, o puede ser increíblemente difícil, dependiendo de lo que entiendas por "anonimato".

# La parte técnica

Si no quieres que tus lectores sepan quién eres y no te preocupa que la policía o los gobiernos te espíen, la forma más sencilla de hacerlo es dirigirte a Tumblr , Medium, WordPress, incluso WriteFreenly, Plume y registrarte con una dirección de correo electrónico que sólo se utilice para dichas plataformas. Siempre que no reveles tu identidad o tu ubicación en las publicaciones de tu blog (más adelante se hablará de ello), el usuario medio probablemente encontrará que esto funciona lo suficientemente bien.

Si quieres aumentar tu nivel de anonimato, sólo inicia sesión en el correo electrónico y en las cuentas de dichas plataformas mientras utilizas una VPN o el Navegador Tor. Estos enrutarán tu conexión a través de otros lugares del mundo para ofuscar tu ubicación/identidad. Tor hace un mejor trabajo en esto, pero te animo a leer más sobre las diferencias entre los dos aquí).

Por otro lado, si quieres un anonimato fuerte, hasta el punto de que sólo los actores más poderosos y dedicados, como la NSA, serán capaces de desanonimizarte, entonces tu próximo curso de acción dependerá de tu capacidad técnica. Si no eres un experto en tecnología o no sabes manejar un sistema Linux/Unix, entonces querrás usar un sistema operativo conocido como Tails siempre que trabajes en tu blog.

Tails arranca desde una memoria USB, y está especialmente diseñado para proporcionar seguridad y anonimato de forma sencilla en la que se dificulta dispararse en el pie. Está basado en Debian (Linux), y enruta todo el tráfico de Internet de su ordenador a través de Tor, un paso significativo desde el Navegador Tor que sólo enruta el tráfico del navegador a través de Tor. Además, Tails incluye herramientas para ayudarte a mantener el anonimato, como el Metadata Anonymization Toolkit, un pequeño programa que limpia cualquier información de identificación, como nombres de autor y fechas de modificación, de los archivos. Por último, Tails olvida todo lo que has hecho durante tu sesión después de apagarlo.

Si eres un experto en tecnología, entonces usar Whonix dentro de QubesOS es probablemente tu mejor opción. QubesOS es un sistema operativo que separa tu vida digital en diferentes máquinas virtuales, y Whonix es su propio sistema operativo que está hecho específicamente para correr dentro de máquinas virtuales (VMs).

Lo que hace Whonix es que ejecuta una VM, conocida como el Gateway, que enruta todo el tráfico de otra VM, conocida como la Estación de Trabajo, a través de Tor; el Gateway es puramente para el enrutamiento, mientras que la Estación de Trabajo es donde usted realmente hará el trabajo. El beneficio de esto es que si la VM de la Estación de Trabajo se infecta con malware, seguirá siendo muy difícil desanonimizarte, mucho más que si estuvieras usando Tails. De hecho, la desanonimización requeriría salir de la máquina virtual, lo que no es una tarea sencilla.

Una última consideración es si te preocupa la censura. En otras palabras, ¿escribes sobre algo que podría llevar a Medium, Tumblr, WordPress, WriteFreenly, Plume a cerrar tu cuenta, o podría llevar a un gobierno a bloquear el acceso a tus escritos? Aunque esta cuestión se sale un poco del ámbito de este artículo, debes saber que para protegerte de la censura no sólo tendrás que crear tu propio servidor web, sino también un servicio oculto. Un servicio oculto es un sitio web que existe sólo en Tor o I2P. 

# La parte difícil: La seguridad operativa

Sin embargo, no importa qué solución técnica despliegue, mantener un anonimato fuerte requiere que no se revele en lo que escribe. Esto es difícil. Muy difícil. Basta con unos pocos datos de identificación para saber quién es alguien. Hace algunos años, Bruce Schneier escribió un artículo que explica bien esta cuestión a través de la lente de la anonimización de datos (https://archive.wired.com/politics/security/commentary/securitymatters/2007/12/securitymatters_1213).

> Utilizando datos públicos anónimos del censo de 1990, Latanya Sweeney descubrió que el 87 por ciento de la población de Estados Unidos, 216 millones de 248 millones, podría identificarse de forma exclusiva por su código postal de cinco dígitos, combinado con su sexo y fecha de nacimiento. Alrededor de la mitad de la población estadounidense es probablemente identificable por su sexo, fecha de nacimiento y la ciudad, pueblo o municipio en el que reside la persona. Si se amplía el ámbito geográfico a todo un condado, la cifra se reduce a un 18%, que sigue siendo significativo. "En general", escribieron los investigadores, "se necesitan pocas características para identificar de forma exclusiva a una persona".

En otras palabras, si se combinan varios puntos de datos sobre alguien, se puede acotar su posible identidad de forma significativa, independientemente de que se tenga su nombre. Si escribes un post que menciona tu cumpleaños, otro que menciona tu sexo o género, otro que menciona tu estado o provincia, y quizás varios que revelan implícitamente tu orientación sexual, puede que seas identificable.

Además, incluso la forma de escribir puede revelar quién eres. La estilometría  (https://en.wikipedia.org/wiki/Stylometry) es esencialmente el estudio de las tendencias únicas de la escritura de una persona, de manera que pueda ser identificada. Esto se está volviendo cada vez más poderoso a medida que los algoritmos de aprendizaje automático mejoran, y resistirse a ello cambiando tu estilo de escritura no es fácil.

La lección de este apartado es que debes ser muy cauteloso con lo que escribes y con la información que revelas en tu blog. En cada palabra que escribes, dejas una pista de quién eres, y esto es lo más importante a tener en cuenta si intentas ser anónimo. Así que, aunque la tecnología que utilizas para proteger tu identidad es importante, es vital que no reveles quién eres de otras maneras.

![Cosmic radiation](https://www.thetinhat.com/blog/assets/anonymous-blog-thumb.jpg)
