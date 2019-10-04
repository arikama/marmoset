docker build -t arikama/marmoset-cron-job-randomword -t arikama/marmoset-cron-job-randomword:$(git rev-parse HEAD) ./cron/randomword
docker build -t arikama/marmoset-server -t arikama/marmoset-server:$(git rev-parse HEAD) ./server

docker push arikama/marmoset-cron-job-randomword:latest
docker push arikama/marmoset-cron-job-randomword:$(git rev-parse HEAD)
docker push arikama/marmoset-server:latest
docker push arikama/marmoset-server:$(git rev-parse HEAD)

kubectl apply -f ./kubernetes

kubectl set image cronjobs/cron-job-randomword cron-randomword=arikama/marmoset-cron-job-randomword:$(git rev-parse HEAD)
kubectl set image deployments/deployment-server server=arikama/marmoset-server:$(git rev-parse HEAD)
