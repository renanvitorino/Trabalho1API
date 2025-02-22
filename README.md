API de Gerenciamento de Peças e Componentes

Esta é uma API simples para gerenciar peças e componentes, desenvolvida em Node.js com Express e SQLite. Ela permite:

1.Criar peças.
2.Adicionar componentes a essas peças.
3.Listar todas as peças.
4.Obter detalhes de uma peça específica.
5.Listar os componentes associados a uma peça.

Tecnologias utilizadas

  1.Linguagem: Node.js com Express
  2.Banco de dados: SQLite
  3.Autenticação: Bearer Token
  4.Smoke_Test: No repositório para dúvidas do funcionamento.

Requisitos

Antes de começar, certifique-se de ter instalado:
Node.js (versão 18 ou superior)

Git (opcional, para versionamento do código)

Configuração do Projeto

Clone o repositório:

git clone https://github.com/renanvitorino/Trabalho1API.git

Entre na pasta do projeto:

cd Trabalho1API

Instale as dependências:

npm install

Inicie o servidor:

npm start / node server.js / node src/server.js (Olhar no arquivo de inicialização)

Rotas da API

  1.Autenticação

Adquirir Token

Rota: POST http://localhost:3000/api/v1/login

Corpo da requisição (JSON):

{
  "usuario": "admin",
  "senha": "123456"
}

Retorno esperado:

{
  "token": "seu_token_aqui"
}

  2.Peças

Criar Peça

Rota: POST http://localhost:3000/api/v1/peca

Cabeçalho: Authorization: Bearer seu_token

Corpo da requisição (JSON):

{
  "codigo": "240707",
  "nome": "SmokeTest"
}

Retorno esperado: 201 Created

  3.Obter detalhes de uma Peça

Rota: GET http://localhost:3000/api/v1/peca/240707

Cabeçalho: Authorization: Bearer seu_token

Retorno esperado: 200 OK

Listar todas as Peças

Rota: GET http://localhost:3000/api/v1/peca/

Cabeçalho: Authorization: Bearer seu_token

Retorno esperado: 200 OK


Componentes

  4.Criar Componente

Rota: POST http://localhost:3000/api/v1/peca/240707/componente

Cabeçalho: Authorization: Bearer seu_token

Corpo da requisição (JSON):

{
  "codigo": "240707",
  "sku": "SMK-001",
  "descricao": "Sensor de Fumaça",
  "preco": 199.90,
  "quantidade": 5
}

Retorno esperado: 201 Created

  5.Listar Componentes de uma Peça

Rota: GET http://localhost:3000/api/v1/peca/240707/componente

Cabeçalho: Authorization: Bearer seu_token

Retorno esperado: 200 OK

Autor

Nome: Renan Viana Vitorino Ornellas
RA: 2401220
Trabalho 
Local: São Paulo / SP

Qualquer dúvida entrar em contato pelo e-mail:
renanornellas160602@gmail.com