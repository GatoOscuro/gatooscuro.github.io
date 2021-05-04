---
layout: post
---

# ¿El mejor navegador para el uso diario?

- Introducción -
- Navegadores basados en Firefox -
-Mozilla Firefox -
-GNU IceCat -
-LibreWolf -
- Waterfox -
- Resumen -
- Navegadores basados en Chrome-
- Google Chrome -
- Iridium Browser -
- Edge -
- Otter Browser-
- Ungoogled-Chromium -
- Brave Browser -
- Dissenter Browser -
- Opera -
- Vivaldi -
- Falkon -
- Resumen -
- El héroe caído - Pale Moon -
- Web Browser -
- ¿Qué pasa con las actualizaciones automáticas? -
- Resumen -
- Tabla de Spyware -

Empecemos por lo básico ¿Para qué sirve un navegador web? Originalmente, era para poder leer documentos HTML, pero desde entonces, la Web ha cambiado enormemente y los navegadores modernos tienen que satisfacer más exigencias. El navegador básico de terminal - links, w3m, Lynx, elinks - puede seguir utilizándose hoy en día para visualizar sitios web sólo en texto. En realidad, elinks soporta características que de alguna manera faltan en los navegadores web "modernos" (como la edición de cookies, hojas de estilo personalizadas o keybinding), pero al final, todas ellas pueden recuperarse a través de complementos. El máximo de 256 colores, la ausencia de imágenes, el escaso o nulo soporte de Javascript, el limitado soporte de CSS, la imposibilidad de cargar contenidos no HTML como vídeos (aunque sí pueden cargarse externamente) y la ausencia de complementos hacen que no sean adecuados para la navegación actual.

Podría mencionar muchos otros navegadores aquí. Surf es un navegador web gráfico que tiene soporte para imágenes y Javascript, pero no tiene pestañas ni una interfaz de usuario real. Midori tiene todo lo que se puede esperar de un navegador web moderno e incluso incluye funcionalidad incorporada para reemplazar algunos de los complementos comunes, pero no es suficiente. Otter Browser es un proyecto prometedor con una interfaz de usuario muy agradable, pero no tiene soporte para complementos (hasta ahora, aunque está previsto). Qutebrowser es un navegador controlado por el teclado que recientemente ha añadido ajustes por dominio, pero son inferiores a los de uMatrix. Muchas de sus características pueden ser reemplazadas por, de nuevo, complementos, mejor conocido como addons.

Una de las ventajas de estos navegadores de nicho es que **no te espían** ,pero lo que he aprendido al probar probablemente todos ellos es que, al final los complementos son esenciales, especialmente uMatrix es insustituible. Así que, para un navegador del día a día, sólo tienes dos opciones: Firefox y Chrome/Chromium. Dado que todos admiten los mismos complementos (con una ligera excepción en Pale Moon), tendremos que utilizar algunos otros criterios para juzgar estos navegadores. Estos consisten en usabilidad, privacidad, personalización, filosofía, respeto al usuario, aspecto y rapidez. Analicemos uno por uno:

                        Navegadores basados en Firefox

                            **Mozilla Firefox**

Actualmente es el navegador de preferencia que utilizo y el que verdaderamente me ha satisfecho en mis deberes de navegación del día a día, aclaro que en el artículo original en inglés que posteriormente está basado este, se describia a Firefox de una manera muy terrible, demasiado tóxico porque claro, en sus versiones en la que fue originalmente basado el artículo era la 52 hacia atrás donde había muy malas prácticas (actualmente vamos por la 85), de hecho todavía en la actualidad se conservan malas prácticas por parte de un navegador que se identifica con la "privacidad" y "defensa del usuario", agregaré pequeños trozos del artículo original para que noten la diferencia.

"Las peores prácticas que se pueden evidenciar van desde tener motores de búsqueda por defecto anti-privacidad, mentir acerca de estar basado en la privacidad (https://spyware.neocities.org/articles/firefox.html), eliminar la compatibilidad de los addons, faltar al respeto a los colaboradores, darle a usted anuncios dirigidos, imponer el uso de cierto otro software y etc. Añade a eso la lentitud y la mierda de interfaz de usuario y tienes un navegador que nunca vas a querer usar. Actualización de agosto de 2020: Mozilla ha dejado claramente de preocuparse por la tecnología (https://blog.mozilla.org/blog/2020/08/11/changing-world-changing-mozilla/), y en su lugar se está centrando de lleno en cuestiones sociales - "Desde combatir un virus letal y luchar contra el racismo sistémico". Por si no fuera ya obvio antes, ahora han echado a 250 personas que trabajaban sobre todo en cosas técnicas como su motor de renderizado (Servo) o la seguridad del navegador. Sospecho que esto es una preparación para ceder el control del ecosistema de navegación web a Google en breve (como se predijo en Mozilla - Devil Incarnate, siempre fueron una oposición controlada). Dudo que ningún navegador basado en Firefox sobreviva a este apocalipsis, la verdad" Bastante fuerte lo descrito, sí... coincido en que se han dejado atrás la preocupación por la tecnología para estar más enfocado en problemas sociales que NADA tiene que ver con sus proyectos, pero el resto si que difiero porque fue basado en las versiones anteriores de Firefox y por defecto (sabes que tienes que modificar el about:config para tener una navegación segura) y lo de interfaz se siente la diferencia estando con el nuevo Quantum.

