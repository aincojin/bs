const Router = require('express')
const router = new Router()
const artistController = require('../controllers/artistController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', artistController.getAllArtists)
router.get('/:id', artistController.getArtistById);
router.post('/', checkRole('ADMIN'), artistController.createArtist)
router.put('/:id', checkRole('ADMIN'), artistController.updateArtist);
router.delete('/:id',checkRole('ADMIN'),artistController.deleteArtist);

module.exports = router