const express = require('express');
const router = express.Router();
const pecaController = require('../controllers/pecaController');

router.post('/', pecaController.createPeca);
router.get('/:codigo', pecaController.getPeca);
router.get('/', pecaController.getAllPecas);

module.exports = router;
