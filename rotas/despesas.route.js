const express = require('express');
const router = express.Router();

const controller = require('../controller/despesas.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.despesas_inserir);
router.get('/listar', itemcontroller.despesas_listar);
router.get('/buscar/:id', itemcontroller.despesas_buscar);
router.put('/atualizar/:id', itemcontroller.despesas_atualizar);
router.delete('/remover/:id', itemcontroller.despesas_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)