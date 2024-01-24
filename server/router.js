const express = require('express')
const router = express.Router()

const poopin_data = require('./routers/poopin_data_controller')

router.get('/get_poopin', poopin_data.getPoopinData)

module.exports = router