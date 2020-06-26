"use strict";
const path = require('path'),
    webpack = require('webpack'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env, argv) => ({
    devtool: 'source-map',

    entry: {
        'index': 'index.js',
    },

    output: {
        path: path.resolve('public/build'),
        filename: '[name].[hash].js',
        publicPath: "/public/build/",
    },

    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],

        modules: [
            "node_modules",
            path.resolve(__dirname, "src/"),
            path.resolve(__dirname, "src/fonts/"),
            path.resolve(__dirname, "public/"),
        ]
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]!static'
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.IMAGE_TAG": JSON.stringify(process.env.IMAGE_TAG)
        })
    ],

    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    }
});
