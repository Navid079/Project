@echo off

echo "Stopping backend"
docker rm --force proj
echo "Backend stoped"

echo "Stopping mongodb"
docker rm --force mongo
echo "Mongodb stopped"

echo "Done!"