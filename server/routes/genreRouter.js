const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', genreController.getAllGenres)
router.get('/:id', genreController.getGenreById);
router.post('/', checkRole('ADMIN'), genreController.createGenre)
router.put('/:id', checkRole('ADMIN'), genreController.updateGenre);
router.delete('/:id',checkRole('ADMIN'),genreController.deleteGenre);

module.exports = router
 



