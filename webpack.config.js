module.exports = {
    output: {
        filename: 'bundle.js',
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
           { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] }
        ]
    }
};
