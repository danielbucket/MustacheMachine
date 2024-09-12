const express = require('express')
const router = express.Router()

const poopin_data = require('./routers/poopin_data_controller')
const contactFormSubmit = require('./routers/contactFormSubmit_controller')
const ghProjectsModule = require('./routers/ghProjectsModule_controller')
const personalPage_controller = require('./routers/personalPage_controller')

router.use('/personal/GET_data', personalPage_controller.GET_personalPageContent)

router.use('/get_poopin', poopin_data.getPoopinData)

router.use('/contact_form/new', contactFormSubmit.POST_formSubmit)

router.use('/gh_projects/GET_repo_list', ghProjectsModule.GET_ghRepoList)
router.use('/gh_projects/GET_repo_data/:user/:repo', ghProjectsModule.GET_ghRepoData)

module.exports = router