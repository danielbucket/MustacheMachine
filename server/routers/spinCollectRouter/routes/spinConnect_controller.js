const express = require('express')
const router = express.Router()

import { spinConnect_endPoints } from './endpoints/spinConnect_endPoints'

router.use('/login_user', spinConnect_endPoints.getUserMediaLoginPackage)

module.exports = router