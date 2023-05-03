FROM node:18

# SET WORK DIRECTORY
WORKDIR /app/

# COPY PACKAGES
COPY package*.json ./
COPY *.lock ./

# INSTALLING DEPENDENCIES
RUN yarn

# COPY THE REMAINNIG APP

COPY . .


EXPOSE ${SERVER_PORT}

# Start the React app
CMD ["yarn", "dev"]