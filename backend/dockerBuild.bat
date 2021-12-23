@echo off

echo "Building/Updating backend image"
docker build --tag theproj:dev .
echo "Backend image is ready"