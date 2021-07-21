const path = require('path');

module.exports = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {

                }
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
};