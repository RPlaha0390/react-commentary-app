var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/, 
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader'],
					publicPath: '/'
				})
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: [ 'file-loader' ],
				exclude: /node_modules/
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			allChunks: false,
			disable: false,
		})
	]
};
