const express = require('express')
const router = express.Router()

const spotify_controller = require('./routes/spotify_controller')

router.get('/get_all', spotify_controller.getAll)

module.exports = router