"use strict";
const path = require('path'),
    webpack = require('webpack'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    devtool: 'source-map',

    entry: {
        'index': 'index.js',
    },

    output: {
        path: path.resolve('./frontend_static'),
        filename: '[name].[hash].js',
        publicPath: "/public/frontend_static/",
    },

    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss", ".tsx", ".ts"],

        modules: [
            "node_modules",
            path.resolve(__dirname, "src/"),
            path.resolve(__dirname, "src/fonts/"),
            path.resolve(__dirname, "public/"),
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.IMAGE_TAG": JSON.stringify(process.env.IMAGE_TAG)
        })
    ],

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
                use: [MiniCssExtractPlugin.loader,'css-loader']
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: true,
        removeEmptyChunks: true,
        removeAvailableModules: true,
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
});
