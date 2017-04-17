/**
 * Created by admin on 2017/4/10.
 */
var  path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer')({ browsers: ['iOS >= 7', 'Android >= 4.1'] });
const IS_ENV = process.env.NODE_ENV ;
var  myplugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:['vendor','manifest']
    }),
    new ExtractTextPlugin('styles.css'),
]
if(IS_ENV.indexOf("dist")>-1){
    plugins.push( new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname),
        verbose: true,
        dry: false,
        //exclude: ['shared.js']
    }));
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //         drop_console: false,
    //     }
    // }),
}else{

}

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets: [
                            "es2015",
                            "stage-0"
                        ],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            },{
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",{
                        loader:'postcss-loader',
                        options: {
                            plugins: [autoprefixer]
                        }
                    }]
                })
            }, {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: ExtractTextPlugin.extract({
                                    use: ['css-loader'],
                                    fallback: 'vue-style-loader'
                                }),
                                less: ExtractTextPlugin.extract({
                                    use: ['css-loader', 'less-loader'],
                                    fallback: 'vue-style-loader'
                                })
                            },
                            postcss: [autoprefixer]
                        }
                    },

                ]},{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]},
        resolve: {
            alias: {vue: 'vue/dist/vue.js'},
            extensions: ['.js', '.vue', '.json']
        },
        plugins:myplugins
    }
