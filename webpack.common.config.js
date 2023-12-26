const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	TEMPLATE: path.resolve(__dirname, 'src/templates'),
	ASSET_PATH: process.env.ASSET_PATH || '/',
}

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: paths.DIST,
		clean: true,
		publicPath: paths.ASSET_PATH,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Mustache Machine',
			description: 'A Webpack compiled React app with an ExpressJS backend',
			fileName: 'mustacheMachine',
			template: path.join(paths.TEMPLATE, '/app_template.hbs'),
		}),
	],
	
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
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.hbs$/,
				exclude: /node_modules/,
				use: [ 'handlebars-loader' ],
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
	