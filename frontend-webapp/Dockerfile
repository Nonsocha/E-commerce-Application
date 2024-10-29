# Use the official Node.js 14 image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json for better caching
COPY webapp/package.json webapp/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the webapp directory
COPY webapp ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
