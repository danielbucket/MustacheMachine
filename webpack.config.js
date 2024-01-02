const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== "production"
const mode = devMode ? 'development' : 'production'

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	TEMPLATES: path.resolve(__dirname, 'src/templates'),
	PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
};

module.exports = {
	mode: mode,
	devtool: devMode ? 'inline-source-map' : '',
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: paths.DIST,
		publicPath: paths.PUBLIC_PATH,
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Poopin Guy',
			description: 'A Webpack-compiled React app with an ExpressJS backend.',
			filename: 'PoopinGuy.html',
			template: path.join(paths.TEMPLATES, '/app_template.hbs'),
		}),
		// new webpack.EnvironmentPlugin({
		// 	'NODE_ENV': mode,
		// }),
	].concat(devMode ? [] : [
			new MiniCssExtractPlugin({ filename: 'poopinGuy.css' })
	]),
	
	module: {
		rules: [
	    {
	      test: /\.css$/,
	      use: [
	      	devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
	      	"css-loader"
      	],
	      exclude: /node_moudles/,
	    },
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
				exclude: /node_modules/,
				use: ['handlebars-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
		],
	},
};