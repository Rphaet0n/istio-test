FROM node:alpine as builder
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.15-alpine
COPY --from=builder /build /usr/share/nginx/html
EXPOSE 80