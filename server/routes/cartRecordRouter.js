const express = require('express');
const router = express.Router();
const cartRecordController = require('../controllers/cartRecordController');

// GET - получить все записи корзины
router.get('/', cartRecordController.getCartRecords);

// GET - получить запись корзины по id
router.get('/:id', cartRecordController.getCartRecordById);

// POST - создать новую запись корзины
router.post('/', cartRecordController.createCartRecord);

// PUT - обновить информацию о записи
router.put('/:id', cartRecordController.updateCartRecord);

// DELETE - удалить запись из корзины
router.delete('/:id', cartRecordController.deleteCartRecord);

module.exports = router;