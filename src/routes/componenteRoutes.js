const express = require('express');
const router = express.Router();
const componenteController = require('../controllers/componenteController');

router.post('/:codigo/componente', componenteController.createComponente);
router.get('/:codigo/componente', componenteController.getComponentesByPeca);

module.exports = router;