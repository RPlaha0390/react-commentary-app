var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
				test: /\.css$/, 
				use: ['style-loader', 'css-loader']
			},
			{
        test: /\.(png|jpg|svg)$/,
        use: [ 'file-loader' ],
        exclude: /node_modules/
      }
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
