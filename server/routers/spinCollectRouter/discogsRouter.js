const express = require('express')
const router = express.Router()

const discogs_controller = require('./routes/discogs_controller')

router.use('/get_all', discogs_controller.getCollection)

module.exports = router