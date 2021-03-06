FROM node:lts

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]