//webpack configuration file
const path = require('path');

module.exports = {

    //entry point
    entry: './src/index.js',
    //path and filename of output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
}