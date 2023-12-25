const { merge } = require('webpack-merge')
const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')

const commonConfig = {}

module.exports = (env, args) => {
	switch(args.mode) {
		case 'development':
			return merge(commonConfig, devConfig);
		case: 'production':
			return merge(commonConfig, prodConfig);
		default:
			throw new Error('No matching configuration was found!')
	}
}