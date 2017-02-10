const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: 'src/_static'
  },
	watch: true,
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.json$/, loader: 'json-loader' },
		]
	},
	performance: {
  	hints: false
	},
	// Webpack dev server is not currently used...
	devServer: {
		contentBase: path.join(__dirname, "/"),
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: false,
			assets: false,
			chunks: false,
			warnings: false
		},
		clientLogLevel: "error"
	}
}
