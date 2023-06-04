const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
// router.put('/:id', /*checkRole('ADMIN'),*/ userController.updateUser);
router.get('/auth', authMiddleware, userController.check)


module.exports = router