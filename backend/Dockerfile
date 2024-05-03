# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar dependencias de proyecto
RUN npm install

# Copiar todos los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Expone el puerto que tu aplicación usará
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]