const express = require('express');
const bodyParser = require('body-parser');
const pecaRoutes = require('./routes/pecaRoutes');
const componenteRoutes = require('./routes/componenteRoutes');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Rotas para peças e componentes
app.use('/api/v1/peca', pecaRoutes);
app.use('/api/v1/peca', componenteRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});