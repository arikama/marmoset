if [ -z "$1" ]
then
  echo "error: docker username not specified"
  exit 1
fi

docker build -t $1/marmoset-client -t $1/marmoset-client:$(git rev-parse HEAD) ./client
docker build -t $1/marmoset-cron-job-randomword -t $1/marmoset-cron-job-randomword:$(git rev-parse HEAD) ./cron/randomword
docker build -t $1/marmoset-server -t $1/marmoset-server:$(git rev-parse HEAD) ./server

docker push $1/marmoset-client:latest
docker push $1/marmoset-client:$(git rev-parse HEAD)
docker push $1/marmoset-cron-job-randomword:latest
docker push $1/marmoset-cron-job-randomword:$(git rev-parse HEAD)
docker push $1/marmoset-server:latest
docker push $1/marmoset-server:$(git rev-parse HEAD)

kubectl apply -f ./kubernetes

kubectl set image cronjobs/cron-job-randomword cron-randomword=$1/marmoset-cron-job-randomword:$(git rev-parse HEAD)
kubectl set image deployments/deployment-client client=$1/marmoset-client:$(git rev-parse HEAD)
kubectl set image deployments/deployment-server server=$1/marmoset-server:$(git rev-parse HEAD)
