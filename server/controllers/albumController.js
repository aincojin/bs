const {Albums} = require('../models/models')
class AlbumController {
  // Получение списка всех альбомов

  static async getAllAlbums (req, res) {
    try {
      const albums = await albums.find({});
      res.status(200).json(albums);
    } catch (error) {
      res.status(500).json({ error: 'Произошла ошибка при получении списка альбомов' });
    }
  };
  
  // Получение альбома по ID
  static getAlbumById(req, res) {
    const id = req.params.id; // получаем ID альбома из параметров запроса
    const album = // логика получения альбома по ID
    res.status(200).json(album);
  }

  // Добавление нового альбома
  static addAlbum(req, res) {
    const albumData = req.body.album; // получаем данные альбома из тела запроса
    // логика добавления нового альбома
    res.status(200).send('Album added successfully');
  }


  // Удаление альбома по ID
  static deleteAlbum(req, res) {
    const id = req.params.id; // получаем ID альбома из параметров запроса
    // логика удаления альбома по ID
    res.status(200).send('Album deleted successfully');
  }
}
module.exports = new AlbumController()

