# Use an official Python runtime as a parent image
FROM mhart/alpine-node:7.9

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV DOCKER true

# Run app.py when the container launches
CMD ["npm", "start"]