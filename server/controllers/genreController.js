class GenreController {
    // Получение списка всех жанров
    static getAllGenres(req, res) {
      const genres = // логика получения списка жанров
      res.status(200).json(genres);
    }
  
    // Получение жанра по ID
    static getGenreById(req, res) {
      const id = req.params.id; // получаем ID жанра из параметров запроса
      const genre = // логика получения жанра по ID
      res.status(200).json(genre);
    }
  
    // Добавление нового жанра
    static addGenre(req, res) {
      const genreData = req.body.genre; // получаем данные жанра из тела запроса
      // логика добавления нового жанра
      res.status(200).send('Genre added successfully');
    }

    // Удаление жанра по ID
    static deleteGenre(req, res) {
      const id = req.params.id; // получаем ID жанра из параметров запроса
      // логика удаления жанра по ID
      res.status(200).send('Genre deleted successfully');
    }
  }
  