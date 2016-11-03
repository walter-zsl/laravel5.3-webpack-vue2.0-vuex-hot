const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'inline-source-map',

	module: {
	    loaders: [
	        {   test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
	        {   test: /\.vue$/, loader: 'vue' },
	        {   test: /\.(scss|css)$/, loader: 'style!css' },
	        {
	            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	            loader: 'file',
	            options: {
	              limit: 10000,
	              name: '../imgs/[name].[hash:7].[ext]'
	            }
	        },
	        {
	            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	            loader: 'file',
	            options: {
	                limit: 10000,
	                name: '../fonts/[name].[hash:7].[ext]'
	            }
	        }
	    ]
  	},
  	resolve: {
    	alias: {
      		'vue$': 'vue/dist/vue'
    	}
  	},
}