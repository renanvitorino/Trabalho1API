const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS peca (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT UNIQUE,
    nome TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS componente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT,
    sku TEXT,
    descricao TEXT,
    preco REAL,
    quantidade INTEGER,
    FOREIGN KEY(codigo) REFERENCES peca(codigo)
  )`);
});

module.exports = db;