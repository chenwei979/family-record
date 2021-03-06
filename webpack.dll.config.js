const path = require('path');
const webpack = require('webpack');

const DLL_PATH = path.resolve(__dirname, 'dll');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-actions', 'redux-saga', 'react-intl', 'axios']
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