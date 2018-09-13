const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output:{
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true
    },
    module:{},
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new cleanWebpackPlugin(['./dist']),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
    resolve:{}
}