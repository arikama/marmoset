# marmoset

Marmoset is a project to demo Kubernetes' orchestration capabilities, but the app is still useful if you are the kind of person who tends to come up with horrible project names

It's a clone to this [app](https://randomword.com/) and we are somehow way faster! :stuck_out_tongue_winking_eye:

## Deployment

1. Make sure you're connected the cluster

   `kubectl cluster-info`

2. Create a Secret to store your MySQL database password

   `kubectl create secret generic secret-mysql-password --from-literal=MYSQL_PASSWORD=$MYSQL_PASSWORD`

3. Deploy

   `./deploy.sh`

   **Note:** If you don't have access to Arikama's image repository, you'll have to rename it to something that
   you own

4. Perform database migration

   `./migrate.sh $MYSQL_PASSWORD`

5. [Install](https://kubernetes.github.io/ingress-nginx/deploy/) NGINX Ingress Controller

## Command

Connect to MySQL server

`./connect.sh $MYSQL_PASSWORD`
