const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js'
    },
    output:{
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        port: 3333,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [{
                    loader: miniCssExtractPlugin.loader
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: miniCssExtractPlugin.loader
                }, 'css-loader', 'less-loader']
            },
            {
                test: /[.png|.jpg]$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8*1024
                    }
                }
            },
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.html$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new cleanWebpackPlugin(['./dist']),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    resolve:{}
}