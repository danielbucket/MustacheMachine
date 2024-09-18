const express = require('express')
const router = express.Router()

const Home_GET_controller = require('./routers/Home_GET_controller')
const About_GET_controller = require('./routers/About_GET_controller')
const Contact_GET_controller = require('./routers/Contact_GET_controller')
const Contact_POST_controller = require('./routers/Contact_POST_controller')
const Projects_GET_controller = require('./routers/Projects_GET_controller')

router.use('/home', Home_GET_controller.GET_HomeContent)

router.use('/about/GET_data', About_GET_controller.GET_AboutContent)

router.use('/contact', Contact_GET_controller.GET_ContactContent)
router.use('/contact_form/submit', Contact_POST_controller.test_POST)

router.use('/projects/GET_repo_list', Projects_GET_controller.GET_ghRepoList)
router.use('/projects/GET_repo_data/:user/:repo', Projects_GET_controller.GET_ghRepoData)

module.exports = router