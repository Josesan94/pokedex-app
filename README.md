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
- El jwt se genera automaticamente al ingresar a la webapp. Para probar los endpoints mediante swagger, se lo puede generar de manera manual, ejecutando el endpoint "http://localhost:3001/api/generate-token", el cual devolera el token. Alli, para probar los endpoints que estan protegidos, se debe ir a "Authorize" y colocarl el token que se genero. Luego, puede probar los endpoints libremente.

