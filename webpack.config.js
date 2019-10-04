const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
/*
* WEBPACK BUNDLES ALL YOU FILES INTO A DIST WHICH CAN THEN BE READ BY BROWSERS.
* */


module.exports = {
    mode: "development",
    entry: [
        './app/app.ts',
        './app/assets/application.scss'
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                use: ['ts-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                //Tests for all html files
                test: /\.html$/,
                use: [
                    {
                        //Use this loader against the html files.
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'assets/css/[name].css'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve('node_modules/govuk-frontend/govuk/assets/'), to: 'assets' },
            { from: path.resolve('views'), to: 'views' },
        ]),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [ nodeExternals() ],
};
