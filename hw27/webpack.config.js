const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", //production, default is none
    entry: {
        main: path.resolve(__dirname, "src/app.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello from HtmlWebpackPlugin",
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
};