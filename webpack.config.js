const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        app: './src/app',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: isDevelopment ? "source-map" : "none",
    devServer: {
        contentBase: ['./', './dll', './dist'],
        headers: {"Access-Control-Allow-Origin": "*"},
        host: '192.168.3.15',
        port: 8686,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:7001",
                pathRewrite: {"^/api": ""},
                changeOrigin: true,
                secure: false,
            }
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require('./dll/vendor-manifest.json')
        }),
        new ExtractTextPlugin('app.css'),
    ],
    module: {
        rules: [
            {
                test: /\.tsx|\.ts$/,
                exclude: /^node_modules$/,
                use: 'awesome-typescript-loader'
                // loader: 'ts-loader'
            },
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(less|css)$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "less-loader"
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};