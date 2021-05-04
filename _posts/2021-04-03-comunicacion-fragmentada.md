---
layout: post
---

# Comunicación fragmentada

Hilo de conversación surgido en Mastodon: https://mastodon.la/@gatooscuro/105670631614875915

Pensé que el tema de puentes (bridges) de Matrix eran sencillos, tipo los de Telegram, pero no... al parecer está dirigido hacia los usuarios avanzados ¿y qué problema hay? Según lo que nos comparten en su sitio https://matrix.org/bridges/ Matrix viene a darle esa seguridad a todos por culpa de la fragmentación, qué es teniendo todas las conversaciones en un sólo lugar siendo algo "transparente" y de forma segura qué es no abandonar tu espacio Matrix, pero... el GRAN problema en el que recae es que es demasiado complicado, el usuario medio qué debería ser el identificado, no lo entiende y no lo podrá aplicar así siga la Wiki escrita por aquel programador que anda en aquel entorno hace 6 años, absolutamente no.

“Mi teoría de mascotas alrededor de por qué el negocio se hace mucho más rápido en China: porque sólo hay un canal para todo — WeChat. No hay confusión sobre cómo ponerse en contacto con alguien. Un desplazamiento hacia WeChat hace que sea fácil introducir amigos entre sí. Voz y videollamadas sólo funcionan. Y porque el default es chat, no email, todos envían mensajes más cortos, responde rápidamente y mantiene su bandeja de entrada a cero. ¡Quiero ese mundo! Menos los jefes autoritarios leyendo todos tus mensajes” traducción Beeper aplicación. 

En general, hay dos tipos distintos de personas:
-Siloed — Las personas que solo utilizan una red de chat (por ejemplo iMessage) y obligan a otras personas a utilizar su red preferida para ponerse en contacto con ellos.
-Ambi-social — Estas personas usan muchas redes de chat, tienen 5+ aplicaciones de chat en su teléfono, necesitan hacer un seguimiento de qué amigos están en la red para que saben cómo contactarlos.

El sólo hecho de ver la documentación del bridge de Matrix y WhatsApp me hizo echar una mirada a otro lado, en lo absoluto, no, demasiados procedimientos ❎ 
Creó y lo voy a probar, qué sale más fácil hacer el brige desde WhatsApp-Telegram (creó que he leído una forma) y después Telegram hacia Matrix ¿por qué no centralizar todo en Telegram? 🤔 Se supone que es para detener esa fragmentación de todos nuestros espacios "seguros" de una forma transparente.
 
Para hacer puente entre Matrix y WhatsApp: https://github.com/tulir/mautrix-whatsapp

Por lo que observe termine “cediendo” a  Beeper, un excelente protocolo en donde se centraliza dichas comunicaciones por medio de su ingeniosa interfaz donde puedes tener al menos tus 10 aplicaciones de mensajería favoritas. En este preciso momento ando leyendo pros/contras 👁️ porque a pesar de ser un protocolo "open source" (según ellos) si que toca ver como se hace dichos enlaces entre el protocolo y el resto de mensajerías, aunque... si tienes WhatsApp el resto no puede ser tan malo ;)  (es lo que se pensaría con lógica). 

Aplicación: https://www.beeperhq.com/
Su repositorio: https://gitlab.com/nova

El método de puente entre Telegram y WhatsApp también incluye lo que les comentaba al principio, básicamente es forkear en bot Father de Telegram y administrar las comunicaciones a nivel home-server. (https://ibcomputing.com/whatsapp-telegram-bridge/).

La mayoría de las nuevas aplicaciones de chat mueren antes de construir una red. Y ya que todas las redes principales son de código cerrado y no están federadas, es difícil hackear en la parte superior de una red existente y añadir en una o dos nuevas características. Es triste que no haya nada como plugins de Gmail para WhatsApp. Incluso Signal, una aplicación de chat de código abierto, hace cumplir una regla de “no-federación”, lo que significa que no puede albergar su propio servidor de Signal y añadir nuevas características.

Bueno, la conclusión es: qué básicamente si quieres hacer puente (bridge) entre todas tus aplicaciones de mensajería o principalmente desde "X" hacia Matrix o "X" hacia Telegram, vas a necesitar 3 factores:
-Tiempo
-Conocimiento.
-Un buen home-server o servicio Docker. 

Por el otro lado, si no tienes ninguno de estos factores, pagando cierta mensualidad en Beeper por medio de su protocolo harán todos esos puentes respectivos sin mayores complicaciones, actualmente soportan las siguientes mensajerías:
-Whatsapp
-Facebook Messenger
-iMessage
-Android Messages (SMS)
-Telegram
-Twitter
-Slack
-Hangouts
-Instagram
-Skype
-IRC
-Matrix
-Discord
-Signal
-Beeper network

Yo pensé que al menos te daban una prueba gratuita, pero no... meh. Al parecer la fragmentación en un futuro podrá ser soluciona por algún proveedor especifico que se tome esos problemas personales para orientar al publico sin conocimientos, algunos bajo costo, otros nada de ello (imagino). 
Eso es todo frente a la mensajería fragmentada del momento 👁️ 🤔 , guarden enlaces y no se pierdan en el tiempo. 

![xkcd](https://imgs.xkcd.com/comics/chat_systems.png)
