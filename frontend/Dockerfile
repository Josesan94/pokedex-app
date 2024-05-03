FROM node:18

WORKDIR /usr/src/app

# Copiar todos los archivos del proyecto al directorio de trabajo
COPY . .


RUN npm install

# Construir la aplicación Next.js
RUN npm run build



# Exponer el puerto que usa tu aplicación (Next.js usa por defecto el 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]