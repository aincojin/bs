const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')

const artistRouter = require('./artistRouter')
const cartRouter = require('./cartRouter')
const cartRecordRouter = require('./cartRecordRouter')
const genreRouter = require('./genreRouter')
const trackRouter = require('./trackRouter')
const recordRouter = require('./recordRouter')
const albumRouter = require('./albumRouter')
router.use('/album', albumRouter)
router.use('/user', userRouter)
router.use('/artist', artistRouter)
router.use('/cart', cartRouter)
router.use('/cartRecord', cartRecordRouter)
router.use('/genre', genreRouter)
router.use('/record', recordRouter)
router.use('/track', trackRouter)

module.exports = router