const db = require("../db.js");

class RecordController {
    // Получение списка всех пластинок
    async getAllRecords(req, res) {
      try {
        const records = await db.query(`SELECT * FROM records`);
        res.json(records.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось получить список пластинок' });
      }
    }
    //Получение пластики по ее ID
    async getRecordById(req, res) {
      try {
        const id = req.params.id;
        const record = await db.query(`SELECT * FROM records WHERE id = $1`, [id]);
    
        if (record.rowCount === 0) {
          return res.status(404).json({ message: 'Пластинка не найдена' });
        }
    
        res.json(record.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    }
    
    // Добавление новой пластики
    async createRecord(req, res) {
      const { recordname, recordprice, recordimage,albumid,genreid,artistid } = req.body;
    
      try {
        const newRecord = await db.query(
          `INSERT INTO public.records(recordname, recordprice, recordimage,albumid,genreid,artistid) VALUES ($1, $2,$3,$4, $5,$6) RETURNING *`,
          [recordname, recordprice, recordimage,albumid,genreid,artistid]
        );
        res.json(newRecord.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось добавить пластинку' });
      }
    }
    async updateRecord(req, res) {
      const recordId = req.params.id;
      const { recordname, recordprice, recordimage, albumid } = req.body;

      try {
          const updatedRecord = await db.query(
              `UPDATE records SET recordname=$1, recordprice=$2, recordimage=$3, albumid=$4 WHERE id=$5 RETURNING *`,
              [recordname, recordprice, recordimage, albumid, recordId]
          );

          if (updatedRecord.rowCount === 0) {
              return res.status(404).json({ error: 'Пластинка не найдена' });
          }

          res.json(updatedRecord.rows[0]);
      } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Не удалось обновить пластинку' });
      }
  }
    //Удаление существующей пластики
    async deleteRecord(req, res) {
      const recordId = req.params.id;
    
      try {
        const deletedRecord = await db.query(`DELETE FROM records WHERE id = $1 RETURNING *`, [recordId]);
    
        if (deletedRecord.rows.length === 0) {
          return res.status(404).json({ error: 'Пластинка не найден' });
        }
    
        res.json(deletedRecord.rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Не удалось удалить пластинку' });
      }
    }
    
    
}
  module.exports = new RecordController()