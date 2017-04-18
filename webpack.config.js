/**
 * Created by admin on 2017/4/10.
 */
/**
 * Created by admin on 2017/4/18.
 */
const {resolve, join} = require('path');
const base = require('./webpack.base');

base.plugins.push( new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false,
    //exclude: ['shared.js']
}));
base.plugins.push( new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_console: false,
    }
}))
module.exports =  base;