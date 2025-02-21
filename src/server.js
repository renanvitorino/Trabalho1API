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

app.use('/api/v1/peca', authenticateToken, pecaRoutes);
app.use('/api/v1/peca', authenticateToken, componenteRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
