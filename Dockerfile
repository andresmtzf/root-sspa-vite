# Instalar node

FROM node:16-alpine as builder

# Establecer directorio de trabajo

WORKDIR /app
COPY . .

# Instalar dependencias y construcción de proyecto
RUN npm i --legacy-peer-deps
RUN npm run build

# NGINX

FROM nginx:1.21.0-alpine as production

# Copiar configuración de nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 9000

