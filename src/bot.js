import client from "./client";
import { resolve } from "./commandResolver";
client.connect();

// Comandos
client.on("chat", (channel, user, message, self) => {

  const prefijo = "!" // Prefijo

  if (self) return; // Mensage del robot

  // si el mensaje tiene un símbolo, ¿qué significa comando? - Prefijo
  if (message.indexOf(prefijo) !== -1) {
    const cmd = resolve(channel, user, message);

    if (cmd != false) {

      const args = message.args


      if (message === prefijo + "ping") {
        client.say(channel, user.username + " PONG PopCorn")
      }

    }
  }

});

client.on("subscription", function (channel, username, methods ) {

  client.say(channel, username.username + ", gracias por seguirme amigo" )
  
});