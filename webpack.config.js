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
        host: '0.0.0.0',
        port: 8686,
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