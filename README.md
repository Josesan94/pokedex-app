Proyecto Pokedex

Instrucciones para levantar el proyecto:
- Clonar el repositorio

el repositorio se divide entre entre las carpetas backend que contiene el backend de la aplicacion, y la carpeta frontend que contiene el Frontend de la aplicacion.

Para levantar el backend:
- npm install
- npm run dev


Para levantar el frontend:
-npm install
- npm run dev


Para probar los endpoints en swagger, debe redirigirse hacia https://localhost:3001/api-docs 

Alli dentro, para ejecutar el endpoint se debe validar el jwt generado en la aplicacion:
- Para generar el jwt, se hizo una funcion estatica dentro del backend, la cual se ejecuta y nos da el JWT para poder ejecutar los endpoints a fines de testing. 
Debe correr el script: "node-ts generateToken.ts" en el directorio backend/src/controllers. Luego, copiar el mismo en el swagger y validarlo para poder ejecutar y probar los endpoints.

