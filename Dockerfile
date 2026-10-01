FROM node:22-alpine AS build

WORKDIR /app

RUN apk add --no-cache git

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN git config --global --add safe.directory /app
RUN npm run build


FROM nginx:1.29-alpine AS runtime

RUN mkdir /var/www

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/tyne-doc

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000/guides/example/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
