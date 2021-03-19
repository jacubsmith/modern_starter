const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    performance: {
        hints: 'warning',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
};
