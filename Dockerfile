#   Basic dockerfile writing syntax - 
#   FROM node:18.12.0
#   COPY package.json package.json
#   COPY package-lock.json package-lock.json
#   COPY server.js server.js
#   RUN npm install
#   ENTRYPOINT [ "node", "server.js" ]


FROM node:18.12.0

#   sets the working directory within the container to /usr/src/app
#   directory where the application code will be copied and where subsequent commands will be executed.
WORKDIR /usr/src/app

#   line copies the package.json and package-lock.json into /usr/src/app
COPY package*.json ./ 

#   copies the entire content of the current directory to /usr/src/app on container
COPY . .

#   installs node-modules and other package mentioned in pakcage.json
RUN npm install

ENTRYPOINT [ "npm", "start" ]


