const db = require("../db.js");

class CartController {

async createCart(req, res) {
  const { userId } = req.body;
    
  try {
    const newCart = await db.query(
      `INSERT INTO cart (userId) VALUES ($1) RETURNING *`,
      [userId]
    );
    
    res.json(newCart.rows[0]);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Не удалось создать корзину' });
    }
}
    

async getCartByUserId(req, res) {
  const { userId } = req.params;

  try {
    const cart = await db.query(
      `SELECT * FROM cart WHERE userId = $1`,
      [userId]
    );

    if (cart.rows.length === 0) {
      return res.status(404).json({ error: 'Корзина не найдена' });
    }

    res.json(cart.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Не удалось получить корзину' });
  }
}


async updateCart(req, res) {
  const { cartId } = req.params;
  const { userId } = req.body;

  try {
    const updatedCart = await db.query(
      `UPDATE cart SET userId = $1 WHERE id = $2 RETURNING *`,
      [userId, cartId]
    );

    if (updatedCart.rows.length === 0) {
      return res.status(404).json({ error: 'Корзина не найдена' });
    }

    res.json(updatedCart.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Не удалось обновить корзину' });
  }
}

async deleteCartByUserId(req, res) {
  const { userId } = req.params;

  try {
    await db.query(`DELETE FROM cart WHERE userid = $1`, [userId]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Не удалось удалить корзину' });
  }
}

}
  module.exports = new CartController()
  
