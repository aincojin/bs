const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

// GET - получить все пластинки
router.get('/', recordController.getVinyls);

// GET - получить пластинку по id
router.get('/:id', recordController.getVinylById);

// POST - создать новую пластинку
router.post('/',checkRole('ADMIN'), recordController.createVinyl);

// DELETE - удалить пластинку
router.delete('/:id',checkRole('ADMIN'), recordController.deleteVinyl);

module.exports = router;
