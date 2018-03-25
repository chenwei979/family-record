const path = require('path');
const webpack = require('webpack');

const DLL_PATH = path.resolve(__dirname, 'dll');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'axios', 'redux', 'react-redux', 'redux-actions']
    },
    output: {
        path: DLL_PATH,
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve('./dll', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
};