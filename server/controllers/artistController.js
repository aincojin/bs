const db = require("../db.js");

class ArtistController {
    // Получение списка всех артистов
    async getAllArtists(req, res) {
      try {
        const artists = await db.query(`SELECT * FROM artists`);
        res.json(artists.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось получить список артистов' });
      }
    }
    //Получение артиста по его ID
    async getArtistById(req, res) {
      try {
        const id = req.params.id;
        const artist = await db.query(`SELECT * FROM artists WHERE id = $1`, [id]);
    
        if (artist.rowCount === 0) {
          return res.status(404).json({ message: 'Артист не найден' });
        }
    
        res.json(artist.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    }
    
    // Добавление нового артиста
    async createArtist(req, res) {
      const { artistname, country } = req.body;
    
      try {
        const newArtist = await db.query(
          `INSERT INTO public.artists(artistname, country) VALUES ($1, $2) RETURNING *`,
          [artistname, country]
        );
        res.json(newArtist.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось добавить артиста' });
      }
    }
    // Обновление информации об артисте
    async updateArtist(req, res) {
      const artistId = req.params.id;
      const { artistname, country } = req.body;

      try {
        const updatedArtist = await db.query(
          `UPDATE public.artists SET artistname = $1, country = $2 WHERE id = $3 RETURNING *`,
          [artistname, country, artistId]
        );

        if (updatedArtist.rows.length === 0) {
          return res.status(404).json({ error: 'Артист не найден' });
        }

        res.json(updatedArtist.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось обновить информацию об артисте' });
      }
    }

    //Удаление существующего артиста
    async deleteArtist(req, res) {
      const artistId = req.params.id;
    
      try {
        const deletedArtist = await db.query(`DELETE FROM artists WHERE id = $1 RETURNING *`, [artistId]);
    
        if (deletedArtist.rows.length === 0) {
          return res.status(404).json({ error: 'Артист не найден' });
        }
    
        res.json(deletedArtist.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось удалить артиста' });
      }
    }
    
    
}
  module.exports = new ArtistController()
  
