const express = require('express');
const router = express.Router();
const cartRecordController = require('../controllers/cartRecordController');

//POST /add-to-cart - добавление товара в корзину
router.post('/add-to-cart', cartRecordController.addToCart);
//DELETE /remove-from-cart/:userId/:productId - удаление товара из корзины по id пользователя и id товара
router.delete('/remove-from-cart/:userid/:recordid', cartRecordController.removeFromCart);
//GET /cart-items/:userId - получение всех товаров в корзине для пользователя по его id
router.get('/cart-items/:userId', cartRecordController.getCartItemsByUserId);


module.exports = router;