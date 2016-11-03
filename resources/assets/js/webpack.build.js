const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const buildPath = path.resolve(__dirname, "../../../public/js/")


if (process.env.NODE_ENV === 'production') {
    module.exports = merge(baseWebpackConfig, {
        
    entry: {
        'home': './resources/assets/js/home/app.js',
    },
    output: {
        path:buildPath,
        filename: "[name].js",
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
})
}
