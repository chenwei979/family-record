const webpack = require('webpack');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: isDevelopment ? "/" : path.resolve(__dirname, 'dist')
    },
    devtool: isDevelopment ? "source-map" : "none",
    devServer: {
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
        })
    ],
    module: {
        rules: [
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
        extensions: ['.jsx', '.js']
    }
};