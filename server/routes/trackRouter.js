
const express = require('express');
const TrackController = require('../controllers/trackController');
const checkRole = require('../middleware/checkRoleMiddleware')

const router = express.Router();

// Получение списка всех треков
router.get('/', TrackController.getAllTracks);

// Получение трека по идентификатору
router.get('/:id', TrackController.getTrackById);

// Создание нового трека
router.post('/',checkRole('ADMIN'), TrackController.addTrack);


// Удаление трека по идентификатору
router.delete('/:id',checkRole('ADMIN'), TrackController.deleteTrack);

module.exports = router;
