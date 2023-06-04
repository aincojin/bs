const Router = require('express');
const router = new Router();
const albumController = require('../controllers/albumController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', albumController.getAllAlbums);
router.get('/:id', albumController.getAlbumById);
router.post('/', checkRole('ADMIN'), albumController.createAlbum);
router.put('/:id', checkRole('ADMIN'), albumController.updateAlbum);
router.delete('/:id', checkRole('ADMIN'), albumController.deleteAlbum);

module.exports = router;
