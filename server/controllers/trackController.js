const db = require("../db.js");

class TrackController {
    // Получение списка всех треков
    async getAllTracks(req, res) {
      try {
        const tracks = await db.query(`SELECT * FROM tracks`);
        res.json(tracks.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось получить список артистов' });
      }
    }
    //Получение трека по его ID
    async getTrackById(req, res) {
      try {
        const id = req.params.id;
        const track = await db.query(`SELECT * FROM tracks WHERE id = $1`, [id]);
    
        if (track.rowCount === 0) {
          return res.status(404).json({ message: 'Трек не найден' });
        }
    
        res.json(track.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    }
    
    // Добавление нового трека
    async createTrack(req, res) {
      const { trackname, albumid, genreid } = req.body;
    
      try {
        const newTrack = await db.query(
          `INSERT INTO public.tracks(trackname, albumid, genreid) VALUES ($1, $2, $3) RETURNING *`,
          [trackname, albumid, genreid]
        );
        res.json(newTrack.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось добавить трек' });
      }
    }
// Обновление информации о треке
async updateTrack(req, res) {
  const trackId = req.params.id;
  const { trackname, albumid, genreid } = req.body;

  try {
    const updatedTrack = await db.query(
      `UPDATE tracks SET trackname = $1, albumid = $2, genreid = $3 WHERE id = $4 RETURNING *`,
      [trackname, albumid, genreid, trackId]
    );

    if (updatedTrack.rows.length === 0) {
      return res.status(404).json({ error: 'Трек не найден' });
    }

    res.json(updatedTrack.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Не удалось обновить информацию о треке' });
  }
}

    //Удаление существующего трека
    async deleteTrack(req, res) {
      const trackId = req.params.id;
    
      try {
        const deletedTrack = await db.query(`DELETE FROM tracks WHERE id = $1 RETURNING *`, [trackId]);
    
        if (deletedTrack.rows.length === 0) {
          return res.status(404).json({ error: 'Трек не найден' });
        }
    
        res.json(deletedTrack.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось удалить Трек' });
      }
    }
    
    
}
  module.exports = new TrackController()
  