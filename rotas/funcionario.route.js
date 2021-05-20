const express = require('express');
const router = express.Router();

const controller = require('../controller/funcionario.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.funcionario_inserir);
router.get('/listar', itemcontroller.funcionario_listar);
router.get('/buscar/:id', itemcontroller.funcionario_buscar);
router.put('/atualizar/:id', itemcontroller.funcionario_atualizar);
router.delete('/remover/:id', itemcontroller.funcionario_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)