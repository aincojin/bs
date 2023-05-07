
const genreRouter = require('express').Router();
const checkRole = require('../middleware/checkRoleMiddleware')


genreRouter.get('/', GenreController.getAllGenres);
// Получение жанра по ID
genreRouter.get('/:id', GenreController.getGenreById);
// Добавление нового жанра
genreRouter.post('/',checkRole('ADMIN'), GenreController.addGenre);
// Удаление жанра по ID
genreRouter.delete('/:id',checkRole('ADMIN'), GenreController.deleteGenre);

module.exports = genreRouter;
 



