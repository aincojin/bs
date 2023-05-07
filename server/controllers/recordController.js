class RecordController {
    static async getAllRecords(req, res) {
      try {
        const records = await Record.findAll();
        res.json(records);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  
    static async getRecordById(req, res) {
      try {
        const record = await Record.findByPk(req.params.id);
        if (!record) {
          res.status(404).json({ message: "Record not found" });
        } else {
          res.json(record);
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  
    static async createRecord(req, res) {
      try {
        const { recordname, recordprice, image } = req.body;
        const record = await Record.create({ recordname, recordprice, image });
        res.status(201).json(record);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    }

  
    static async deleteRecord(req, res) {
      try {
        const record = await Record.findByPk(req.params.id);
        if (!record) {
          res.status(404).json({ message: "Record not found" });
        } else {
          await record.destroy();
          res.json({ message: "Record deleted successfully" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  
  module.exports = RecordController;
  