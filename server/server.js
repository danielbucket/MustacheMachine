const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const cors = require('cors')
const PORT = process.env.PORT || 3647

const app = express()
const webpackConfig = require(`../webpack.config.js`)
const { publicPath } = webpackConfig.output
const compiler = webpack(webpackConfig)

const router = require('./router')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	webpackDevMiddleware(compiler, {
		publicPath,
		index: 'bucketLimited.html',
	})
)

app.use('/api/v1', router)

app.listen(PORT, () => {
	console.log(`Bucket Limited App is running on port: ${PORT}`)
})