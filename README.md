# marmoset

## Development

Start your local Kubernetes cluster
- `minikube start`

Make sure you're connected the cluster
- `kubectl cluster-info`

Create a Secret to store your MySQL database password
- `kubectl create secret generic secret-mysql-password --from-literal=MYSQL_PASSWORD=$MYSQL_PASSWORD`

Perform database migration
- `./migrate.sh $MYSQL_PASSWORD`

Deploy!
- `./deploy.sh $DOCKER_USERNAME`

## Command

Connect to MySQL server

`kubectl exec -it $MYSQL_POD -- mysql -p -u root`
