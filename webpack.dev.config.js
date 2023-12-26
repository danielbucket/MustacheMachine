const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',

	plugins: [
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [],
	},
});