const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'frontend'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/dist.js',
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hotOnly: true,
        contentBase: path.resolve(__dirname, 'public'),
        // host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/': 'http://localhost:3000'
        }
    }
}