const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", // production, default is none
    entry: {
        main: path.resolve(__dirname, "src/js/app.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, // default 8080
        open: true,
        hot: false, // !true
        liveReload: true
    },
    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' }
            // !babel
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Default Project",
            filename: "index.html",
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
};