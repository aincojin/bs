const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const checkRole = require('../middleware/checkRoleMiddleware')


//POST /: создание новой корзины (createCart)
router.post('/', cartController.createCart);
//GET /:userId: получение корзины по ID пользователя (getCartByUserId)
router.get('/:userId', cartController.getCartByUserId);
//PUT /:userId: обновление корзины по ID пользователя (updateCart)
router.put('/:userId', cartController.updateCart);
//DELETE /:userId: удаление корзины по ID пользователя (deleteCartByUserId)
router.delete('/:userId', cartController.deleteCartByUserId);



module.exports = router