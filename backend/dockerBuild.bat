@echo off

echo "Building/Updating backend image"
docker rmi theproj:dev > /dev/null 2>&1
docker build --tag theproj:dev .
echo "Backend image is ready"