
const express = require('express');
const ArtistController = require('../controllers/artistController');
const checkRole = require('../middleware/checkRoleMiddleware')
const router = express.Router();

router.get('/', ArtistController.getAllArtists);
router.post('/',checkRole('ADMIN'), ArtistController.createArtist);
router.get('/:id', ArtistController.getArtistById);
router.delete('/:id',checkRole('ADMIN'), ArtistController.deleteArtist);

module.exports = router;