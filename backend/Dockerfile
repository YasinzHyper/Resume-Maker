# Use official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S backend -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R backend:nodejs /app
USER backend

# Expose the port the app runs on
EXPOSE 5000

# Start the application in development mode
CMD ["npm", "run", "dev"]