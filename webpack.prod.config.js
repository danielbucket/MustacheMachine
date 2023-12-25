const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
}

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		print: './src/components/printMe.js',
	},
	devtool: 'inline-source-map',
	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Mustache Machine',
		}),
	],

	output: {
		filename: '[name].bundle.js',
		path: paths.DIST,
		clean: true,
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: [ 'handlebars-loader' ],
			},
			{
				test: /\.css$/i,
				use: [ MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
		],
	}
}