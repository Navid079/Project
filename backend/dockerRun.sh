#!/bin/sh

echo "Creating network bridge..."
docker network create proj-network > /dev/null 2>&1
echo "Network created"

echo "Running mongodb container..."
docker run --rm -v ~/data/db:/data/db --name mongo -d --network proj-network mongo:4.4.10 > /dev/null 2>&1
echo "Mongodb container is running"

echo "Running backend on port 3005"
docker run --rm --name proj -d --network proj-network -p3005:3005 theproj:dev > /dev/null 2>&1
echo "Backend is up and running"

echo "Done!"