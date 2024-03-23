#!/bin/bash
set -e

docker build -t front-next ../
docker tag front-prod front-prev
docker tag front-next front-prod
docker stop front-prod
docker run -d -p 80:80 --rm --name front-prod front-prod