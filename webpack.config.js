const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const devMode = process.env.NODE_ENV !== "production"
const mode = devMode ? 'development' : 'production'

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	ENTRIES: path.resolve(__dirname, 'src/pages'),
	TEMPLATES: path.resolve(__dirname, 'src/templates'),
	PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
};

module.exports = {
	mode: mode,
	devtool: devMode ? 'inline-source-map' : '',
	entry: {
		home: './src/index.js',
		shared: ['react', 'react-dom'],
		personal: {
			import: path.resolve(__dirname, 'src/pages/Personal/index.js'),
			filename: 'pages/personal.js',
			dependOn: 'shared',
			chunkLoading: false,
		},
		poopMachine: {
			import: path.resolve(__dirname, 'src/pages/PoopMachine/index.js'),
			filename: 'pages/poopMachine.js',
			dependOn: 'shared',
			chunkLoading: false,
		},
		discogsApp: {
			import: path.resolve(__dirname, 'src/pages/SpinCollect/index.js'),
			filename: 'pages/spinCollect.js',
			dependOn: 'shared',
			chunkLoading: false,
		},
	},
	output: {
		filename: '[name].[contenthash].js',
		path: paths.DIST,
		publicPath: paths.PUBLIC_PATH,
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Bucket Limited',
			description: 'A Webpack-compiled React app with an ExpressJS backend.',
			filename: 'bucketLimited.html',
			template: path.join(paths.TEMPLATES, '/app_template.hbs'),
		}),
		new Dotenv(),
	].concat(devMode ? [] : [
			new MiniCssExtractPlugin({ filename: 'bucketLimited.css' })
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