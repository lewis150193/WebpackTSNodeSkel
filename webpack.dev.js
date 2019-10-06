const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');


const path = require('path');
const { NODE_ENV = 'production' } = process.env;

/*
* WEBPACK BUNDLES ALL YOU FILES INTO A DIST WHICH CAN THEN BE READ BY BROWSERS.
* */


const serverConfig = {
    mode: "development",
    devServer: {
        contentBase: './build',
        hot: true,
    },
    target: 'node',
    entry: [
        './app/app.ts',
        './app/assets/application.scss'
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: ['ts-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                        },
                    },
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        new WebpackShellPlugin({
            // onBuildEnd: ['yarn run:dev']
        }),
        new MiniCSSExtractPlugin({
            filename: 'assets/css/[name].css'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve('node_modules/govuk-frontend/govuk/assets/'), to: 'assets' },
            { from: path.resolve('views'), to: 'views' },
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [ nodeExternals() ],
};


const clientConfig = {
    entry: './client/main.ts',
    mode: NODE_ENV,
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'build/assets/js/'),
        filename: 'all.js'
    }
};


module.exports = [ serverConfig, clientConfig ];
