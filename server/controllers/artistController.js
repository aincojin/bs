const Artist = require('../models/models');

class ArtistController {
  static async getAllArtists(req, res) {
    try {
      const artists = await Artist.find();
      res.json(artists);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }

  static async createArtist(req, res) {
    try {
      const artist = new Artist(req.body);
      await artist.save();
      res.json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }

  static async getArtistById(req, res) {
    try {
      const artist = await Artist.findById(req.params.id);
      if (!artist) {
        return res.status(404).json({ msg: 'Artist not found' });
      }
      res.json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }


  static async deleteArtist(req, res) {
    try {
      const artist = await Artist.findByIdAndDelete(req.params.id);
      if (!artist) {
        return res.status(404).json({ msg: 'Artist not found' });
      }
      res.json({ msg: 'Artist deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }
}

module.exports = ArtistController;
