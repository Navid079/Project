@echo off

echo "Stopping backend"
docker rm --force proj > /dev/null 2>&1
echo "Backend stoped"

echo "Stopping mongodb"
docker rm --force mongo > /dev/null 2>&1
echo "Mongodb stopped"

echo "Done!"