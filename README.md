
# Meetups app

## Comandos disponibles:
Instalar las dependencies del proyecto: `yarn install`,  
Iniciar el server de la app en local: `yarn start`,  
Correr la app en local en Android: `yarn android`,  
Correr la app en local en iOS: `yarn ios`,

### Loguearse en la aplicación:
#### Para loguearse como administrador:
El usuario debe ser **admin**, es indiferente si esta en mayuscula o minuscula,  
la contraseña es indiferente pero debe tener +4 digitos.

## Información de la API utilizada:
La api está escrita en **Node.js** que corre sobre heroku,  
esta acepta los siguientes endpoints:  

URL: **https://birras-santander.herokuapp.com**

#### GET 
**/meetups**: retorna un listado de las Meetups creadas hasta la fecha,  
#### POST  
**/meetups/create**: crea una nueva meetup y devuelve la lista actualizada,  
**/meetups/reset**: elimina todas las meetups creadas hasta la fecha
