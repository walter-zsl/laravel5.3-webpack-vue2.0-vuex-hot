const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

module.exports = merge(baseWebpackConfig, {

	entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
   
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    console.log(entry)
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      	entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  	}, {}),

  	output: {
    	path: path.join(__dirname, '/js'),
    	filename: '[name].js',
    	publicPath: '/js'
  	},

  	plugins: [
    	new webpack.DefinePlugin({
      		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    	}),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
  	]
})