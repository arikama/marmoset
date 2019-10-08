if [ -z $1 ]
then
  echo "error: mysql password not specified"
  exit 1
fi
MYSQL_POD_NAME=$(kubectl get pods -o name | grep deployment-mysql)
kubectl exec -i $MYSQL_POD_NAME -- mysql -e "CREATE DATABASE IF NOT EXISTS marmoset;" $migration -p$1 -u root
for migration in ./mysql/v*.sql; do
  [ -e $migration ] || continue
  kubectl exec -i $MYSQL_POD_NAME -- mysql --database marmoset -p$1 -u root < $migration
done
