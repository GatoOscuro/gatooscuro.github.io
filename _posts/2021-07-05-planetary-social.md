# Planetary Social - una más del montón

En la actualidad el mundo parece haber cambiado bastante su visión en torno a la seguridad y privacidad, pero, esto es del todo ¿bien? ¿en realidad hay un cambio? Pues, se supone que de cierta forma hay un cambio notable, no tan bien, pero lo hay. 

No sé si lo han llegado a notar, pero con el surgimiento de la tendencia de la "privacidad" por sectores específicos (personajes ex-fundadores de "x" proyectos que vendieron en su momento) se ha empezado a llenar el entorno de alternativas "seguras" y con las cuales por medio de mensajes bonitos atraen a los usuarios a sus "jardines privados". Es solo buscar en la Google Play "mensajería segura" y ver que hay de todo un poco, cosa que años atrás solo se destacó por los mismos de siempre **¿Y cuál es el problema?** Solo queda en la promesa, ser el proyecto más idealista posible, pintar todo un "jardín privado" cuando en realidad, de forma técnica, aplicar poco lo prometido. 

Esta breve introducción es solo para que entiendan el dilema actual frente una alternativa que **en realidad funcione** y pues, en este caso preciso vamos a analizar la "nueva red descentraliza" así es como lo pintan, cuando ya llevamos años viendo dicho despliegue de descentralización, en  fin, a ver.

# Plantary Social 

