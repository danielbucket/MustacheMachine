const express = require('express')
const router = express.Router()

const poopin_data = require('./routers/poopin_data_controller')
const contactFormSubmit = require('./routers/contactFormSubmit_controller')

router.get('/get_poopin', poopin_data.getPoopinData)
router.get('/contact_form_submit', contactFormSubmit.submitForm)

module.exports = router