const express = require('express');
const router = express.Router();

const controller = require('../controller/hotel.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.hotel_inserir);
router.get('/listar', itemcontroller.hotel_listar);
router.get('/buscar/:id', itemcontroller.hotel_buscar);
router.put('/atualizar/:id', itemcontroller.hotel_atualizar);
router.delete('/remover/:id', itemcontroller.hotel_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)