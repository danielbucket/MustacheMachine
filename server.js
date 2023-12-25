const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const PORT = 3435
const ENV = process.env.NODE_ENV || 'dev'

const app = express()
const config = require(`./webpack.${ENV}.config.js`)
const compiler = webpack(config)

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	})
)

app.listen(PORT, () => {
	console.log(`Mustache Machine is listening on port:${PORT}`)
})