![Firefox](https://i.ytimg.com/vi/lR4Ls6GdET0/maxresdefault.jpg)

                               **GNU IceCat**

Es un fork de Firefox de la Free Software Foundation - con un enorme enfoque en la Cultura de Software Libre. Esto significa que no hay compatibilidad con Flash Player, así como un molesto addon LibreJS incluido por defecto. Las versiones anteriores tenían algo de spyware, pero la 60.2 lo ha eliminado todo por lo que veo. Algunos complementos de privacidad están incluidos por defecto, pero deberías usar uMatrix - aunque a los novatos les puede gustar tener algo de privacidad incorporada. Aunque está hecho por gente más ética, este navegador sigue sufriendo muchos de los males de Firefox - como la mierda de interfaz de usuario, la lentitud, la falta de configuración, los complementos obsoletos, etc. En definitiva, IceCat arregla muchos problemas de Firefox, pero deja otros más, y no puede ser de otra manera, ya que al final dependen totalmente de las decisiones de Mozilla. Los paquetes para la mayoría de las distros también no se proporcionan, así que tendrás que compilar si no quieres software demasiado viejo.

![GNU IceCat](https://upload.wikimedia.org/wikipedia/commons/8/86/GNU_IceCat_45.5.1_in_default_home_tab_page_screenshot.png)

                             **LibreWolf**

LibreWolf es a Firefox lo que Ungoogled-Chromium es a Chrome. La primera versión (Librefox) se consideraba simplemente un Firefox "mejorado" - hasta que fue matado por Mozilla (https://github.com/Librefox/Librefox.github.io/issues/1#issuecomment-459003210). Algunos miembros de la comunidad lo revivieron como un proyecto independiente esta vez. LibreWolf pretende solucionar muchos de los problemas que tiene vanilla FF: se compilará sin requisitos de telemetría, Pocket o pulseaudio. Todos los motores de búsqueda incluidos serán privados por defecto (no hay gran G) y no se harán peticiones no solicitadas. Al menos, ese era el plan, pero luego murió y estuvo inactivo durante mucho tiempo aparentemente hasta ahora (12 de marzo) - ¡así que estate atento a este espacio para las actualizaciones! Actualización 3 de abril: la nueva versión de appimage no tiene ningún problema aparte de que las listas para uBlock Origin se actualizan automáticamente. Claramente nada comparado con lo que está haciendo Firefox, pero LibreWolf es todavía dependiente de Mozilla - si empiezan a añadir más tonterías, eliminando las opciones de about:config, el soporte de userchrome.css (como estaban planeando hacer), el soporte de Alsa, etc. entonces los desarrolladores de LibreWolf tendrán que mantener esas características por sí mismos, y dudo que puedan seguir el ritmo con un poder de desarrollo tan pequeño, pero por ahora, es una buena alternativa a vanilla Firefox si realmente quieres basarte en él. Actualización agosto 2020: el equipo de desarrollo admite que tiene un problema (https://gitlab.com/librewolf-community/browser/linux/-/issues/124) con Mozilla despidiendo a sus empleados y tiene dudas sobre el futuro del proyecto.

![LibreWolf](https://learnubuntumate.weebly.com/uploads/1/0/8/4/108446579/librewolf-021_orig.jpg)

                                     

                                **Waterfox**

Otro navegador que pretende preocuparse por tu privacidad (https://web.archive.org/web/20181012154532/https://www.waterfoxproject.org/en-US/waterfox/features/private-browsing/) - "Nos obsesiona proteger tu privacidad. Por eso hemos hecho que la navegación privada de Waterfox sea más potente que la de los demás.", cuando en realidad Waterfox no hace nada en absoluto para protegerla y en realidad te espía casi tanto como Firefox (https://web.archive.org/web/20180909183536/https://spyware.neocities.org/articles/waterfox.html) (hizo 109 peticiones no solicitadas al ejecutarlo). El modo "más potente de navegación privada" también es una farsa - cualquier persona que se preocupe por su privacidad no confiará en esto sino que instalará complementos esenciales para la privacidad, así que sus engañosas afirmaciones están diseñadas para atraer sólo a los novatos. Este navegador es completamente dependiente de Firefox, tiene su interfaz de usuario de mierda y todos los demás defectos y ni siquiera se molesta en eliminar gran parte del software espía. Además, está dirigido por un solo desarrollador (que también es un mentiroso y odia la privacidad, como se ha demostrado anteriormente), así que no se sabe cuánto tiempo seguirá funcionando. Hay algunos aspectos positivos, sin embargo - Waterfox es el único navegador por ahí que soporta tanto XUL como WebExtensions, así como plugins NPAPI. Sin embargo, debido a todos los demás problemas, este navegador debe ser ignorado. Actualización de febrero de 2020: otra razón más para evitar Waterfox - ha sido vendido a una empresa de publicidad (https://old.reddit.com/r/privacy/comments/f3gqoc/privacy_browser_waterfox_appears_to_be_sold_to/), la misma que reclamó StartPage.

![Waterfox](https://dl1.cbsistatic.com/i/2017/09/27/39dd37d9-f81f-465f-800f-30fc2926457a/26891cdfd683f728fc9d788d32cc0de3/imgingest-8745504489606073024.png)

                                     Resumen

Firefox es terrible, pero se puede modificar para obtener un buen resultado, eso si, sus forks tampoco tienen mucho de qué enorgullecerse, como podemos ver. Aunque algunas de ellas eliminan (en parte o en su totalidad) los problemas de spyware, añaden los suyos propios o tienen algunos otros problemas, como la incompatibilidad de IceCat con Flash Player y la falta de actualizaciones, o la turbia propiedad de Waterfox. LibreWolf, el único proyecto con potencial real, ha sido abandonado y resucitado, pero todavía sólo unas pocas personas están involucradas. La otra razón más importante para evitar los navegadores basados en Firefox es que todos ellos siguen dependiendo de el "malvado" Mozilla que no le interesan los aspectos técnicos. Si algún día ceden oficialmente el control a Google (como ya está ocurriendo en todo menos el nombre [https://www.techspot.com/news/79672-google-accused-sabotaging-firefox-again.html]) - todo Internet será prácticamente tomado por una corporación aún más malvada. Lo he predicho en el informe anterior, pero era algo especulativo en ese momento. Ahora, es casi una certeza que sucederá en unos años. Actualización agosto 2020: Mozilla se está autodestruyendo (ver arriba) por lo que una web propiedad de Google podría ser pronto una realidad. Sabiendo esto, es obvio que los forks de Chrome no pueden ser mejores, pero comprobémoslos de todos modos:

                       Navegadores basados en Chrome

                           **Google Chrome**

Una plataforma masiva dedicada enteramente a recopilación de datos (https://spyware.neocities.org/articles/chrome.html)... pero al menos no pretende ser otra cosa, a diferencia de Firefox. Interfaz "moderna" animada (como Firefox), falta de personalización (sin configuración de proxy incorporada, incluso...), pocas funciones incorporadas, dependiente de la malvada empresa Google... Evitar como la peste.

![Chrome](https://www.google.com/chrome/static/images/heroes/browser_ntp.png)


                       **Iridium Browser**

Presentándose como "UN NAVEGADOR QUE ASEGURA SU PRIVACIDAD. ESO ES TODO", en realidad cumple con el reclamo aparte de algunos problemas de spyware que aún quedan. Específicamente, tu "Private Browser" hará una conexión con la Gran G cada 30 minutos para descargar su base de datos de Navegación Segura - qué broma. Los desarrolladores han reaccionado con desprecio (https://github.com/iridium-browser/tracker/issues/131) al problema, además de haber añadido disimuladamente más spyware reciente (https://github.com/iridium-browser/tracker/issues/237) - así que no creo que sean de fiar. Iridium no ha sido actualizado en mucho tiempo (es agosto de 2020, pero la última versión es de abril basado en Chromium 81 - en comparación con el 84 de Ungoogled-Chromium). No hay AppImage ni portable, lo que hace que la instalación sea un problema mayor. Este fue mi navegador de elección durante mucho tiempo (hasta que encontré el de abajo), pero no hace nada aparte de desactivar las conexiones automáticas - y ni siquiera todas ellas, en eso. Si quieres un navegador privado basado en Chrome, este es una opción mucho mejor:

![Chrome](https://d2.alternativeto.net/dist/s/iridium_335640_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false)

                   

                                         **Edge**
Reconstruido en 2019 para dejar de estar basado en EdgeHTML e implementar las bases de Chromium con moro  Blink y V8  diríamos que es uno de los navegadores más "recientes" y por ende "novedosos" de la época, pero no, básicamente una derivada de Chromium más que cambia colores/formas y reemplaza la telemetria de Google por la de Microsoft ¿quieres más? Bueno, hay más... para los aficionados a Microsoft les agradará saber que este trae a Cortana incorporado y demás accesorios de la propia Microsoft (implementación que le hace ver superior en cuanto al resto).

Eso no lo es todo, ha tenido 3 grandes recepciones dentro del público:

* El cambio de Microsoft a Blink como motor de Edge ha tenido una recepción mixta. El cambio aumenta la consistencia de la compatibilidad de la plataforma web entre los principales navegadores. Por este motivo, la medida ha suscitado críticas, ya que reduce la diversidad en el mercado general de los navegadores web y aumenta la influencia de Google (desarrollador del motor de diseño Blink) en el mercado general de los navegadores al ceder Microsoft su motor de navegador desarrollado de forma independiente ¿no podrían haberse basado en Servo u otro motor independiente? Mala idea (https://www.cnet.com/news/microsoft-rebuilds-edge-browser-on-chrome-tech-google-gains-web-power/).

* Según Douglas J Leith, profesor de informática del Trinity College de Dublín, Microsoft Edge es el navegador menos privado. En respuesta, un portavoz de Microsoft Edge explicó que utiliza los datos de diagnóstico de los usuarios para mejorar el producto (https://www.hindustantimes.com/tech/here-s-what-microsoft-said-when-a-college-professor-called-edge-least-private-web-browser/story-sNb6J3cq01zvn98Dx1jLnM.html).

* En junio de 2020, los usuarios criticaron las actualizaciones recién lanzadas de Windows 7, Windows 8.1 y Windows 10 que instalaban Edge e importaban algunos datos del usuario desde Chrome y Firefox antes de obtener el permiso del usuario. Microsoft respondió afirmando que si un usuario rechaza dar permiso a Edge para importar datos, entonces Edge eliminará los datos importados. Sin embargo, si el navegador se bloquea antes de que el usuario tenga la oportunidad de rechazar la importación, entonces los datos ya importados no se borrarán. (https://www.windowscentral.com/microsoft-edge-filching-firefox-chrome-users-data-heres-what-microsoft-says) The Verge calificó estas "tácticas de espionaje" y calificó la "experiencia de primera ejecución" de Edge como un "patrón oscuro".(https://www.theverge.com/21310611/microsoft-edge-browser-forced-update-chromium-editorial) (https://www.komando.com/news/microsoft-edge-caught-importing-data/743787/).

![Chrome](https://www.lifewire.com/thmb/BdTTrJzRJ1cjjyMq7aDaxJ6BBdQ=/1040x585/filters:no_upscale():max_bytes(150000):strip_icc()/edgebrowser-f742de5019904427b8ed4fb6a7baf14c.jpeg)


                                    **Otter Browser**
Otter Browser es un navegador web multiplataforma, libre y de software libre que pretende recrear aspectos de Opera 12.x utilizando el framework Qt, manteniendo una perfecta integración con los entornos de escritorio de los usuarios. Otter Browser está licenciado bajo GPLv3. Funciona en plataformas GNU/Linux, macOS, Windows, *BSD, Haiku y otros (la portabilidad es su mayor fuerte). 

¿Su motor? Es una envoltura totalmente, es entre Qt WebEngine, QtWebKit, bueno, cómo dice arriba es el framework de Qt que integra el resto de base de Chromium. De momento es uno de los navegadores qué más recomendaria, está fuera de polémicas y spyware los aportes que se pueden leer en su repositorio (https://github.com/Emdek/otter)

![Chrome](https://www.ghacks.net/wp-content/uploads/2019/01/otter-browser.png)



                               **Ungoogled-chromium**

A diferencia de Iridium, Ungoogled-Chromium realmente desactiva todas las conexiones automáticas y otras integraciones de Google. El dev es también un tipo realmente agradable y hábil (al menos no tiene problemas con la gente que reporta cosas - a diferencia de Pale Moon, o peor - Mozilla). Sin embargo, hay que tener en cuenta que el código base de Chromium es enorme, y es dudoso que este tipo pueda mantenerse al día durante mucho tiempo (por otra parte, él levanta parches de otros proyectos similares como Bromite, y tiene una base de usuarios útil). Sin embargo, lo está haciendo mejor que el equipo de Iridium, ya que su navegador está mucho más actualizado. Al final, Ungoogled-Chromium sigue siendo sólo un montón de vendas aplicadas a Chromium, y mantiene al Tío G en el control de la Web. No hay ninguna característica real añadida más allá de las correcciones de privacidad y algunas opciones CLI (https://github.com/Eloston/ungoogled-chromium/blob/master/docs/flags.md). Aun así, es seguramente el mejor fork de Chromium que existe si el monopolio de Google no te molesta. Los paquetes están disponibles sólo para unas pocas distros (además de Windows y Mac), pero afortunadamente, hay una AppImage así como una build portable que funciona en todas partes.

Agrego: Forks de Chromium, repositorios y demás acá: https://chromium.woolyss.com/

![Chrome](https://i0.wp.com/filecr.com/wp-content/uploads/2020/05/Ungoogled-Chromium-Free-Download.jpg?fit=836%2C484&ssl=1)

                             
                           **Brave Browser**

Este navegador ha dado que hablar gracias a sus protecciones de privacidad incorporadas -como AdBlock, HTTPS everywhere y bloqueo de scripts- pero al final, son superadas por uMatrix. Más que eso - después de comprobarlos, puedo decir con confianza que los escudos son bastante inútiles - la gran mayoría de los rastreadores se quedan solos; de hecho, a veces parece que un sitio puede tener cientos de ellos, y sin embargo ninguno de ellos será bloqueado por los escudos. La opción de bloqueo de scripts simplemente bloquea completamente el JavaScript - es simplemente NoScript revisado. Brave solía ser capaz de instalar extensiones de Chrome sólo desde la fuente, pero ahora lo hace igual que los otros navegadores basados en Chrome. A pesar de eso, no sólo te espía (https://spyware.neocities.org/articles/brave.html) sino que está trabajando activamente contra tu privacidad al poner en lista blanca a los rastreadores de Facebook y Twitter. ¡Brave también ha estado solicitando donaciones en nombre de otras personas sin su consentimiento!


![Brave](https://digdeeper.neocities.org/images/bravedonations.png)

![Chrome](https://www.247customerservicenumber.com/wp-content/uploads/2019/07/Brave-Browser.jpg)

Aquí (https://news.ycombinator.com/item?id=18734999) hay un hilo en el que se habla del tema. Actualización agosto 2020: desde que escribí esto, han salido a la luz más mierdas turbias de estos tipos. Por ejemplo, no sólo tienen fondos patrocinados (https://brave.com/introducing-sponsored-images-in-brave/) (¿recuerdas los Directory Tiles de Mozilla?) en su página de Nueva Pestaña, sino que también estaban ganando mucho dinero (https://archive.vn/cAGpe) con los enlaces de afiliados incluidos sin decírtelo (¡esto es ilegal y han bloqueado la conversación como era de esperar!) Más recientemente, les pillaron reescribiendo las direcciones web escritas para añadir referencias para varios socios. Brave Browser también tiene auto-actualizaciones (https://github.com/brave/browser-laptop/issues/1877) que no se puede desactivar, lo cual es extremadamente malicioso (completo con un tema cerrado, por supuesto - de manera similar a Mozilla). La única razón real para usar Brave es su llamado programa "Brave Rewards" con el que puedes ganar sus "Tokens de Atención Básica" a cambio de ver anuncios (mostrados como notificaciones del sistema). Esta es la trampa: para pagar sus tokens de atención básica, necesitas una cuenta en Uphold, cuya Política de privacidad dice lo siguiente (https://uphold.com/en/legal/privacy-policy):

*Para verificar su identidad, recopilamos su nombre, dirección, teléfono, correo electrónico y otra información similar. También podemos pedirle que proporcione Datos Personales adicionales con fines de verificación, incluyendo su fecha de nacimiento, número de identificación fiscal o gubernamental, o una copia de su identificación emitida por el gobierno

*La vigilancia del nivel de Facebook. Pero espera, esto no ha terminado:

*Podemos obtener información de terceros afiliados y no afiliados, como agencias de crédito, servicios de verificación de identidad y otros servicios de detección para verificar que eres elegible para usar nuestros Servicios, y asociaremos esa información con la información que recopilamos de ti. 

*También te acecharán por todo Internet para tratar de encontrar información ya existente. Todavía hay más violaciones en camino, así que siéntate y observa:

*Uphold utiliza Veriff para verificar su identidad determinando si un selfie que se toma coincide con la foto de su identificación emitida por el gobierno. La tecnología de reconocimiento facial de Veriff recopila información de tus fotos que puede incluir datos biométricos, y cuando proporciones tu selfie, se te pedirá que aceptes que Veriff pueda procesar datos biométricos y otros datos (incluyendo categorías especiales de datos) de las fotos que envíes y compartirlos con Uphold. Pueden utilizarse procesos automatizados para tomar una decisión de verificación.

Tan pronto como pienso que he encontrado el mayor violador de la privacidad posible, el frío martillo de la realidad me arranca esa estúpida idea de la cabeza. De todos modos - de nuevo - la única manera de pagar tokens de BATshit es utilizando este servicio. Incluso entonces, sólo puedes hacerlo una vez al mes y Brave sigue minando el 30% (https://brave.com/es/brave-rewards/) del mismo - "Ganarás el 70% de los ingresos publicitarios que recibimos de los anunciantes." Esto se presenta como una forma de revolucionar la industria publicitaria de Internet - "los intermediarios y los operadores de plataformas capturan la mayor parte de los ingresos publicitarios actuales, mientras crean oportunidades de distribución de malware y fraude publicitario. Brave Rewards pone patas arriba este sistema roto y ofrece un nuevo camino para el apoyo a los creadores." Sin embargo, la verdadera revolución se producirá cuando todo el modelo de negocio de la publicidad esté muerto y enterrado, o incluso mejor - cuando los creadores de contenidos no tengan que preocuparse por "ganarse la vida" porque el monstruo capitalista ha sido asesinado o, al menos, puesto a raya. Por ahora, sólo tienes que apoyar los sitios que te gustan directamente con Bitcoin, de forma anónima y en tus propios términos. Lo único que necesitas es un monedero y una persona a la que quieras donar.

                           
                   **Dissenter Browser**

Este fork de Brave ha sido creado literalmente en pocos días en respuesta a la reciente ola de censura de Twitter, Facebook, Mozilla, etc. Su reclamo a la fama es estar integrado con la extensión Dissenter (prohibida en las tiendas de extensiones de Firefox y Chrome (https://www.breitbart.com/tech/2019/04/11/google-mozilla-blacklist-gabs-dissenter-browser-extension/)) que permite comentar cualquier artículo de cualquier sitio web, saltándose sus políticas de censura. Bastante práctico. Para usarlo, sin embargo, tienes que registrarte en su red social, que requiere ReCaptcha (los desarrolladores han descartado el problema (https://github.com/gab-ai-inc/gab-dissenter-extension/issues/72)). Luego, para publicar un comentario, por supuesto tienes que compartir el sitio en el que estás con Dissenter, lo que, si se usa mucho, podría construir un perfil de tu historial de navegación. ¿Quién puede decir que no se quedarán con todos esos datos? Su política de privacidad (https://dissenter.com/about/privacy-policy), que consiste en una jodida frase, no dice literalmente nada sobre lo que recogen y comparten, así que puedes suponer que es todo con quien sea. En cuanto al navegador, contiene las mierdas habituales de Brave como Shields, whitelisted trackers y safebrowsing. Además de eso - cada vez que abres una nueva pestaña, Dissenter se conectará a un montón de sitios de noticias y youtube, así como a clearbit para descargar sus iconos; afortunadamente, esto se puede desactivar. Su sitio también es cloudflared, lo que significa que todo tu historial y comentarios serán compartidos con el gigante tecnológico malvado, haciendo MITM desde las sombras. En definitiva, este navegador no es más que una moda montada en el actual clima anticensura. De hecho, yo diría que es muy probable que sea un honeypot diseñado para recopilar el historial de navegación y comentarios de la mayor cantidad de gente posible y compartirlos con el gran centralizador (Cloudflare), para ayudar a crear finalmente una Internet totalmente controlada por las élites. La idea es bonita (y espero que alguien digno la repita) pero la ejecución no ha podido ser peor. ¡Huye de una puta vez más rápido de lo que lo harías de un perro rabioso y enfadado! Hablando de perros, el Spyware Watchdog tiene una revisión en profundidad de algunos otros problemas con Dissenter.

![Chrome](https://ph-files.imgix.net/8a70b6b0-cec2-4a49-930b-12e4ab0e75f4?auto=format&fit=crop&h=512&w=1024)

                                     **Opera**

Antes usaba un motor personalizado y era muy alabado por los usuarios, pero tras cambiar a Blink (motor de Chrome) abandonó la mayoría de sus funciones y dejó oleadas de usuarios insatisfechos. Unos años más tarde fue comprado por una empresa china que puso el clavo final en su ataúd. Olvídate de su palabrería de marketing de mierda como "Ahora con bloqueador de anuncios integrado, ahorrador de batería y VPN gratis." Opera te espía intensamente (https://spyware.neocities.org/articles/opera.html), incluso sobre todo tu historial de navegación. Integrado por defecto con plataformas de espionaje como Facebook, WhatsApp (propiedad de FB) y Telegram (aparentemente insegura según los criptógrafos). La VPN es muy probablemente un honeypot chino y uMatrix supera a todos los adblockers. Aunque tiene algunas características agradables como los gestos del ratón y la conversión automática de divisas, no hay mucha razón para usar nuOpera sobre los otros forks de Chrome. Evitar.

![Chrome](https://news-cdn.softpedia.com/images/news2/opera-45-launches-with-reborn-overhaul-inspired-by-opera-neon-concept-browser-515585-4.jpg)

                                    **Vivaldi**

Actualización: estamos en agosto de 2020, y nada ha cambiado para Vivaldi. Sigue siendo el navegador con más funcionalidades desde el primer momento (gestos del ratón, capturas de pantalla, paneles web, notas...) y presume de enormes cantidades de personalización (en cuanto a pestañas, marcadores, atajos de teclado que ningún otro navegador puede cambiar por defecto). Sin embargo, también sigue incluyendo un montón de spyware como Google SafeBrowsing y las actualizaciones automáticas. Pero su forma más atroz de violar la privacidad es esta:

*Cuando instalas el navegador Vivaldi ("Vivaldi"), a cada perfil de instalación se le asigna un ID de usuario único que se almacena en tu ordenador. Vivaldi enviará un mensaje mediante HTTPS directamente a nuestros servidores ubicados en Islandia cada 24 horas que contiene este ID, la versión, la arquitectura de la cpu, la resolución de la pantalla y el tiempo transcurrido desde el último mensaje.

Lo anterior no se puede desactivar aunque seas un ninja de la programación - ¡porque el código fuente de Vivaldi no está disponible! Su página de Nueva Pestaña está llena de sitios web de varios socios por defecto, incluyendo infractores como YouTube y Amazon - aunque afortunadamente puedes eliminarlos. El motor de búsqueda por defecto es el anti-privacidad Bing. La protección contra el rastreo está incluida pero está desactivada por defecto. No parece que Vivaldi se preocupe demasiado por la privacidad - también es código cerrado. La única gracia salvadora es la enorme cantidad de funciones, que por supuesto es significativa - pero la mayoría de ellas pueden ser reemplazadas con extensiones en los navegadores que las soportan. También llega un punto en el que un software intenta hacer demasiado - y Vivaldi podría haber cruzado ya ese puente. Pero al menos es algo diferente comparado con todos los navegadores que son "multi-funciones".

                                           **Falkon**
Falkon (anteriormente conocido como "QupZilla") es un navegador web de software libre construido sobre el marco Qt. Utiliza el componente QtWebEngine de Qt (el motor Blink de Chromium) para renderizar las páginas web. Falkon soporta temas, publicidad y filtros de basura web y plugins de python (dependiendo de cómo se haya compilado). Tiene algunos problemas de usabilidad muy fundamentales por lo que no es muy adecuado como navegador web de uso diario. Podría convertirse en una buena alternativa a Firefox y Chrome/Chromium.

El QtWebEngine que utiliza Falkon para renderizar páginas es sólido cuando y renderizará páginas web correctamente. Falkon tiene un gran potencial y podría, con mucho trabajo y esfuerzo, convertirse en un verdadero rival para Mozilla y Chromium en el escritorio de Linux. Ahora mismo no lo es.

![Chrome](https://es.wikipedia.org/wiki/Falkon#/media/Archivo:Falkon_browser.png)


                                        Resumen

La situación de los forks de Chrome es mejor que la de los de Firefox: hay más y se actualizan más habitualmente. Tenemos más variedad en cuanto a características, addons incluidos, aspecto, filosofías, etc. Pero parece que falta algo. Los que tienen más características introducen sus propios problemas, como el spyware personalizado, la publicidad falsa, la falta de ética, incluso menos velocidad, o los cuelgues. Los que eliminan todo el spyware no introducen nada nuevo. Y todas siguen dependiendo del motor Blink (y por tanto de Google). Y como Google sigue incluyendo cambios antiusuario, los forks tendrán que eliminar/modificar aquellos en el código, lo que algunos de los equipos más pequeños podrían no ser capaces de seguir eventualmente ¿Es eso? ¿Estamos realmente atascados en tratar desesperadamente de parchear las grandes abominaciones de corpo Google?

![Chrome](https://1.bp.blogspot.com/-Rcp81eauk8A/VMeDYjZJ9FI/AAAAAAAAVVA/pyPRnMdyUHw/s1600/vivaldi-browser.png)

                      **El héroe caído - Pale Moon**

Solía ser jodidamente bueno - y todavía tiene varias ventajas sobre FF / Chrome como el desarrollo independiente, la falta de algunas antifunciones, menos vulnerabilidades, soporte de addons XUL, mejor UI, código base más pequeño, y más personalización. Sin embargo, recientemente se ha desviado tanto que ya no puedo llamarlo en conciencia una "alternativa" a nada. Permítanme dar algunos ejemplos:

*Bloqueo de la extensión AdNauseam (https://forum.palemoon.org/viewtopic.php?t=16504) debido a que supuestamente causa "daños económicos" a los sitios web. Pero en realidad, son los anuncios y los rastreadores los que están causando daño humano y si extensiones como AdNauseam ayudan a matar la "economía" basada en ellos, deberían ser alabadas en lugar de prohibidas. Volver a habilitar AdNauseam requiere toquetear about:config.
    
 *NoScript fue otra extensión añadida a la lista de bloqueos con el "fundamento" de que rompe sitios (así es como logra su seguridad y otros beneficios - igual que uMatrix o los adblockers). Hay una gran advertencia aterradora (https://blocklist.palemoon.org/info/?id=pm112 pero, afortunadamente, se podía seguir usando la extensión.
 
*El sitio web de Pale Moon (incluyendo el complemento de búsqueda integrado en el navegador) está detrás del malvado Cloudflare MitM. El lead dev amante de CF piensa que está bien (https://codeberg.org/crimeflare/cloudflare-tor/) que la gente sea violada por CF sin ser notificada (o peor, sin una forma de resistir) y va por ahí compartiendo ese mensaje.

*También odia la red TOR (https://web.archive.org/web/20200830145852/https://forum.palemoon.org/viewtopic.php?p=107793) porque las personas que la utilizan se atreven a proteger sus identidades o a enfrentarse a sus gobiernos opresores.

*Un colaborador creó una copia de seguridad de los documentos XUL de Mozilla (que quieren borrar en diciembre de 2020) y fue apodado insecto (https://web.archive.org/web/20200830035537/https://forum.palemoon.org/viewtopic.php?f=62&t=25086) todo ello por Tobin, el otro desarrollador principal.
 
*También está insultando a los colaboradores de toda la vida incluso en los mensajes de commit por razones de peso (https://archive.vn/cJoya).

 *Ambos han acosado a los empaquetadores de OpenBSD (https://github.com/jasperla/openbsd-wip/issues/86) porque querían usar librerías de sistema que estarían "desviándose de la configuración oficial" - algo que los devs de PM odian. 

*También hardcodean los parámetros del compilador, especialmente con libvpx para usar opcodes específicos en lugar de usar lo que el usuario o el sistema operativo establezca ${CFLAGS}/${CXXFLAGS}, rompiendo la portabilidad con diferentes CPUs y sistemas operativos.

 *Y la cereza del pastel: ahora han empezado a prohibir las descargas directas de addons (https://forum.palemoon.org/viewtopic.php?f=17&t=25145) - para consternación de muchos (https://web.archive.org/web/20200907063313/https://forum.palemoon.org/viewtopic.php?f=3&t=25163) usuarios (https://web.archive.org/web/20200907063630/https://forum.palemoon.org/viewtopic.php?f=3&t=25162). Tobin ha llamado a querer tener realmente el control sobre sus extensiones "tendencias obsesivas de rata de carga.." y Moonchild siguió con "adicción al acaparamiento". Ahora contrasta esa actitud con las citas de su página principal - "Tu navegador, a tu manera" o "ofrecer una personalización total". ¿No te suena esto ?
    
Actualización Nov 2020: la gota que colmó el vaso: la eliminación del agente de usuario global personalizado. Mientras que los otros cambios maliciosos pueden ser algo justificados con algún razonamiento retorcido, este es absolutamente imposible sin ir directamente en contra de los objetivos declarados de Pale Moon, como la personalización (la página principal lo menciona tres veces). Verás, Moonchild piensa que la anulación global es "una terrible escopeta de Web Compat" a la que los usuarios no deberían tener acceso. Por supuesto, de alguna manera está bien permitir la configuración de UA por sitio o solicitud, a pesar de ser terriblemente ineficiente. Incluso entonces, una UA global personalizada realmente ayuda a la compatibilidad web al pasar desapercibida por esos sitios que husmean la UA (que no dejarán de existir pronto). Sin embargo, todo esto no viene al caso - lo que importa es que los usuarios deberían poder dispararse en el pie si así lo desean, y este reciente cambio va en contra de eso. En aras de la honestidad, permítanme decir que Moonchild revisó el cambio - pero sólo debido a la enorme reacción (archivo) en los foros. El hecho de que esto haya sido una idea en su mente aunque sea por un segundo demuestra que le importa una mierda la libertad, la personalización o el respeto al usuario.

Y con esto, es evidente que Pale Moon es un barco que se hunde. Hace unos meses he dicho que el navegador está en "fase inicial de degradación". Ahora, el estadio está claramente avanzado, el cáncer ha hecho metástasis y ya no se puede extirpar. Pale Moon se ha convertido exactamente en lo que han combatido durante tanto tiempo: Mozilla-lite. Sigue siendo un software bastante bueno (y el único decente para navegar por la web moderna) - pero uno que no puedo recomendar más debido a que viola los principios más importantes (que durante años lo han definido). Entonces, ¿qué hacemos ahora que el gigante se ha suicidado?

                                    Navegador web

Si te preocupan los problemas de Pale Moon, debes saber que uno de los miembros de nuestro chat de la comunidad está desarrollando un fork llamado Web Browser que se centra en la estabilidad, la privacidad y la personalización incluso más que su predecesor. Pale Moon todavía tiene auto-actualizaciones, OCSP y algunas otras peticiones no solicitadas por defecto - así como una lista de bloqueo de extensiones. Web Browser carece de los problemas de PM (no hay conexiones automáticas o una lista de bloqueo de extensiones) o está en proceso de arreglarlos (usando librerías del sistema en lugar de incluir las propias, deshabilitando WebAssembly por defecto). Hay un paquete NixOS y un SlackBuild (archivo) con soporte para otros sistemas operativos próximamente (o puedes compilar desde el código fuente). El tipo está buscando desarrolladores adicionales, así que ve a ver el proyecto si quieres ayudar.

     ## ¿Qué hay de malo en las actualizaciones automáticas?

Todo es malo con las actualizaciones automáticas, básicamente estás dando a quien controla las actualizaciones el control total sobre tu software y datos, con las actualizaciones automáticas es posible:
*Insertar puertas traseras, spyware y malware.
*Añadir características innecesarias.
*Eliminar características.
*Apuntar a un solo usuario con mierdas como las pruebas A/B, tratando a la gente como conejillos de indias.
*Hacer cambios no deseados, como los temidos cambios en la interfaz de usuario.
*Cerrar el contenido tras los muros de pago
*Cualquier otra cosa que los desarrolladores maliciosos quieran hacer contigo.

La autoactualización siempre se ha usado para mal, su propósito siempre fue quitarle el control al usuario, actualizar SIEMPRE debe ser una opción. 

Fuente: https://www.nanochanpwz3xnue76gteysv6wjm5sim3bbcm2lc65x625at774k77qd.onion/g/9174.html#11287

                                     **Resumen**

Yo diría que la solución a todo ello es Firefox totalmente modificado desde about:config y las extensiones, sus forks antes de mejorar reemplazan los problemas para colocar los propios suyos y peores. Por el otro lado, Chrome y sus forks son todo el monopolio de vigilancia masivo que utiliza USA para controlar al "user"/"usado" promedio y sin darte cuenta ya te tienen en su lista. Agrego la frase que más me encanto de este artículo ¿Qué hacemos ahora que el gigante se ha suicidado? No hay opción.

Opinión del artículo original: Palemoon sigue siendo la única forma decente de navegar por la web moderna que es realmente relevante - pero se está pudriendo lentamente desde dentro. Firefox se está muriendo y pronto derribará todas sus bifurcaciones junto a sí mismo, entregando la Web a Google, cuya abominación de navegador es igual de inútil. Proyectos prometedores como Otter Browser o suckless surf sufren de pequeños equipos de desarrollo, sin / bajo soporte de addons y no tienen sus propios motores - por lo que dependen de Google / Apple, de todos modos. La única opción razonable es Pale Moon hasta que Web Browser reciba más apoyo. O, simplemente trata de destetarte de la web moderna, pegándote a sitios web como los de Neocities, wiby.me, etc. que son funcionales en NetSurf o navegadores de terminal. Odio matar la positividad de otro resumen más, pero si la realidad me obliga... qué le voy a hacer... 

PD: Agradezco a DigDeeper por dejarme modificar su artículo base y como no, colaborar con la traducción (disponible también en su sitio, https://digdeeper.neocities.org/ghost/browsers_sp.html). Saludos. 

**Conclusión Febrero 18/2021** :  No todo está pérdido, aunque el mercado lo vaya ganando Google por parte de Chrome/Chromium pasa que aun sigue existiendo un pequeño nicho dirigido a geeks en busqueda de su privacidad en línea, por lo tanto navegadores como Otter Browser, Falkon, LibreWolf y otros tantos pueden salvar el día (o un Firefox modificado). 

     
                                     **Tabla de Spyware**
![GNU IceCat](https://cdn.mastodon.la/media_attachments/files/105/759/006/626/542/627/original/8d2052f60414f115.png)






