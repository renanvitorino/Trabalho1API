const Peca = require('../models/pecaModel');

exports.createPeca = (req, res) => {
  const { codigo, nome } = req.body;
  Peca.create(codigo, nome, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Peça criada com sucesso!' });
  });
};

exports.getPeca = (req, res) => {
  const { codigo } = req.params;
  Peca.findByCodigo(codigo, function(err, row) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(row);
  });
};

exports.getAllPecas = (req, res) => {
  Peca.findAll(function(err, rows) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};
