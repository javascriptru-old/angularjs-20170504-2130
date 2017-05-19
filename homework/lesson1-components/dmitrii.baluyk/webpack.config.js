/**
 * Created by Balyuk-D on 05.05.2017.
 */
const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

var options_LRP = {
    port: 8080
}

module.exports = {
    context : path.resolve(__dirname, "src"),
    entry : {
        app: ['./app.js','./app_ts.ts']
    },
    output : {
        path : path.resolve(__dirname, "public"),
        publicPath: '/',
        filename: "[name].js",
        library: '[name]'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    devtool : 'source-map',
    plugins: [
        new LiveReloadPlugin(options_LRP),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            _:          'lodash',
            jQuery:     'jquery',
            $:          'jquery',
            jquery:     'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve : {
        extensions: [".tsx", ".ts", ".js", ".css"]
    }
}