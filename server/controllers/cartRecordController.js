class CartRecordController {

  async addToCart(req, res) {
    const { userId, cartId, recordId } = req.body;
  
    try {
      const result = await db.query(
        `INSERT INTO cart_record (userid, cartid, recordid) 
         VALUES ($1, $2, $3)
         RETURNING *`,
        [userId, cartId, recordId]
      );
      const countResult = await db.query(
        `SELECT COUNT(*) FROM cart_record WHERE cartid = $1`,
        [cartId]
      );
      const count = countResult.rows[0].count;
      res.json({ record: result.rows[0], count });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Не удалось добавить товар в корзину' });
    }
  }

  async removeFromCart(req, res) {
    const { userId, recordId } = req.params;
  
    try {
      const result = await db.query(
        `DELETE FROM cart_record
         WHERE userid = $1 AND recordid = $2
         RETURNING *`,
        [userId, recordId]
      );
  
      if (result.rowCount === 0) {
        res.status(404).json({ error: 'Товар не найден в корзине' });
      } else {
        res.json({ message: 'Товар успешно удален из корзины' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Не удалось удалить товар из корзины' });
    }
  }
  
  async getCartItemsByUserId(req, res) {
    const { userId } = req.params;
  
    try {
      const cartItems = await db.query(
        `SELECT * FROM cart_products WHERE userid = $1`,
        [userId]
      );
      res.json(cartItems.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Не удалось получить список товаров в корзине' });
    }
  }
  































// получить все записи корзины
// static getCartRecord = async (req, res) => {
//   try {
//     const cartRecord = await CartRecord.find();
//     res.json(cartRecord);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }

// // получить запись корзины по id
// static getCartRecordById = async (req, res) => {
//   try {
//     const cartRecord = await CartRecord.findById(req.params.id);
//     res.json(cartRecord);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }

// // создать новую запись корзины
// static createCartRecord = async (req, res) => {
//   const cartRecord = new CartRecord({
//     vinylId: req.body.vinylId,
//     quantity: req.body.quantity,
//     totalPrice: req.body.totalPrice
//   });

//   try {
//     const newCartRecord = await cartRecord.save();
//     res.status(201).json(newCartRecord);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// }




// // удалить запись корзины
// static deleteCartRecord = async (req, res) => {
//   try {
//     await CartRecord.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Запись корзины была удалена' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }
}
module.exports = new CartRecordController
