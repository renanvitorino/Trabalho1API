# API de Gerenciamento de Peças e Componentes

Esta é uma API simples para gerenciar peças e componentes, desenvolvida em **Node.js** com **Express** e **SQLite**. Ela permite:

- Criar peças.
- Adicionar componentes a essas peças.
- Listar todas as peças.
- Obter detalhes de uma peça específica.
- Listar os componentes associados a uma peça.


Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/) (opcional, para versionamento do código)


## Como Configurar o Projeto

1. **Clone o repositório** (se estiver usando Git):
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

Instale as dependências:

bash
Copy
npm install
Inicie o servidor:

bash
Copy
npm start
O servidor estará rodando em http://localhost:3000.

Rotas da API
Aqui estão as rotas disponíveis:

1. Criar uma Peça
Método: POST

URL: /api/v1/peca

Body (JSON):

json
Copy
{
  "codigo": "1606",
  "nome": "Peça de Exemplo"
}

2. Adicionar um Componente à Peça
Método: POST

URL: /api/v1/peca/{codigo}/componente

Body (JSON):

json
Copy
{
  "sku": "C001",
  "descricao": "Componente de Teste",
  "preco": 10.99,
  "quantidade": 5
}

3. Listar Todas as Peças
Método: GET

URL: /api/v1/peca/

4. Obter Detalhes de uma Peça
Método: GET

URL: /api/v1/peca/{codigo}

5. Listar Componentes de uma Peça
Método: GET

URL: /api/v1/peca/{codigo}/componente/

