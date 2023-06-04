const db = require("../db.js");

class GenreController {
    // Получение списка всех артистов
    async getAllGenres(req, res) {
      try {
        const genres = await db.query(`SELECT * FROM genres`);
        res.json(genres.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось получить список жанров' });
      }
    }
    //Получение артиста по его ID
    async getGenreById(req, res) {
      try {
        const id = req.params.id;
        const genre = await db.query(`SELECT * FROM genres WHERE id = $1`, [id]);
    
        if (genre.rowCount === 0) {
          return res.status(404).json({ message: 'Жанр не найден' });
        }
    
        res.json(genre.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    }
    
    // Добавление нового артиста
    async createGenre(req, res) {
      const { genrename} = req.body;
    
      try {
        const newGenre = await db.query(
          `INSERT INTO public.genres(genrename) VALUES ($1) RETURNING *`,
          [genrename]
        );
        res.json(newGenre.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось добавить жанр' });
      }
    }
    // Обновление существующего жанра
    async updateGenre(req, res) {
      const genreId = req.params.id;
      const { genrename } = req.body;

      try {
        const updatedGenre = await db.query(
          `UPDATE genres SET genrename = $1 WHERE id = $2 RETURNING *`,
          [genrename, genreId]
        );

        if (updatedGenre.rows.length === 0) {
          return res.status(404).json({ error: 'Жанр не найден' });
        }

        res.json(updatedGenre.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось обновить жанр' });
      }
    }
    //Удаление существующего артиста
    async deleteGenre(req, res) {
      const genreId = req.params.id;
    
      try {
        const deletedGenre = await db.query(`DELETE FROM genres WHERE id = $1 RETURNING *`, [genreId]);
    
        if (deletedGenre.rows.length === 0) {
          return res.status(404).json({ error: 'Жанр не найден' });
        }
    
        res.json(deletedGenre.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось удалить жанр' });
      }
    }
    
    
}
  module.exports = new GenreController()