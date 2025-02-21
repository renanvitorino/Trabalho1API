const db = require('../db');

class Peca {
  static create(codigo, nome, callback) {
    db.run('INSERT INTO peca (codigo, nome) VALUES (?, ?)', [codigo, nome], callback);
  }

  static findByCodigo(codigo, callback) {
    db.get('SELECT * FROM peca WHERE codigo = ?', [codigo], callback);
  }

  static findAll(callback) {
    db.all('SELECT * FROM peca', callback);
  }
}

module.exports = Peca;
