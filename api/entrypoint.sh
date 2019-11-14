# Aguarda até que o serviço de banco de dados suba
sleep 10
npx sequelize db:migrate
npx sequelize db:seed:all
node ./dist/bin/www
