const albumController=require('../controllers/albumController')
const checkRole = require('../middleware/checkRoleMiddleware')
const albumRouter = require('express').Router();
albumRouter.get('/', albumController.getAllAlbums);
// Получение альбома по ID
albumRouter.get('/:id', albumController.getAlbumById);
// Добавление нового альбома
albumRouter.post('/',checkRole('ADMIN'), albumController.addAlbum);
// Удаление альбома по ID
albumRouter.delete('/:id',checkRole('ADMIN'), albumController.deleteAlbum);

module.exports = albumRouter;
