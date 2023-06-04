const db = require("../db.js");

class AlbumController {
    // Получение списка всех альбомов
    async getAllAlbums(req, res) {
      try {
        const albums = await db.query(`SELECT * FROM albums`);
        res.json(albums.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось получить список альбомов' });
      }
    }
    //Получение альбома по его ID
    async getAlbumById(req, res) {
      try {
        const id = req.params.id;
        const album = await db.query(`SELECT * FROM albums WHERE id = $1`, [id]);
    
        if (album.rowCount === 0) {
          return res.status(404).json({ message: 'Альбом не найден' });
        }
    
        res.json(album.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    }
    
    // Добавление нового альбома
    async createAlbum(req, res) {
      const { albumname, albumyear, artistid } = req.body;
    
      try {
        const newAlbum = await db.query(
          `INSERT INTO public.albums(albumname, albumyear, artistid) VALUES ($1, $2, $3) RETURNING *`,
          [albumname, albumyear, artistid]
        );
        res.json(newAlbum.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось создать альбом' });
      }
    }
    //Апдейт альбома
    async updateAlbum(req, res) {
      const { albumname, albumyear, artistid } = req.body;
      const albumId = req.params.id;
    
      try {
        const updatedAlbum = await db.query(
          `UPDATE albums SET albumname = $1, albumyear = $2, artistid = $3 WHERE id = $4 RETURNING *`,
          [albumname, albumyear, artistid, albumId]
        );
        
        if (updatedAlbum.rows.length === 0) {
          return res.status(404).json({ error: 'Альбом не найден' });
        }
        
        res.json(updatedAlbum.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось обновить альбом' });
      }
    }
    
    //Удаление существующего альбома
    async deleteAlbum(req, res) {
      const albumId = req.params.id;
    
      try {
        const deletedAlbum = await db.query(`DELETE FROM albums WHERE id = $1 RETURNING *`, [albumId]);
    
        if (deletedAlbum.rows.length === 0) {
          return res.status(404).json({ error: 'Альбом не найден' });
        }
    
        res.json(deletedAlbum.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось удалить альбом' });
      }
    }
    
    
}
  module.exports = new AlbumController()
  
