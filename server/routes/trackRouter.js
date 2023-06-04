const Router = require('express')
const router = new Router()
const trackController = require('../controllers/trackController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', trackController.getAllTracks)
router.get('/:id', trackController.getTrackById);
router.post('/', checkRole('ADMIN'), trackController.createTrack)
router.put('/:id', checkRole('ADMIN'), trackController.updateTrack);
router.delete('/:id',checkRole('ADMIN'),trackController.deleteTrack);

module.exports = router