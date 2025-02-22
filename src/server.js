const express = require('express');
const bodyParser = require('body-parser');
const pecaRoutes = require('./routes/pecaRoutes');
const componenteRoutes = require('./routes/componenteRoutes');
const { login, authenticateToken } = require('./auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota de login
app.post('/api/v1/login', login);

// Rotas de peças, incluindo componentes dentro de peças
app.use('/api/v1/peca', authenticateToken, pecaRoutes);
app.use('/api/v1/peca', authenticateToken, componenteRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
