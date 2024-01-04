const express = require('express')
const router = express.Router()

const discogsRouter = require('./discogsRouter')
// const spotifyRouter = require('./spotifyRouter')
const soundCloudRouter = require('./soundCloudRouter')

router.use('/discogs', discogsRouter)
// router.use('/spotify', spotifyRouter)
// router.us('/sound_cloud', soundCloudRouter)

module.exports = router