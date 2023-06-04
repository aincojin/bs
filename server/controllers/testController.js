const db = require("../db.js");

class TestController {
    // Получение списка всех альбомов
    async get(req, res) {
       
        const tests = await db.query(`SELECT * FROM public.tests21`);
        res.json(tests.rows);
    }
  
    // Добавление нового альбома
    async create(req, res) {
        const { name} = req.body;
        const newJob = await db.query(
          `INSERT INTO public.tests21(
            name)
            VALUES ($1) RETURNING *`,
          [name]
        );
        res.json(newJob.rows[0]);
    }
}
  module.exports = new TestController()
  