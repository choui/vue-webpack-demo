/**
 * Created by admin on 2017/4/18.
 */
const {resolve, join} = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    devServer: {
        contentBase: join(__dirname, 'build'),
        compress: false,
        port: 9000,
        host: '0.0.0.0',
        inline: true
    }
});
