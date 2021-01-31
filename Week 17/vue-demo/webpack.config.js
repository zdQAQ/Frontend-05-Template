// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack'); //to access built-in plugins
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new CopyPlugin(
            {
                patterns: [
                    { from: 'src/*.html', to: '[name].[ext]' }
                ]
            }),
        // new CopyPlugin([
        //     { from: 'src/*.html', to: '[name].[ext]' }
        // ]),
    ]
};