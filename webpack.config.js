/*
* WEBPACK BUNDLES ALL YOU FILES INTO A DIST WHICH CAN THEN BE READ BY BROWSERS.
* */


module.exports = {
    mode: "development",
    entry: "./src/main/index.ts",
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
        ]
    }
};
