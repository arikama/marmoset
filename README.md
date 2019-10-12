# marmoset

## Deployment

1. Make sure you're connected the cluster
   
   `kubectl cluster-info`

2. Create a Secret to store your MySQL database password
   
   `kubectl create secret generic secret-mysql-password --from-literal=MYSQL_PASSWORD=$MYSQL_PASSWORD`

3. Deploy
   
   `./deploy.sh $DOCKER_USERNAME`

4. Perform database migration
   
   `./migrate.sh $MYSQL_PASSWORD`

5. [Install](https://kubernetes.github.io/ingress-nginx/deploy/) NGINX Ingress Controller

## Command

Connect to MySQL server

`./connect.sh $MYSQL_PASSWORD`
