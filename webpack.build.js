const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');

const target = process.env.NODE_ENV;

module.exports = () => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const envConfig = require(`./config/webpack.${target}.js`);
    return merge(commonConfig, envConfig);
};
