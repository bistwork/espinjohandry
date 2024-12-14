# Usar la imagen oficial de Node.js
FROM node:20
# Crear directorio de trabajo
WORKDIR /usr/src/app
# Copiar package.json y package-lock.json
COPY src/package.json src/package-lock.json* ./
# Instalar dependencias
RUN npm install
# Copiar el código fuente
COPY src/ .
# Exponer puerto
EXPOSE 3000
# Comando para iniciar la aplicación
CMD ["npm", "start"]