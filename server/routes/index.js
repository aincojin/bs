const Router = require('express')
const router = new Router()

const testRouter = require('./testRouter')
router.use('/test', testRouter)



const albumRouter = require('./albumRouter')
router.use('/album', albumRouter)

const artistRouter = require('./artistRouter')
router.use('/artist', artistRouter)

const genreRouter = require('./genreRouter')
router.use('/genre', genreRouter)

const trackRouter = require('./trackRouter')
router.use('/track', trackRouter)

const recordRouter = require('./recordRouter')
router.use('/record', recordRouter)

const cartRouter = require('./cartRouter')
router.use('/cart', cartRouter)

const cartRecordRouter = require('./cartRecordRouter')
router.use('/cartRecord', cartRecordRouter)

const userRouter = require('./userRouter')
router.use('/user', userRouter)

module.exports = router