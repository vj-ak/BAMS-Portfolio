# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static export output (output: 'export' generates 'out' folder)
COPY --from=build /app/out /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]