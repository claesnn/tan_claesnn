#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs -d '\n')
fi

# Check if SERVER_IP variable is set
if [ -z "$SERVER_IP" ]; then
  echo "Error: SERVER_IP variable not set in .env file."
  exit 1
fi

# Build Vite project
echo "Building Vite project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Compressing 'dist' folder into a zip file..."
  
  # Compress 'dist' folder into a zip file
  zip -r dist.zip dist
  
  # Check if compression was successful
  if [ $? -eq 0 ]; then
    echo "Compression successful. Transferring 'dist.zip' to server..."
    
    # Transfer 'dist.zip' file to server
    scp dist.zip root@$SERVER_IP:/home/easy-deploy/dist.zip
    
    # Check if transfer was successful
    if [ $? -eq 0 ]; then
      echo "Transfer successful."
    else
      echo "Error: Failed to transfer 'dist.zip' to server."
      exit 1
    fi
  else
    echo "Error: Failed to compress 'dist' folder into a zip file."
    exit 1
  fi
else
  echo "Error: Build failed. Exiting..."
  exit 1
fi
