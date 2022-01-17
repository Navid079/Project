#!/bin/sh

echo "Building/Updating backend image"
docker rmi theproj:dev > /dev/null 2>&1
docker build --tag theproj:dev . > /dev/null 2>&1
echo "Backend image is ready"