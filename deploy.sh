docker build -t arikama/marmoset-server -t arikama/marmoset-server:$(git rev-parse HEAD) ./server
docker push arikama/marmoset-server:latest
docker push arikama/marmoset-server:$(git rev-parse HEAD)
kubectl apply -f ./kubernetes
kubectl set image deployments/deployment-server server=arikama/marmoset-server:$(git rev-parse HEAD)
