FROM node:lts-alpine@sha256:f07ead757c93bc5e9e79978075217851d45a5d8e5c48eaf823e7f12d9bbc1d3c

# Global Static ENV Variables
ENV PORT 9001

# Create app directory
WORKDIR /app
COPY . .

# Install dependencies
RUN npm i -g npm@7.24.0
RUN npm run setup-token
RUN npm ci

# Build the app
RUN npm run compile

# Prune out devDependencies after build has happened to reduce size of built docker image
RUN npm prune --production

# Remove these folders to further save image space
RUN rm -rf src .env.example README.md tsconfig.json .npmrc .gitignore jest.config.js

# Bundle app source
EXPOSE PORT
