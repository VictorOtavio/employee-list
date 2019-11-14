# Employee List

Lista de empregados feita com Vue, Bulma, Node.js e MySQL.

## tl;dr

Execute o projeto rodando os seguintes comandos no terminal:

```bash
cp .env.example .env
sed -i -e "s/API_JWT_SECRET=.*/API_JWT_SECRET=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo)/g" .env
docker-compose up -d
```

> Obs: Os comandos foram testados no Ubuntu 18.04.

A aplicação estará disponível através da URL: http://127.0.0.1:8080.

## Executando os serviços separadamente

Os serviços podem ser executados separadamente em modo de desenvolvimento. Pra isso é necessário disponibilizar uma conexão com banco de dados fora do Docker e uma database limpa para rodar a API.

### API

Execute os seguintes comandos:

```bash
cd api
cp .env.example .env
sed -i -e "s/JWT_SECRET=.*/JWT_SECRET=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo)/g" .env
npm install
# Antes de executar o comando a seguir, você deve editar o arquivo .env e
# informar os dados corretos de acesso ao banco de dados.
npx sequelize db:migrate
npx sequelize db:seed:all
npm run serve
```

### Web

Execute os seguintes comandos:

```bash
cd web
cp .env.example .env
npm install
# Antes de executar o comando a seguir, você deve editar o arquivo .env e
# informar os dados corretos de acesso à API. Por padrão ela roda na porta 3000.
npm run serve
```
