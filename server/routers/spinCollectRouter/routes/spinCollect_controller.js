const express = require('express')
const router = express.Router()

const spinCollect_endPoints = require('./endpoints/spinCollect_endPoints')

// router.use('/login_user', spinCollect_endPoints.getUserMediaLoginPackage)
router.use('/login_user', spinCollect_endPoints.basicResponse)

module.exports = router