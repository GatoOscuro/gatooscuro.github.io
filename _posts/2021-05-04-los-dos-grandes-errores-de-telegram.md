---
layout: post
---

# Los dos grandes errores de Telegram

Telegram es una aplicación de mensajería segura y libre (gran parte de su código esta abierto). Además es la mejor alternativa a otras aplicaciones de mensajería como WhatsApp y Messenger, esto por su enfoque a la privacidad, productividad, seguridad, libertad y etc.

Sabiendo un poco de los mejores datos positivos de Telegram ¿qué podría salir mal? Solo dos cosas, desde mi punto -cabe aclarar- y son los siguientes:

# No tener el cifrado end-to-end por defecto

Básicamente la excusa oficial y en resumidas cuentas es: «Poder hacer respaldos y tener todos tus chats en cualquier momento y en cualquier dispositivo gracias a la nube. Además de ser aceptada en amplios círculos, no sólo por activistas o disidentes, y que de este modo el hecho de usar Telegram no marque a los usuarios como objetivos de una mayor vigilancia en ciertos países». Esta es la excusa oficial por parte de Telegram, es válida pero no tanto.

El problema es que para poder tener un cifrado end-to-end y enviar mensajes seguros tienes que dirigirte especialmente a un chat secreto con el receptor. Además de que esta opción solo esta disponible desde el móvil y no desde el ordenador (no aun en el cliente oficial), esto hace que en repetidas ocasiones puedas cometer el error de enviar el mensaje confidencial por el canal normal en vez del chat secreto o viceversa; un lío enorme.

La parte de la excusa que me parece sobrante es: donde dice que lo hacen para que los usuarios no sean objetivos de una mayor vigilancia en ciertos países, lo peor es que sin tener los chats end-to-end por defecto ya ha sido prohibida en ciertos países y bastante vigilada en x territorio; una excusa sobrante. Por otro lado, es el punto que no me molesta tanto y lo pensé mucho en si agregarlo o no porque a la hora de la verdad para algo bastante confidencial he de recurrir a otra aplicación. Además entiendo el argumento de tener todo a la mano y en cualquier dispositivo, algo que se agradece y esta bastante bien.

# Bots no tan seguros

Es quizás la característica más atractiva de Telegram y la más espeluznante (relativamente en cuanto a privacidad) en resumen: es un arma de doble filo ¿Por qué? Vamos a ver por donde comienzo… hace un tiempo buscando entre gran cantidad de bots para x funcionalidad veía que algunos tenían cierto comportamiento extraño, no parecían del todo automatizados y lo que faltaba, un amigo de Telegram AlienGendro me comento sobre aquella funcionalidad y era usar un bot como un intermediario o bueno, hacerse pasar por bot pero en realidad ser tú ¿Cómo es esto? Fácil, ir al BotFather y «crear» un bot con el cual obtendremos el token de dicha API para bots, luego simplemente toca descargar un cliente adaptado con el que puedas ingresar como bot con el acceso token, un ejemplo de ello es el cliente PWRTelegram, ese fue el cliente que use para probar y comprobar que fuera cierto lo que me mencionaba aquel amigo y si, funciono.

Esto me lleva a la siguiente conclusión: Es una arma de doble filo como he mencionado al principio, pero va más allá, puede ser una vulnerabilidad que se puede aprovechar fácilmente para fines no correctos ¿Ejemplos? Qué tu bot sea uno más del montón que tiene como finalidad x funcionalidad y para ello se necesite cierta información que previamente el usuario va a facilitar y obviamente estará cayendo en una trampa. Ese quizás sea un ejemplo bastante exagerado, vamos con uno más fácil de creer, ser usado para capturar chat/información ¿Cómo? Ingresar ese bot malicioso a determinado grupo y listo, dejarlo allí, todo lo que se envié (texto y multimedia) quedará guardado en el bot; esto para una conversación «confidencial» puede ser una gran molestia porque se puede filtrar información y ni idea de quién fue. Además de que hay grupos que no tienen protección (bots moderadores) y esto permite ingresar este tipo de bots maliciosos a aquellos grupos.

Desde que se está información desconfió de cualquier bot en Telegram ya que no sabes a quién le estás facilitando tus datos, la solución es usar solo bots reconocidos y con su código libre (hay varios para moderación que tienen toda la documentación correcta). Por otro lado, parece ser que Telegram sabe que tener la API de bots abierta se puede aprovechar para ciertas cosas maliciosas y esto es lo que dicen en su página oficial: «Naturalmente, cualquier bot tiene que ser tratado como un extraño; no les entregues tus contraseñas, códigos de Telegram o números de cuenta de bancos, aunque pidan esos datos amablemente».

Aun así solo son dos problemas que a la hora de la verdad no son un problema (si, un poco loco lo que acabo de escribir) simplemente quería documentar estas dos características que me parecen un poco negativas, pero aun así Telegram sigue teniendo infinidad de cosas positivas y es por ello que lo uso día a día. Además de dejar las fuentes pertinentes, dejó también dos artículos para saber lo mejor de Telegram. 

**Nota** Es un pequeño resumen en donde salen las dos grandes desventajas, pero en realidad tiene muchisismas más como su servidor propietario y que no lo liberen por temor a que se modifique el código para el mal (sólo excusas) y muchas más promesas qué solo quedarán por ahi... por ello, apostar a XMPP o Matrix. 

![Cosmic radiation](https://i2.wp.com/hipertextual.com/wp-content/uploads/2015/09/bots-telegram.jpg?resize=610%2C471&ssl=1)
