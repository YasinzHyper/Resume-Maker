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
RUN adduser -S frontend -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R frontend:nodejs /app
USER frontend

# Expose the port Vite runs on
EXPOSE 5173

# Start the Vite development server with host binding for Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]