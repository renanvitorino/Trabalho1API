const Componente = require('../models/componenteModel');

exports.createComponente = (req, res) => {
  const { codigo, sku, descricao, preco, quantidade } = req.body;
  Componente.create(codigo, sku, descricao, preco, quantidade, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Componente criado com sucesso!' });
  });
};

exports.getComponentesByPeca = (req, res) => {
  const { codigo } = req.params;
  Componente.findByCodigo(codigo, function(err, rows) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};