![Social](https://raw.githubusercontent.com/GatoOscuro/fotos/main/Screenshot_2021-04-19%20Planetary%20-%20Social%20media%20for%20humans%2C%20not%20algorithms%20.png)

Nada más comenzar y ya me parece demasiado idealista ¿qué tienen con los colores? Se nota el Marketing actual llenando las webs de frases bonitas, colores, inclusividad y un largo etc. No parece que nos estuvieran presentando un proyecto técnico sino más bien "un lugar bonito para ti, te entendemos" y si, partir de una red social donde va a ver mezclas de todo tipo, va dirigido a personas, si, pero también para ser su primer lanzamiento tendrían que ser más claros con su desarrollo aunque prefieren masticarlo todo para que el usuario final lo entienda/consuma. 

> "La descentralizada social red con miles de comunidades por y para la gente". 

Demasiado bonito para ser verdad.

> "Sea independiente: explore y únase a comunidades, ¡o simplemente cree la suya propia!
Planetary se trata de comunidades. Comparta lo que ama con personas de ideas afines y haga que la red se sienta más como usted.
Cree y desarrolle nuevas comunidades con su propio conjunto de reglas. Cada uno funciona como una red social independiente". 

Al parecer podrá funciona como una burbuja en donde tu perfil es un mundo aparte fuera de un "universo" existente, cosa que han logrado en otras redes sociales tipo Mastodon, con instancias/servidores específicos de "x" temática o ideología, cosa que allí le llamamos **Fediverso**

> "Experimente la libertad, practique la tolerancia y aprecie la diversidad de la humanidad". 

Muy bonito el mensaje, pero en la práctica puede diferir, aunque... sus principios son basados en Dweb y la verdad que desde hace algún tiempo me los había leído de forma completa y sí, parece ser una base demasiado estable para staff y desarrolladores, así controlar que no se les salga de las manos su proyecto. Además de que también tiene una mención especial hacia el usuario, para que sea consciente de lo que escribe y de su comportamiento "humano". En este caso preciso me convence la idea, código de conducta que le falto más a Mastodon, la red que se promovía la "libertad de expresión" sin tener en cuenta las implicaciones que tendría está frente a un público disperso que sé regia bajo sus mismas normas totalmente independientes, incluso, sin promover tanto la esencia de la misma.

Les dejó los principios que deberían ser aplicados a cualquier red descentralizada: (https://getdweb.net/principles/).

> "The social media browser
Piense en ello como el Mozilla Firefox de las redes sociales. Una herramienta que te permite descubrir e interactuar con cientos de redes sociales que existen en la web descentralizada.
El primer cliente convencional del mundo para una red social verdaderamente distribuida que no mantiene sus datos en la nube".

En esta sí que se saltaron dos pueblos ¿Por qué? Una por compararse con Firefox Jaja, tiene sentido ahora el tema de los colores y él acercase a las "personas" (han copiado su estilo) y otra por anunciar que se puede interactuar con cientos de redes sociales que existen en la web descentralizada... hmmm demasiado bueno para ser verdad, no tiene sentido, su particular protocolo descentralizado solo será compatible con las redes vinculadas, por lo tanto no serán "cientos" como anuncian, pero si algunas, igual no conectará con Mastodon, Friendica, Diaspora* y todas las redes sociales grandes descentralizadas ¿Por qué? Simplemente porque no incluyeron **Activitypub** en su proyecto (https://www.w3.org/TR/activitypub/) el mismo que usan las anteriores mencionadas para conectar entre sí y de esta forma federar el contenido. 

Aquí un artículo especial sobre dicho protocolo y sus redes sociales P2P: (https://boingboing.net/2017/04/07/bug-in-tech-for-antipreppers.html)

Lo decía en su momento  Nadim Kobeissi (@kaepora) autor de  Cryptocat (ahora ya discontinuada): 

"La lista de protocolos y estándares descentralizados / p2p / federados que ya existe es muy larga, incluso cuando el uso sigue siendo bajo. Los ejemplos existentes incluyen ActivityPub, Diaspora, Mastodon, p2p Matrix, Scuttlebutt, Solid y Urbit, por nombrar algunos". En consecuencia pasa que un proyecto descentralizado deje de conectar con el resto, por cuestiones de su propia "descentralización"/"federación", si escoges una, niegas el resto... cosa que se ha visto bastante cambiada con ActivityPub el cual ha logrado conectar grandes redes, tipo Peertube, Mastodon y demás. 


En su hilo de preguntas y respuestas podemos encontrar respuestas más concisas de las que aparecen anunciando en su web, acá vamos: 

> "¿Qué hay de diferente en el funcionamiento de Planetary?
Planetary se basa en el y lo utiliza protocolo seguro scuttlebutt . Es una primera red fuera de línea completamente descentralizada donde cada usuario usa un par de claves criptográficas para definir su identidad. Planetary o sus servicios no gestionan ni controlan sus datos"

Leyendo esto, cobra menos sentido su apartado que analizamos mucho más arriba, el de "El Firefox de las redes sociales" se hacen ver como los reinventores de la rueda, pero no, acá queda mucho más claro en que se basan directamente de Scuttlebutt como protocolo, básicamente se unen como un cliente para utilizar redes tipo Manyverse (https://www.manyver.se/)

**Si, cambian esto (captura de Manyverse):**

![Manyverse](https://www.manyver.se/static/screenshot2-262b5667893e2f3d7c3fa130b1cc2cbe.png)

**Por esto (captura de Planetary);**

![Planetary](https://assets.website-files.com/6018728d54553fe63fa157fe/6019949b0faabd321bddc34b_social-browser-img-p-500.jpeg)

**¿Lo mismo pero diferente?** Sin comentarios.


# En que se diferencia de Mastodon 

Las redes sociales federadas son excelentes en muchos sentidos, pero no son perfectas:

- En una red social federada, debe elegir a qué 'instancia' desea unirse cuando se registra, lo que a menudo es muy confuso para las personas.

- Una vez que se haya registrado, puede ser muy difícil encontrar a sus amigos, que pueden estar usando diferentes instancias

- Cualquiera puede ejecutar estas instancias y, si bien pueden establecer sus propias reglas, esas reglas a menudo no se aplican muy bien y, a veces, se ven abrumadas por la cantidad de mensajes con los que tienen que lidiar.

- Una vez que te hayas registrado en una instancia, si no te gustan las personas que la ejecutan o sus reglas, puede ser difícil pasar a otra y llevar todo tu contenido contigo.

- Su contenido aún se mantiene principalmente en servidores que pertenecen a otras personas y, si quieren eliminarlo, pueden hacerlo sin que usted pueda hacer nada al respecto.

Esto es diferente a las redes sociales descentralizadas donde tienes la versión definitiva de tu contenido, no tienes que saber nada sobre los servidores a los que estás conectado, todos tus amigos están en el mismo espacio y puedes cambiar a otra aplicación. o proveedor de servicios en cualquier momento sin que esto cause ninguna interrupción". Planetary, fuente: (https://planetarysupport.zendesk.com/hc/en-us/articles/360039199393-What-is-Planetary-the-FAQs)

Mi respuesta como usuario antiguo de Mastodon y demás redes federadas, es ... Hacen ver un problema menor como la gran cosa y no es así, el modelo de aprendizaje en dichas redes sociales es demasiado sencillo y más en la actualidad donde se han introducido diseños para la gente nueva en donde les muestran paso a paso como iniciar  y entender el panorama, no es como cuando yo comencé que no mostraba una m* y tenías que tocar para saber que era ¡discrepo!. Agrego; sí que coincido con "Las redes sociales federadas son excelentes en muchos sentidos, pero no son perfectas" pero muchos de los ejemplos presentados son demasiados "simples" y exagerados, a mi punto de ver. 

Lo mejor viene cuando salen con:

> "¿Puedo eliminar una publicación?
El protocolo Secure Scuttlebutt que Planetary usa un registro inmutable y no admite la eliminación. Esto es menos que ideal. Estamos trabajando en una solución a corto y largo plazo para esto. A corto plazo, permitiremos que los usuarios realicen publicaciones de tipo "retractación" en las que les pides a otros clientes que no muestren algo que escribiste. En realidad, esto no eliminará el contenido de su teléfono o el de sus seguidores, pero hará que sea menos probable que la gente lo vea.
A largo plazo, estamos trabajando para cambiar el formato de alimentación que usamos para Planetary para permitir una mejor eliminación. A esto lo llamamos el formato de alimentación de GabbyGrove que funciona en Planetary pero aún no en todas las demás aplicaciones de scuttlebutt. Sacará el cuerpo de cada publicación del registro de solo anexos firmado, lo que le permitirá validar un feed sin el cuerpo del contenido. Incluso entonces, no controlamos todo el software que admite scuttlebutt, por lo que no hay forma de exigir absolutamente que sus compañeros respeten sus solicitudes de eliminación".

Básicamente es un rotundo NO, se está trabajando para mitigar ello JE¡ JE ... demasiado práctico ¿eh? Paso de ello.

Aporte por parte de **Racuna**(https://socialhome.network/u/racuna/)

"En Scuttlebut no es posible borrar, y no creo que lo sea. Básicamente tu cliente genera un juego de llaves (algo así como un ID único por dispositivo), tu contenido se queda local y se distribuye entre los nodos que hayas agregado (como amigos o followers), entonces, si te inscribes en un pub, tu dispositivo sincronizará muchos posts de diferente gente.

Y ahi está el problema técnico. Si borraras o editaras un post, entonces tu cliente le pediría a los otros nodos que tienen copia de tu post que lo hagan. ¿Y qué pasa si uno de esos nodos está offline en ese momento? 

¿Qué pasa cuando alguien que no conoces postea contenido ilegal? tu dispositivo lo sincronizará, porque no hay algoritmos que filtren este tipo de contenido, ni admins, ni moderadores. Peor aún... no se pueden eliminar por las limitaciones del protocolo".

Gracias Racuna por esa parte que habia obviado, lo dejas demasiado claro :).

Para encontrar Pubs expresan: "Planetary y Secure Scuttlebutt se basan en una red de "pubs" descentralizados.

Si se une a Scuttleverse a través de Planetary, se suscribirá automáticamente a nuestros pubs principales, lo que hace que sea mucho más fácil encontrar y conectarse con otros usuarios. Si se une a través de una aplicación diferente, necesitará una invitación para unirse a un pub antes de poder ver a otros usuarios" ¿tiene sentido? Se supone que es lo mismo, no tendría que diferenciar en si uso o no tu cliente, tal y como lo describian con la libertad de uso y el control del usuario **mano a la cabeza**


# Conclusión

En fin, no sé sinceramente que pensar frente este analisis, ahi es cuando ves algo tan "bonito" pero en su interior la verdad que deja mucho que desear, al menos son transparentes con sus respuestas e información, por lo menos. En mi caso si le daré la oportunidad cuando me quede tiempo de probarlo a fondo, tanto con Manyverse o Planetary, si que merece echarle un vistazo por ser algo "diferente" y alternativo al resto de presentaciones privativas ya existentes, aunque no sea tan práctico como las descentralizadas libres que ya existen ¿por qué cumplicarse? Se hubieran basado en ActivityPub y muchos de sus problemas de practicidad se irian abajo, en ese caso si pudieran haber partido de tantos colores en su pagina de inicio, frente a una contrucción en base a algo grande, de lo contrario, lo dudo. 

La enseñanza es ir con cautela frente a todas estás alternativas que han surgido y seguiran surgiendo gracias a la tendencia de la "privacidad" puede que en ocasiones vengan con malas intenciones, quizás el propio caballo de troya; le puedes indentificar facilmente por ser tan idealista de **prometerlo todo y cumplir solo una pequeña parte de ello** ¡cuidate de algun backdoor! 

No sé si en algun momento se me ha olvidado escribir algo, si lo notas por favor hacermerlo saber... me he fijado menos porque he tenido poco tiempo para redactar este artículo antes de irme a trabajar :) . 

















