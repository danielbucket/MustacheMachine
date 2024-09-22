const express = require('express')
const router = express.Router()

const Home_GET_controller = require('./controllers/Home_GET_controller')
const About_GET_controller = require('./controllers/About_GET_controller')
const Contact_GET_controller = require('./controllers/Contact_GET_controller')
const Contact_POST_controller = require('./controllers/Contact_POST_controller')
const Projects_GET_controller = require('./controllers/Projects_GET_controller')

router.use('/home/GET_content', Home_GET_controller.GET_HomeContent)

router.use('/about/GET_content', About_GET_controller.GET_AboutContent)

router.use('/contact/GET_content', Contact_GET_controller.GET_ContactContent)
router.use('/contact_form/submit', Contact_POST_controller.test_POST)

router.use('/projects/GET_repo_list', Projects_GET_controller.GET_ghRepoList)
router.use('/projects/GET_repo_data/:user/:repo', Projects_GET_controller.GET_ghRepoData)

module.exports = router