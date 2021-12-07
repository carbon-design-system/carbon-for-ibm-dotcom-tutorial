
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install http-server
RUN npm install -g http-server

# Copy the app
COPY . .

# Build the app
RUN yarn install && yarn build

EXPOSE 8080
CMD ["http-server", "dist", "-s"]