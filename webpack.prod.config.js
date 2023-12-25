const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('merge')
const common = require('./webpack.common.js')


module.exports = merge(common, {
	mode: 'production',

	plugins: [
		new MiniCssExtractPlugin(),
	],
});