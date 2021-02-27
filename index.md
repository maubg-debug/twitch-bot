# MauTwitch


## Instalar

1. Clonar el repositorio

2. Instalar dependencias `npm i` o `yarn install`

3. Copiar el archivo de configuracion

   ```bash
   cp config/default.example.json5 config/default.json5
   ```

4. Preparar el robot

`oauth_token` puedes cojerlo [aqui haciendo login como bot](https://twitchapps.com/tmi/)

```
bot: {
  username: "tu-nombre-de-robot",
  oauth_token: "token" // Puedes hacer login aqui https://twitchapps.com/tmi/
},
channel: "tu-canal-aqui"
```

5. Correr el robot `npm start`

## Utilidades

**Mirar si usuario es un moderador**

```js
import { isModerator } from "./utils";

// Puede obtener información sobre el usuario a partir del mensaje entrante
const user = messageInfo.user;

if (isModerator(user)) {
  console.log(`${user.username} Es moderado este canal.`);
}
```

**Enviar mensage a un usuario**

```js
import { messageToUser } from "./utils";

// Puede obtener información sobre el usuario a partir del mensaje entrante
const user = messageInfo.user;

const message = ", gracias por seguir amigo";

messageToUser(user.username, message);

// En el chat
// Tu robot: @Maubg-debug, gracias por seguir amigo
```

## Contribuiciones

Si tiene algún comentario o idea, vaya al número nuevo.

## Diviertete :blush:
