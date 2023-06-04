const Router = require('express')
const router = new Router()
const recordController = require('../controllers/recordController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', recordController.getAllRecords)
router.get('/:id', recordController.getRecordById);
router.post('/', checkRole('ADMIN'), recordController.createRecord)
router.put('/:id', checkRole('ADMIN'), recordController.updateRecord);
router.delete('/:id',checkRole('ADMIN'),recordController.deleteRecord);

module.exports = router