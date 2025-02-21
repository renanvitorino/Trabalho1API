const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = '1606'; // Troque por uma chave segura

// Simulação de usuário (substitua por banco de dados)
const fakeUser = {
  id: 1,
  username: 'admin',
  password: bcrypt.hashSync('123456', 8), // Senha criptografada
};

// Middleware para verificar token JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado, token não fornecido' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Rota de login (gera um token JWT)
const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== fakeUser.username || !bcrypt.compareSync(password, fakeUser.password)) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }

  const token = jwt.sign({ id: fakeUser.id, username: fakeUser.username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
};

module.exports = { authenticateToken, login };
