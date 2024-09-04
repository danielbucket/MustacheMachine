const express = require('express')
const router = express.Router()

const poopin_data = require('./routers/poopin_data_controller')
const contactFormSubmit = require('./routers/contactFormSubmit_controller')
const projectsModule = require('./routers/projectsModule_controller')

router.use('/get_poopin', poopin_data.getPoopinData)

router.use('/contact_form/new', contactFormSubmit.POST_formSubmit)

router.use('/projects_module', projectsModule.GET_projectModuleList)

module.exports = router