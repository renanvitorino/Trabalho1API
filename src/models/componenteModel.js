const db = require('../db');

class Componente {
  static create(codigo, sku, descricao, preco, quantidade, callback) {
    db.run('INSERT INTO componente (codigo, sku, descricao, preco, quantidade) VALUES (?, ?, ?, ?, ?)', [codigo, sku, descricao, preco, quantidade], callback);
  }

  static findByCodigo(codigo, callback) {
    db.all('SELECT * FROM componente WHERE codigo = ?', [codigo], callback);
  }
}

module.exports = Componente;
