const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: "/"//path.resolve(__dirname, 'dist')
    },
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
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    }
};