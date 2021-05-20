const express = require('express');
const router = express.Router();

const controller = require('../controller/valores.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.valores_inserir);
router.get('/listar', itemcontroller.valores_listar);
router.get('/buscar/:id', itemcontroller.valores_buscar);
router.put('/atualizar/:id', itemcontroller.valores_atualizar);
router.delete('/remover/:id', itemcontroller.valores_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)