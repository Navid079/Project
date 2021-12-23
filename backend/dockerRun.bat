@echo off

echo "Creating network bridge..."
docker network create proj-network
echo "Network created"

echo "Running mongodb container..."
docker run --rm -v ~/data/db:/data/db --name mongo -d --network proj-network mongo:4.4.10
echo "Mongodb container is running"

echo "Running backend on port 3005"
docker run --rm --name proj -d --network proj-network -p3005:3005 theproj:dev
echo "Backend is up and running"

echo "Done!"