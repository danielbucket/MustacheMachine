const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const PORT = process.env.PORT || 3647

const app = express()
const webpackConfig = require(`../webpack.config.js`)
const { publicPath } = webpackConfig.output
const compiler = webpack(webpackConfig)

const appRouter = require('./router')

app.use(
	webpackDevMiddleware(compiler, {
		publicPath,
		index: 'bucketLimited.html',
	})
)
app.use('/api/v1', appRouter)

app.listen(PORT, () => {
	console.log(`Bucket Limited server is running on port: ${PORT}`)
})