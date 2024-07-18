Projeto crud finalizado utilizando node.js, express e MySql no backend.
No frontend utilizei next.js.
Para rodar a aplicação temos que iniciar tanto o backend quanto o frontend. Para rodar a aplicação tem-se que ter o node instalado, visto que estou usando o npm para tal. Para iniciarmos o backend utilizar o comando npm start. Para iniciarmos o frontend utilizar o comando npm run dev.
O arquivo schema.sql é a estrutura que usei para criar o banco de dados para a aplicação e deve ser seguido para replicar e testar o projeto.
Qualquer duvida estou a disposição.
Para conectar com o banco de dados criar um arquivo .env dentro da pasta backend e configurar esses arquivos a seguir com as chaves locais de acesso ao banco de dados. host: process.env.DB_HOST,user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME,
