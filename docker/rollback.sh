docker tag front-prev front-prod
docker stop front-prod
docker run -d -p 80:80 --rm --name front-prod front-prod